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

//   useEffect(() => {
    

//     document.addEventListener("mousedown", handleRollEvent);

//     return () => {
//         document.removeEventListener("mousedown", handleRollEvent);
//     };
// }, []);

const handleRollEvent = async (e) => {
  if (e.button === 0 && !stopEvent) {
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
              changeTurn();
          } else {
              if (!winners[wonBy]) {
                  setWinners({ ...winners, [wonBy]: true });
                  changeTurn();
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
    if (marginTop() == -77.4 && marginLeft() == 0) {
      document.getElementById("p_turn").innerHTML = `${turn} player wins!`;
      new Audio(won).play();
      return turn;
    } else {
      return "none";
    }
  }

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

  function changeTurn() {
    // if (turn) {
    let nextPlayer = "";
    let nextTurn = "";

    do {
      switch (turn) {
        case "red":
          nextTurn = "blue";
          break;
        case "blue":
          nextTurn = localStorage.getItem("player") === "two" ? "red" : "green";
          break;
        case "green":
          nextTurn =
            localStorage.getItem("player") === "three" ? "red" : "black";
          break;
        case "black":
          nextTurn = "red";
          break;
      }
    } while (winners[turn]);
    setTurn(nextTurn);

    // Update the turn display
    switch (nextTurn) {
      case "red":
        nextPlayer = "Red player's turn";
        break;
      case "blue":
        nextPlayer = "Blue player's turn"
        break;
      case "green":
        nextPlayer = "Green player's turn";
        break;
      case "black":
        nextPlayer = "Black player's turn";
        break;
    }
    document.querySelector("#p_turn").innerHTML = nextPlayer;
    // }
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
        [43.5, 0, "बॉडी टॉक नहीं करना चाहिए"],
        [87, 0, "कक्षा में लड़के-लड़की शामिल बैठाने चाहिए"],
        [58.8, -19.6],
        [78.4, -19.6],
        [29.4, -39.2],
        [78.4, -49],
        [58.8, -58.8],
        [29.4, -68.6],
        [9.8, -78.4],
        [0, -19.6],
        [19.6, -29.4],
        [58.8, -39.2],
        [39.2, -49],
        [88.2, -39.2],
        [88.2, -58.8],
        [0, -49],
        [9.7, -68.6],
        [58.8, -68.6],
        [49, -88.2],
        [29.4, -88.2],
        [68.6, -88.2],
      ];

      let tos = [
        [14.5, -25.8],
        [58, -25.8],
        [39.2, -58.8],
        [68.6, -58.8],
        [19.6, -68.6],
        [78.4, -88.2],
        [39.2, -88.2],
        [19.6, -88.2],
        [9.8, -88.2],
        [19.6, 0],
        [49, 0],
        [68.6, 0],
        [29.4, -9.8],
        [58.8, -9.8],
        [88.2, -29.4],
        [29.4, -29.4],
        [9.8, -29.4],
        [88.2, -49],
        [68.6, -58.8],
        [49, -58.8],
        [88.2, -68.6],
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
      document.querySelector("#cube_inner").style.transform =
        "rotateX(360deg) rotateY(360deg)";
      await new Promise((resolve) => setTimeout(resolve, 750));
      document.querySelector("#cube_inner").style.transform = `rotateX(${
        values[diceNum - 1][0]
      }deg) rotateY(${values[diceNum - 1][1]}deg)`;
      await new Promise((resolve) => setTimeout(resolve, 750));
      resolve(diceNum);
    });
  }

  return (
    <div id="side" className="cursor-pointer" onMouseDown={(e)=>handleRollEvent(e)}>
      <p id="p_turn" className="font-semibold">
        Red player's turn
      </p>
      <div id="cube_outer">
        <div id="cube_inner" className="mt-4">
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