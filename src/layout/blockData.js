import snake1 from "../assets/snake1.png";
import snake2 from "../assets/snake2.png";
import snake3 from "../assets/snake3.png";
import snake4 from "../assets/snake4.png";
import snake5 from "../assets/snake5.png";
import snake6 from "../assets/snake6.png";
import snake7 from "../assets/snake7.png";
import snake8 from "../assets/snake8.png";
import snake9 from "../assets/snake9.png";
import player1 from "../assets/red.png";
import player2 from "../assets/blue.png";
import player3 from "../assets/green.png";
import player4 from "../assets/black.png";

export const ladderData = [
  {
    transform: "scaleX(0.5) scaleY(0.52) rotate(-45deg)",
    top: "29%",
    left: "-25%",
  },
  {
    transform: "scaleX(0.45) scaleY(0.55) rotate(133deg)",
    top: "31%",
    left: "5%",
  },
  {
    transform: "scaleX(0.5) scaleY(0.8) rotate3d(1, 1, 1, -68deg)",
    top: "4%",
    left: "5%",
  },
  {
    transform: "scaleX(0.4) scaleY(0.48) rotate(-18deg)",
    top: "4%",
    left: "30%",
  },
  {
    transform: "scaleX(0.45) scaleY(0.37) rotate(-21deg)",
    top: "-10%",
    left: "-20%",
  },
  {
    transform: "scaleX(0.4) scaleY(0.45) rotate(0deg)",
    top: "-25%",
    left: "37%",
  },
  {
    transform: "scaleX(0.45) scaleY(0.55) rotate(133deg)",
    top: "-29%",
    left: "5%",
  },
  {
    transform: "scaleX(0.4) scaleY(0.25) rotate(-23deg)",
    top: "-35%",
    left: "-20%",
  },
  {
    transform: "scaleX(0.4) scaleY(0.2) rotate(0deg)",
    top: "-40%",
    left: "-34%",
  },
];

export const ladderMobileData = [
  {
    transform: "scaleX(0.5) scaleY(0.55) rotate(135deg)",
    top: "31%",
    left: "-25%",
  },
  {
    transform: "scaleX(0.45) scaleY(0.55) rotate(133deg)",
    top: "28%",
    left: "5%",
  },
  {
    transform: "scaleX(0.4) scaleY(1.2) rotate3d(1, 1, 1, -75deg)",
    top: "4%",
    left: "5%",
  },
  {
    transform: "scaleX(0.4) scaleY(0.48) rotate(-18deg)",
    top: "4vmin",
    left: "35vmin",
  },
  {
    transform: "scaleX(0.3) scaleY(0.37) rotate(-21deg)",
    top: "-9vmin",
    left: "-23vmin",
  },
  {
    transform: "scaleX(0.3) scaleY(0.45) rotate(0deg)",
    top: "-22vmin",
    left: "-42vmin",
  },
  {
    transform: "scaleX(0.45) scaleY(0.49) rotate(133deg)",
    top: "-25vmin",
    left: "5vmin",
  },
  {
    transform: "scaleX(0.3) scaleY(0.25) rotate(-23deg)",
    top: "-30vmin",
    left: "-23vmin",
  },
  {
    transform: "scaleX(0.3) scaleY(0.2) rotate(0deg)",
    top: "-34vmin",
    left: "-38vmin",
  },
];

