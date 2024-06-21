import React, { useEffect, useRef, useState } from "react";
import dice1 from "../assets/Dice1.jpg";
import dice2 from "../assets/Dice2.jpg";
import dice3 from "../assets/Dice3.jpg";
import dice4 from "../assets/Dice4.jpg";
import dice5 from "../assets/Dice5.jpg";
import dice6 from "../assets/Dice6.jpg";
import diceRoll from "../assets/DiceRoll.mp3";
import walkSound from "../assets/walk.mp3";
import won from "../assets/won.mp3";
import clsx from "clsx";

const Dice = ({
  selected,
  setShowModal,
  setModalText,
  winners,
  setWinners,
  setPlayerSelected,
  setModalTextColor,
  setShowCelebrationGif
}) => {
  const [turn, setTurn] = useState("red");
  const [stopEvent, setStopEvent] = useState(false);
  const [play, setPlay] = useState(false);
  const [turnMessage, setTurnMessage] = useState("Red player's turn");
  const [cubeStyle, setCubeStyle] = useState("");
  const playRef = useRef();
  const leftValue = 9.5;
  const topValue = 9.5;
  const leftDirectionVal = 85.5;

  useEffect(() => {
    const handlePlay = (event) => {
      if (
        playRef?.current &&
        playRef?.current?.contains(event?.target) &&
        !play
      ) {
        alert("खेल शुरू करने के लिए आओ खेले बटन पर क्लिक करे|");
      }
    };

    document.addEventListener("mousedown", handlePlay);

    return () => {
      document.removeEventListener("mousedown", handlePlay);
    };
  });

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
          // if(diceNum == 6){
          //   return;
          // }
          changeTurn(winners);
        } else {
          if (!winners[wonBy]) {
            const updatedWinners = { ...winners, [wonBy]: true };
            setShowModal(true);
            setModalTextColor("GREEN");
            setModalText(
              "Congratulations\n आधाफुल कॉमिक्स के सभी संदेश समझ लिए"
              );
            // setShowCelebrationGif(true);
            if (
              Object.entries(updatedWinners).every(
                ([key, value]) => value == true
              )
            ) {
              setWinners(updatedWinners);
              // setTimeout(() => {
              //   setShowModal(true);
              //   setModalText("Game Over");
              // }, 5000);
              setTimeout(() => {
                setPlayerSelected(false);
              }, 5000);
              return;
            } else {
              setWinners(updatedWinners);
              changeTurn(updatedWinners);
            }
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
    if (marginTop() === -85.5 && marginLeft() === 0) {
      // Assuming "turn" is a state variable
      setTurnMessage(`${turn} player wins!`);
      new Audio(won).play();
      return turn;
    } else {
      return "none";
    }
  }

  function checkRange(diceNum) {
    let isOutOfRange = false;
    if (
      marginTop() == -85.5 &&
      marginLeft() + Number((diceNum * -9.5).toFixed(1)) < 0
    ) {
      isOutOfRange = true;
    }
    return isOutOfRange;
  }

  function changeTurn(finalWin) {
    let currentPlayer = turn;
    let nextPlayer = "";
    let nextTurn = "";

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
        [28.5, 0, "बॉडी टॉक नहीं करना चाहिए", "GREEN"],
        [57, 0, "कक्षा में लड़के-लड़कियाँ शामिल बैठाने चाहिए", "GREEN"],
        [57, -19, "लड़के-लड़की दोनों की समान भागीदारी", "GREEN"],
        [76, -19, "खाना सभी बना सकते हैं", "GREEN"],
        [28.5, -38, "कभी किसी को चिढ़ाना नहीं चाहिए", "GREEN"],
        [76, -47.5, "सम्मान करते समय गुण देखें, रंग-रूप नहीं", "GREEN"],
        [57, -57, "लड़के-लड़कियाँ दोनों भारी काम कर सकते हैं", "GREEN"],
        [28.5, -66.5, "हर रूप-रंग के व्यक्ति का सम्मान करें", "GREEN"],
        [9.5, -76, "सभी कॉमिक्स के सन्देश समझ कर अमल कर रहे हैं", "GREEN"],
        // snake below
        [0, -19, "गोरा होने के लिए क्रीम जरुरी है", "RED"],
        [19, -28.5, "पानी भरना केवल लड़कियों का काम है", "RED"],
        [57, -38, "किसी के शरीर से जुड़ी बात कहना", "RED"],
        [85.5, -38, "वह मोटी है दौड़ नहीं सकेगी", "RED"],
        [38, -47.5, "गाड़ी चलाना लड़कों का काम है", "RED"],
        [85.5, -57, "शेर जैसा बालक", "RED"],
        [0, -47.5, "हिरनी जैसी चाल", "RED"],
        [9.5, -66.5, "रंग-रूप, कद-काठी से शिक्षा में बाधा ", "RED"],
        [57,-66.5, "छोटा कद कार्य में बाधक है", "RED"],
        [28.5,-85.5, "घर का कार्य लड़कियाँ ही कर सकती हैं।", "RED"],
        [47.5, -85.5, "लड़के-लड़की में भेद करना", "RED"],
        [66.5, -85.5, "कपड़े धोने का काम लड़के ही कर सकते हैं", "RED"],
      ];

      let tos = [
        // ladder below
        [9.5, -28.5],
        [38, -28.5],
        [38, -57],
        [66.5, -57],
        [19, -66.5],
        [76, -85.5],
        [38, -85.5],
        [19, -85.5],
        [9.5, -85.5],
        // // snake below
        [19, 0],
        [47.5, 0],
        [66.5, 0],
        [57, -9.5],
        [28.5, -9.5],
        [85.5, -28.5],
        [28.5, -28.5],
        [9.5, -28.5],
        [85.5, -47.5],
        [47.5, -57],
        [66.5, -57],
        [85.5, -66.5],
      ];
      for (let i = 0; i < tos.length; i++) {
        if (marginLeft() == froms[i][0] && marginTop() == froms[i][1]) {
          setShowModal(true);
          setModalText(froms[i][2]);
          setModalTextColor(froms[i][3] === "GREEN" ? "green" : "red");
          setTimeout(() => {
            document.getElementById(
              `${turn}`
            ).style.marginLeft = `${tos[i][0]}vmin`;
            document.getElementById(
              `${turn}`
            ).style.marginTop = `${tos[i][1]}vmin`;
          }, 5500);
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
          String(marginTop() - topValue) + "vmin";
      } else if (direction == "right") {
        document.getElementById(`${turn}`).style.marginLeft =
          String(marginLeft() + parseFloat(leftValue)) + "vmin";
      } else if (direction == "left") {
        document.getElementById(`${turn}`).style.marginLeft =
          String(marginLeft() - parseFloat(leftValue)) + "vmin";
      }
      // }
      await new Promise((resolve) => setTimeout(resolve, 400));
      resolve();
    });
  }

  function getDirection() {
    let direction;
    if (
      (marginLeft() == leftDirectionVal &&
        ((marginTop() * 10) % (-19 * 10)) / 10 == 0) ||
      (marginLeft() == 0 &&
        ((marginTop() * 10) % (-19 * 10)) / 10 != 0)
    ) {
      direction = "up";
    } else if (((marginTop() * 10) % (-19 * 10)) / 10 == 0) {
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
      await new Promise((resolve) => setTimeout(resolve, 750));
      setCubeStyle(
        `rotateX(${values[diceNum - 1][0]}deg) rotateY(${
          values[diceNum - 1][1]
        }deg)`
      );
      await new Promise((resolve) => setTimeout(resolve, 750));
      resolve(diceNum);
    });
  }

  return (
    <div className="flex gap-4 justify-center flex-col items-center">
      {!play && (
        <div className="w-full">
          <button
            className="bg-black text-white cursor-pointer py-2 px-8 uppercase rounded-md font-semibold w-full"
            onClick={() => setPlay(true)}
          >
            आओ खेलें
          </button>
        </div>
      )}
      <div ref={playRef} className="w-full">
        <div
          id="side"
          className={clsx(
            "cursor-pointer w-[100%!important] p-2",
            !play && "pointer-events-none"
          )}
          onClick={(e) => handleRollEvent(e)}
        >
          <p id="p_turn" className="font-semibold">
            {turnMessage}
          </p>
          <div id="cube_outer">
            <div
              id="cube_inner"
              className="mt-4"
              style={{ transform: cubeStyle }}
            >
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
      </div>
    </div>
  );
};

export default Dice;
