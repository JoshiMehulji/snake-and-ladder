import React, { useEffect, useState } from "react";
import dice1 from "../assets/Dice1.jpg";
import dice2 from "../assets/Dice2.jpg";
import dice3 from "../assets/Dice3.jpg";
import dice4 from "../assets/Dice4.jpg";
import dice5 from "../assets/Dice5.jpg";
import dice6 from "../assets/Dice6.jpg";
import diceRoll from "../assets/DiceRoll.mp3";
import walkSound from "../assets/walk.mp3";
import won from "../assets/won.mp3";

const Dice = ({ selected, setShowModal, setModalText, winners, setWinners }) => {
  const [turn, setTurn] = useState("red");
  const [stopEvent, setStopEvent] = useState(false);
  const [turnMessage, setTurnMessage] = useState("Red player's turn");
  const [cubeStyle, setCubeStyle] = useState('');

//   useEffect(() => {
    

//     document.addEventListener("mousedown", handleRollEvent);

//     return () => {
//         document.removeEventListener("mousedown", handleRollEvent);
//     };
// }, []);

// const handleRollEvent = async (e) => {
//   if (e.button === 0 && !stopEvent) {
//       setStopEvent(true);
//       try {
//           const diceNum = await roll();
//           const isOutOfRange = checkRange(diceNum);
//           // Delay before running the dice
//           await new Promise((resolve) => setTimeout(resolve, 400));

//           if (!isOutOfRange) {
//               await run(diceNum);
//           }

//           const wonBy = checkwin();
//           console.log(wonBy)
//           if (wonBy === "none") {
//               changeTurn(turn, winners);
//           } else {
//             console.log(winners[wonBy])
//               if (!winners[wonBy]) {
//                 let winList = {...winners, [wonBy]: true};
//                   setWinners((prev)=> ({...prev, [wonBy]: true }));
//                   changeTurn(turn, winList);
//               }
//           }
//       } catch (error) {
//           console.error("Error handling roll event:", error);
//       } finally {
//           // Delay after running the dice
//           await new Promise((resolve) => setTimeout(resolve, 400));
//           setStopEvent(false);
//       }
//   }
// };

const handleRollEvent = async (e) => {
  if (!stopEvent) {
    setStopEvent(true);
    try {
      const diceNum = await roll();
      const isOutOfRange = checkRange(diceNum);
      
      // Delay before running the dice
      await new Promise((resolve) => setTimeout(resolve, 400));
      
      if (!isOutOfRange) {
        await run(diceNum);
      }
      
      const wonBy = checkwin();
      
      if (wonBy === "none") {
        if(diceNum == 6){
          return;
        }
        changeTurn(winners);
      } else {
        if (!winners[wonBy]) {
          const updatedWinners = { ...winners, [wonBy]: true };
          setWinners(updatedWinners);
          changeTurn(updatedWinners);
        } else {
          // Skip turn if the player has already won
          setStopEvent(false);
        }
      }
    } catch (error) {
      console.error("Error handling roll event:", error);
    } finally {
      // Delay after running the dice
      await new Promise((resolve) => setTimeout(resolve, 400));
      setStopEvent(false);
    }
  }
};

function checkwin() {
  if (marginTop() === -77.4 && marginLeft() === 0) {
    // Assuming "turn" is a state variable
    setTurnMessage(`${turn} player wins!`);
    new Audio(won).play();
    return turn;
  } else {
    return "none";
  }
}

  // function checkwin() {
  //   if (marginTop() == -77.4 && marginLeft() == 0) {
  //     document.getElementById("p_turn").innerHTML = `${turn} player wins!`;
  //     new Audio(won).play();
  //     return turn;
  //   } else {
  //     return "none";
  //   }
  // }

  function checkRange(diceNum) {
    let isOutOfRange = false;
    if (
      marginTop() == -77.4 &&
      marginLeft() + Number((diceNum * -14.5).toFixed(1)) < 0
    ) {
      isOutOfRange = true;
    }
    return isOutOfRange;
  }

  function changeTurn(finalWin) {
    let currentPlayer = turn;
    let nextPlayer = "";
    let nextTurn = "";

    // if (finalWin[turn]) {
    //   setStopEvent(false);
    //   return;
    // }
  
    const playerCount = Object?.keys(finalWin).length;

    do {
      switch (currentPlayer) {
          case "red":
              nextTurn = "blue";
              break;
          case "blue":
              nextTurn = playerCount === 2 ? "red" : "green";
              break;
          case "green":
              nextTurn = playerCount === 3 ? "red" : "black";
              break;
          case "black":
              nextTurn = "red";
              break;
          default:
              nextTurn = "red";
              break;
      }

      currentPlayer = nextTurn;

  } while (finalWin[currentPlayer]);

    switch (nextTurn) {
        case "red":
            nextPlayer = "Red player's turn";
            break;
        case "blue":
            nextPlayer = "Blue player's turn";
            break;
        case "green":
            nextPlayer = "Green player's turn";
            break;
        case "black":
            nextPlayer = "Black player's turn";
            break;
        default:
            nextPlayer = "Red player's turn"; // Default to "red" if unexpected value
            break;
    }
    setTurn(nextTurn);
    setTurnMessage(nextPlayer);
  }

  // function changeTurn(playerTurn, finalWin) {
  //   console.log(finalWin)
  //   // if (turn) {
  //   let nextPlayer = "";
  //   let nextTurn = "";

  //   do {
  //     switch (playerTurn) {
  //       case "red":
  //         nextTurn = "blue";
  //         break;
  //       case "blue":
  //         nextTurn = localStorage.getItem("player") === "two" ? "red" : "green";
  //         break;
  //       case "green":
  //         nextTurn =
  //           localStorage.getItem("player") === "three" ? "red" : "black";
  //         break;
  //       case "black":
  //         nextTurn = "red";
  //         break;
  //     }
  //   } while (finalWin[playerTurn]);

  //   // Update the turn display
  //   switch (nextTurn) {
  //     case "red":
  //       nextPlayer = "Red player's turn";
  //       break;
  //     case "blue":
  //       nextPlayer = "Blue player's turn"
  //       break;
  //     case "green":
  //       nextPlayer = "Green player's turn";
  //       break;
  //     case "black":
  //       nextPlayer = "Black player's turn";
  //       break;
  //   }
  //   document.querySelector("#p_turn").innerHTML = nextPlayer;
  //   setTurn(nextTurn);

  //   // }
  // }

  function run(diceNum) {
    return new Promise(async (resolve, reject) => {
      for (let i = 1; i <= diceNum; i++) {
        let direction = getDirection();
        await move(direction);
      }
      // iss function mese mene await hataya hai
      await checkLaddersAndSnakes();
      resolve();
    });
  }
  function checkLaddersAndSnakes() {
    return new Promise(async (resolve, reject) => {
      let froms = [
        // ladder below
        [43.5, 0, "बॉडी टॉक नहीं करना चाहिए"],
        [87, 0, "कक्षा में लड़के-लड़की शामिल बैठाने चाहिए"],
        [87,-17.2,"लड़के-लड़की दोनों की समान भागीदारी"],
        [116,-17.2,"खाना सभी बना सकते है"],
        [43.5,-34.4,"कभी किसी को चिढ़ाना नहीं चाहिए"],
        [116,-43,"सम्मान करते समय गुण देखे, रंग रूप नहीं"],
        [87,-51.6,"लड़के-लड़की दोनों भारी काम कर सकते है"],
        [43.5,-60.2,"हर रूप रंग के व्यक्ति का सम्मान करें"],
        [14.5,-68.8,"सभी कॉमिक्स के सन्देश समझ कर अमल कर रहे है"],
        // snake below
        [0,-17.2,"गोरा होने के लिए क्रीम जरुरी है"],
        [29,-25.8,"पानी भरना केवल लड़को का काम है"],
        [87,-34.4,"किसी के शरीर से जुडी बात कहना"],
        [130.5,-34.4,"वह मोटी है दौड़ नहीं सकेगी"],
        [58,-43,"गाड़ी चलाना लड़को का काम है"],
        [130.5,-51.6,"शेर जैसा बालक"],
        [0,-43,"हिरनी जैसी चाल"],
        [14.5,-60.2,"रंग-रूप, कद-काठी, से शिक्षा में बाधा है "],
        [87,-60.2,"छोटा कद कार्य में बाधक है"],
        [43.5,-77.4,"घर का कार्य लड़कियाँ ही कर सकती है।"],
        [72.5,-77.4,"लड़के-लड़की में भेद करना"],
        [101.5,-77.4,"कपड़े धोने का काम लड़के ही कर सकते है"],
      ];

      let tos = [
        // ladder below
        [14.5, -25.8],
        [58, -25.8],
        [58,-51.6],
        [101.5,-51.6],
        [29,-60.2],
        [116,-77.4],
        [58,-77.4],
        [29,-77.4],
        [14.5,-77.4],
        // // snake below
        [29,0],
        [72.5, 0],
        [101.5, 0],
        [87,-8.6],
        [43.5,-8.6],
        [130.5,-25.8],
        [43.5,-25.8],
        [14.5,-25.8],
        [130.5,-43],
        [72.5,-51.6],
        [101.5,-51.6],
        [130.5,-60.2],
      ];
      for (let i = 0; i < tos.length; i++) {
        if (marginLeft() == froms[i][0] && marginTop() == froms[i][1]) {
          setShowModal(true);
          setModalText(froms[i][2]);
          // if(document.getElementById('modal-text')){
          //   document.getElementById('modal-text').innerText = froms[i][2];
          // }
          document.getElementById(
            `${turn}`
          ).style.marginLeft = `${tos[i][0]}vmin`;
          document.getElementById(
            `${turn}`
          ).style.marginTop = `${tos[i][1]}vmin`;
          await new Promise((resolve) => setTimeout(resolve, 400));
          break;
        }
      }
      resolve();
    });
  }
  function move(direction) {
    return new Promise(async (resolve, reject) => {
      new Audio(walkSound).play();
      // if (document.querySelector(`${turn}`)) {
        if (direction == "up") {
          document.getElementById(`${turn}`).style.marginTop =
            String(marginTop() - 8.6) + "vmin";
        } else if (direction == "right") {
          document.getElementById(`${turn}`).style.marginLeft =
            String(marginLeft() + 14.5) + "vmin";
        } else if (direction == "left") {
          document.getElementById(`${turn}`).style.marginLeft =
            String(marginLeft() - 14.5) + "vmin";
        }
      // }
      await new Promise((resolve) => setTimeout(resolve, 400));
      resolve();
    });
  }

  function getDirection() {
    let direction;
    if (
      (marginLeft() == 130.5 && ((marginTop() * 10) % (-17.2 * 10)) / 10 == 0) ||
      (marginLeft() == 0 && ((marginTop() * 10) % (-17.2 * 10)) / 10 != 0)
    ) {
      direction = "up";
    } else if (((marginTop() * 10) % (-17.2 * 10)) / 10 == 0) {
      direction = "right";
    } else {
      direction = "left";
    }
    return direction;
  }

  function marginLeft() {
    return parseFloat(
      document.getElementById(`${turn}`).style.marginLeft.split("v")[0]
    );
  }
  function marginTop() {
    return parseFloat(
      document.getElementById(`${turn}`).style.marginTop.split("v")[0]
    );
  }

  function roll() {
    return new Promise(async (resolve, reject) => {
      let diceNum = Math.floor(Math.random() * 6) + 1;
      let values = [
        [0, -360],
        [-180, -360],
        [-180, 270],
        [0, -90],
        [270, 180],
        [90, 90],
      ];
      new Audio(diceRoll).play();
      setCubeStyle("rotateX(360deg) rotateY(360deg)");
      // document.getElementById("cube_inner").style.transform =
      //   "rotateX(360deg) rotateY(360deg)";
      await new Promise((resolve) => setTimeout(resolve, 750));
      // document.getElementById("cube_inner").style.transform = `rotateX(${
      //   values[diceNum - 1][0]
      // }deg) rotateY(${values[diceNum - 1][1]}deg)`;
      setCubeStyle(`rotateX(${
        values[diceNum - 1][0]
      }deg) rotateY(${values[diceNum - 1][1]}deg)`);
      await new Promise((resolve) => setTimeout(resolve, 750));
      resolve(diceNum);
    });
  }

  return (
    <div id="side" className="cursor-pointer" onClick={(e)=>handleRollEvent(e)}>
      <p id="p_turn" className="font-semibold">
        {turnMessage}
      </p>
      <div id="cube_outer">
        <div id="cube_inner" className="mt-4" style={{transform: cubeStyle}}>
          <div id="front">
            <img src={dice1} />
          </div>
          <div id="back">
            <img src={dice2} />
          </div>
          <div id="left">
            <img src={dice3} />
          </div>
          <div id="right">
            <img src={dice4} />
          </div>
          <div id="top">
            <img src={dice5} />
          </div>
          <div id="bottom">
            <img src={dice6} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dice;
// (marginLeft() == 130.5 && ((marginTop() * 10) % (-16.4 * 10)) / 10 == 0) ||
//       (marginLeft() == 0 && ((marginTop() * 10) % (-16.4 * 10)) / 10 != 0)