export const snakeData = [
  {
    snake: snake1,
    transform: "scaleX(-0.25) scaleY(0.2) rotate(-35deg)",
    top: "38%",
    left: "-35%",
  },
  {
    snake: snake6,
    transform: "scaleX(0.75) scaleY(0.4) rotate(-35deg)",
    top: "30%",
    left: "-11%",
  },
  {
    snake: snake4,
    transform: "scaleX(0.2) scaleY(0.3) rotate(-150deg)",
    top: "25%",
    left: "21%",
  },
  {
    snake: snake3,
    transform: "scaleX(-0.4) scaleY(0.55) rotate(60deg)",
    top: "15%",
    left: "-10%",
  },
  {
    snake: snake2,
    transform: "scaleX(0.6) scaleY(0.35) rotate(-1deg)",
    top: "20%",
    left: "30%",
  },
  {
    snake: snake4,
    transform: "scaleX(-0.2) scaleY(0.2) rotate(250deg)",
    top: "0%",
    left: "46%",
  },
  {
    snake: snake3,
    transform: "scaleX(0.75) scaleY(0.35) rotate(40deg)",
    top: "5%",
    left: "-30%",
  },
  {
    snake: snake4,
    transform: "scaleX(-0.2) scaleY(0.23) rotate(250deg)",
    top: "-6%",
    left: "-34%",
  },
  {
    snake: snake6,
    transform: "scaleX(0.5) scaleY(0.5) rotate(-45deg)",
    top: "-30%",
    left: "-5%",
  },
  {
    snake: snake6,
    transform: "scaleX(0.5) scaleY(0.5) rotate(-45deg)",
    top: "-30%",
    left: "17%",
  },
  {
    snake: snake2,
    transform: "scaleX(0.5) scaleY(0.3) rotate(-100deg)",
    top: "-14%",
    left: "29%",
  },
  {
    snake: snake4,
    transform: "scaleX(-0.2) scaleY(0.2) rotate(-60deg)",
    top: "-35%",
    left: "35%",
  },
];

export const players = [
  {
    name: "red",
    icon: player1,
  },
  {
    name: "blue",
    icon: player2,
  },
  {
    name: "green",
    icon: player3,
  },
  {
    name: "black",
    icon: player4,
  },
];

