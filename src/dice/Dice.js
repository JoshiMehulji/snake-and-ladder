import React, { useEffect, useState } from "react";
import dice1 from "../assets/Dice1.jpg";
import dice2 from "../assets/Dice2.jpg";
import dice3 from "../assets/Dice3.jpg";
import dice4 from "../assets/Dice4.jpg";
import dice5 from "../assets/Dice5.jpg";
import dice6 from "../assets/Dice6.jpg";
import diceRoll from "../assets/DiceRoll.mp3";
import walkSound from "../assets/walk.mp3";

const Dice = ({ turn, checkRange, marginLeft, marginTop, setTurn }) => {
  const [stopEvent, setStopEvent] = useState(false);
  const [winners, setWinners] = useState({
    red: false,
    blue: false,
    green: false,
    black: false,
  });

  console.log(turn);

  function checkRange(diceNum) {
    let isOutOfRange = false;
    if (
      marginTop == -88.2 &&
      marginLeft + Number((diceNum * -9.8).toFixed(1)) < 0
    ) {
      isOutOfRange = true;
    }
    return isOutOfRange;
  }

  function changeTurn() {
    // if (turn) {
      let nextPlayer;
      let nextTurn;

      do {
        switch (turn) {
          case "red":
            nextTurn = "blue";
            break;
          case "blue":
            nextTurn = "green";
            break;
          case "green":
            nextTurn = "black";
            break;
          case "black":
            nextTurn = "red";
            break;
        }
      } while (winners[turn]);

      // Update the turn display
      switch (turn) {
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
      }
      console.log(nextPlayer);
      document.querySelector("#p_turn").innerHTML = nextPlayer;
      if (nextTurn) {
        setTurn(nextTurn);
      }
    // }                    
  }

  function checkRange(diceNum) {
    let isOutOfRange = false;
    if (
      marginTop == -88.2 &&
      marginLeft + Number((diceNum * -9.8).toFixed(1)) < 0
    ) {
      isOutOfRange = true;
    }
    return isOutOfRange;
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

  function getDirection() {
    let direction;
    if (
      (marginLeft == 88.2 && ((marginTop * 10) % (-19.6 * 10)) / 10 == 0) ||
      (marginLeft == 0 && ((marginTop * 10) % (-19.6 * 10)) / 10 != 0)
    ) {
      direction = "up";
    } else if (((marginTop * 10) % (-19.6 * 10)) / 10 == 0) {
      direction = "right";
    } else {
      direction = "left";
    }
    return direction;
  }

  function checkLaddersAndSnakes() {
    return new Promise(async (resolve, reject) => {
      let froms = [
        [29.4, 0],
        [58.8, 0],
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
        [9.8, -29.4],
        [39.2, -29.4],
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
        if (marginLeft == froms[i][0] && marginTop == froms[i][1]) {
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
      if (document.getElementById(`${turn}`)) {
        if (direction == "up") {
          document.getElementById(`${turn}`).style.marginTop =
            String(marginTop - 9.8) + "vmin";
        } else if (direction == "right") {
          document.getElementById(`${turn}`).style.marginLeft =
            String(marginLeft + 9.8) + "vmin";
        } else if (direction == "left") {
          document.getElementById(`${turn}`).style.marginLeft =
            String(marginLeft - 9.8) + "vmin";
        }
      }
      await new Promise((resolve) => setTimeout(resolve, 400));
      resolve();
    });
  }
  function checkwin() {
    if (marginTop == -88.2 && marginLeft == 0) {
      document.querySelector("#p_turn").innerHTML = `${turn} player wins!`;
      new Audio("won.mp3").play();
      return turn;
    } else {
      return "none";
    }
  }

  useEffect(() => {
    async function handleRollEvent(e) {
      if (e.button == 0 && !stopEvent) {
        setStopEvent(true);
        let diceNum = await roll();
        let isOutOfRange = checkRange(diceNum);
        await new Promise((resolve) => setTimeout(resolve, 400)); //before run
        if (!isOutOfRange) {
          await run(diceNum);
          await new Promise((resolve) => setTimeout(resolve, 400)); //after run
        }
        let wonBy = checkwin();
        if (turn) {
          if (wonBy == "none") {
            changeTurn();
            setStopEvent(false);
          } else {
            if (!winners[wonBy]) {
              setWinners({ ...winners, [wonBy]: true });
              changeTurn();
            }
            setStopEvent(false);
          }
        }
      }
    }
    document.addEventListener("mousedown", handleRollEvent);

    return () => {
      document.removeEventListener("mousedown", handleRollEvent);
    };
  }, []);
  return (
    <div id="side">
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