export const boxLayout = [
  {
    value: 100,
    snakeExist: {
      status: false,
      dropTo: 0,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "left",
  },
  {
    value: 99,
    snakeExist: {
      status: false,
      dropTo: 0,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "left",
  },
  {
    value: 98,
    snakeExist: {
      status: false,
      dropTo: 0,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "left",
  },
  {
    value: 97,
    snakeExist: {
      status: true,
      dropTo: 66,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "left",
  },
  {
    value: 96,
    snakeExist: {
      status: false,
      dropTo: 0,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "left",
  },
  {
    value: 95,
    snakeExist: {
      status: true,
      dropTo: 68,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "left",
  },
  {
    value: 94,
    snakeExist: {
      status: false,
      dropTo: 0,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "left",
  },
  {
    value: 93,
    snakeExist: {
      status: true,
      dropTo: 71,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "left",
  },
  {
    value: 92,
    snakeExist: {
      status: false,
      dropTo: 0,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "left",
  },
  {
    value: 91,
    snakeExist: {
      status: false,
      dropTo: 0,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "left",
  },
  {
    value: 81,
    snakeExist: {
      status: false,
      dropTo: 0,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "right",
  },
  {
    value: 82,
    snakeExist: {
      status: false,
      dropTo: 0,
    },
    ladderExist: {
      status: true,
      climbTo: 99,
    },
    turn: "right",
  },
  {
    value: 83,
    snakeExist: {
      status: false,
      dropTo: 0,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "right",
  },
  {
    value: 84,
    snakeExist: {
      status: false,
      dropTo: 0,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "right",
  },
  {
    value: 85,
    snakeExist: {
      status: false,
      dropTo: 0,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "right",
  },
  {
    value: 86,
    snakeExist: {
      status: false,
      dropTo: 0,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "right",
  },
  {
    value: 87,
    snakeExist: {
      status: false,
      dropTo: 0,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "right",
  },
  {
    value: 88,
    snakeExist: {
      status: false,
      dropTo: 0,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "right",
  },
  {
    value: 89,
    snakeExist: {
      status: false,
      dropTo: 0,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "right",
  },
  {
    value: 90,
    snakeExist: {
      status: false,
      dropTo: 0,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "up",
  },
  {
    value: 80,
    snakeExist: {
      status: false,
      dropTo: 0,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "up",
  },
  {
    value: 79,
    snakeExist: {
      status: true,
      dropTo: 39,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "left",
  },
  {
    value: 78,
    snakeExist: {
      status: false,
      dropTo: 0,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "left",
  },
  {
    value: 77,
    snakeExist: {
      status: false,
      dropTo: 0,
    },
    ladderExist: {
      status: true,
      climbTo: 98,
    },
    turn: "left",
  },
  {
    value: 76,
    snakeExist: {
      status: false,
      dropTo: 0,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "left",
  },
  {
    value: 75,
    snakeExist: {
      status: false,
      dropTo: 0,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "left",
  },
  {
    value: 74,
    snakeExist: {
      status: true,
      dropTo: 51,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "left",
  },
  {
    value: 73,
    snakeExist: {
      status: false,
      dropTo: 0,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "left",
  },
  {
    value: 72,
    snakeExist: {
      status: false,
      dropTo: 0,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "left",
  },
  {
    value: 71,
    snakeExist: {
      status: false,
      dropTo: 0,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "left",
  },
  {
    value: 61,
    snakeExist: {
      status: false,
      dropTo: 0,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "right",
  },
  {
    value: 62,
    snakeExist: {
      status: false,
      dropTo: 0,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "right",
  },
  {
    value: 63,
    snakeExist: {
      status: false,
      dropTo: 0,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "right",
  },
  {
    value: 64,
    snakeExist: {
      status: false,
      dropTo: 0,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "right",
  },
  {
    value: 65,
    snakeExist: {
      status: false,
      dropTo: 0,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "right",
  },
  {
    value: 66,
    snakeExist: {
      status: false,
      dropTo: 0,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "right",
  },
  {
    value: 67,
    snakeExist: {
      status: false,
      dropTo: 0,
    },
    ladderExist: {
      status: true,
      climbTo: 96,
    },
    turn: "right",
  },
  {
    value: 68,
    snakeExist: {
      status: false,
      dropTo: 0,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "right",
  },
  {
    value: 69,
    snakeExist: {
      status: false,
      dropTo: 0,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "right",
  },
  {
    value: 70,
    snakeExist: {
      status: true,
      dropTo: 31,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "up",
  },
  {
    value: 60,
    snakeExist: {
      status: true,
      dropTo: 37,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "up",
  },
  {
    value: 59,
    snakeExist: {
      status: false,
      dropTo: 0,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "left",
  },
  {
    value: 58,
    snakeExist: {
      status: false,
      dropTo: 0,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "left",
  },
  {
    value: 57,
    snakeExist: {
      status: false,
      dropTo: 0,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "left",
  },
  {
    value: 56,
    snakeExist: {
      status: true,
      dropTo: 17,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "left",
  },
  {
    value: 55,
    snakeExist: {
      status: false,
      dropTo: 0,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "left",
  },
  {
    value: 54,
    snakeExist: {
      status: false,
      dropTo: 0,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "left",
  },
  {
    value: 53,
    snakeExist: {
      status: false,
      dropTo: 0,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "left",
  },
  {
    value: 52,
    snakeExist: {
      status: false,
      dropTo: 0,
    },
    ladderExist: {
      status: true,
      climbTo: 92,
    },
    turn: "left",
  },
  {
    value: 51,
    snakeExist: {
      status: false,
      dropTo: 0,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "left",
  },
  {
    value: 41,
    snakeExist: {
      status: false,
      dropTo: 0,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "right",
  },
  {
    value: 42,
    snakeExist: {
      status: false,
      dropTo: 0,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "right",
  },
  {
    value: 43,
    snakeExist: {
      status: false,
      dropTo: 0,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "right",
  },
  {
    value: 44,
    snakeExist: {
      status: false,
      dropTo: 0,
    },
    ladderExist: {
      status: true,
      climbTo: 78,
    },
    turn: "right",
  },
  {
    value: 45,
    snakeExist: {
      status: false,
      dropTo: 0,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "right",
  },
  {
    value: 46,
    snakeExist: {
      status: false,
      dropTo: 0,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "right",
  },
  {
    value: 47,
    snakeExist: {
      status: true,
      dropTo: 8,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "right",
  },
  {
    value: 48,
    snakeExist: {
      status: false,
      dropTo: 0,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "right",
  },
  {
    value: 49,
    snakeExist: {
      status: false,
      dropTo: 0,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "right",
  },
  {
    value: 50,
    snakeExist: {
      status: true,
      dropTo: 14,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "up",
  },
  {
    value: 40,
    snakeExist: {
      status: false,
      dropTo: 0,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "up",
  },
  {
    value: 39,
    snakeExist: {
      status: false,
      dropTo: 0,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "left",
  },
  {
    value: 38,
    snakeExist: {
      status: true,
      dropTo: 6,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "left",
  },
  {
    value: 37,
    snakeExist: {
      status: false,
      dropTo: 0,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "left",
  },
  {
    value: 36,
    snakeExist: {
      status: false,
      dropTo: 0,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "left",
  },
  {
    value: 35,
    snakeExist: {
      status: false,
      dropTo: 0,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "left",
  },
  {
    value: 34,
    snakeExist: {
      status: false,
      dropTo: 0,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "left",
  },
  {
    value: 33,
    snakeExist: {
      status: false,
      dropTo: 0,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "left",
  },
  {
    value: 32,
    snakeExist: {
      status: false,
      dropTo: 0,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "left",
  },
  {
    value: 31,
    snakeExist: {
      status: false,
      dropTo: 0,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "left",
  },
  {
    value: 21,
    snakeExist: {
      status: true,
      dropTo: 3,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "right",
  },
  {
    value: 22,
    snakeExist: {
      status: false,
      dropTo: 0,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "right",
  },
  {
    value: 23,
    snakeExist: {
      status: false,
      dropTo: 0,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "right",
  },
  {
    value: 24,
    snakeExist: {
      status: false,
      dropTo: 0,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "right",
  },
  {
    value: 25,
    snakeExist: {
      status: false,
      dropTo: 0,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "right",
  },
  {
    value: 26,
    snakeExist: {
      status: false,
      dropTo: 0,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "right",
  },
  {
    value: 27,
    snakeExist: {
      status: false,
      dropTo: 0,
    },
    ladderExist: {
      status: true,
      climbTo: 65,
    },
    turn: "right",
  },
  {
    value: 28,
    snakeExist: {
      status: false,
      dropTo: 0,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "right",
  },
  {
    value: 29,
    snakeExist: {
      status: false,
      dropTo: 0,
    },
    ladderExist: {
      status: true,
      climbTo: 68,
    },
    turn: "right",
  },
  {
    value: 30,
    snakeExist: {
      status: false,
      dropTo: 0,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "up",
  },

  {
    value: 20,
    snakeExist: {
      status: true,
      dropTo: 9,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "up",
  },
  {
    value: 19,
    snakeExist: {
      status: false,
      dropTo: 0,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "left",
  },
  {
    value: 18,
    snakeExist: {
      status: false,
      dropTo: 0,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "left",
  },
  {
    value: 17,
    snakeExist: {
      status: false,
      dropTo: 0,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "left",
  },
  {
    value: 16,
    snakeExist: {
      status: false,
      dropTo: 0,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "left",
  },
  {
    value: 15,
    snakeExist: {
      status: false,
      dropTo: 0,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "left",
  },
  {
    value: 14,
    snakeExist: {
      status: false,
      dropTo: 0,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "left",
  },
  {
    value: 13,
    snakeExist: {
      status: false,
      dropTo: 0,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "left",
  },
  {
    value: 12,
    snakeExist: {
      status: false,
      dropTo: 0,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "left",
  },
  {
    value: 11,
    snakeExist: {
      status: false,
      dropTo: 0,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "left",
  },
  {
    value: 1,
    snakeExist: {
      status: false,
      dropTo: 0,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "right",
  },
  {
    value: 2,
    snakeExist: {
      status: false,
      dropTo: 0,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "right",
  },
  {
    value: 3,
    snakeExist: {
      status: false,
      dropTo: 0,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "right",
  },
  {
    value: 4,
    snakeExist: {
      status: false,
      dropTo: 0,
    },
    ladderExist: {
      status: true,
      climbTo: 39,
    },
    turn: "right",
  },
  {
    value: 5,
    snakeExist: {
      status: false,
      dropTo: 0,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "right",
  },
  {
    value: 6,
    snakeExist: {
      status: false,
      dropTo: 0,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "right",
  },
  {
    value: 7,
    snakeExist: {
      status: false,
      dropTo: 0,
    },
    ladderExist: {
      status: true,
      climbTo: 36,
    },
    turn: "right",
  },
  {
    value: 8,
    snakeExist: {
      status: false,
      dropTo: 0,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "right",
  },
  {
    value: 9,
    snakeExist: {
      status: false,
      dropTo: 0,
    },
    ladderExist: {
      status: false,
      climbTo: 0,
    },
    turn: "right",
  },
  {
    value: 10,
    snakeExist: {
      status: false,
      dropTo: 0,
    },
    ladderExist: {
      status: true,
      climbTo: 21,
    },
    turn: "up",
  },
];
