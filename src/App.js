import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Layout from "./layout/Layout";
import Dice from "./dice/Dice";
import WinnerList from "./winner/WinnerList";

function App() {
  const [turn, setTurn] = useState("red");

  function marginLeft() {
    return Number(
      document.getElementById(`${turn}`).style.marginLeft.split("v")[0]
    );
  }
  function marginTop() {
    return Number(
      document.getElementById(`${turn}`).style.marginTop.split("v")[0]
    );
  }

  return (
    <React.Fragment>
      <div className="flex flex-col md:flex-row justify-between p-2 gap-4">
        <div className="w-[15%] hidden md:flex items-center">
          <Dice
            marginLeft={marginLeft}
            marginTop={marginTop}
            turn={turn}
            setTurn={setTurn}
          />
        </div>
        <div className="md:w-[70%] overflow-hidden">
          <Layout />
        </div>
        <div className="md:w-[15%] flex items-center gap-4">
          <div className="w-[50%] md:w-full">
            <WinnerList />
          </div>
          <div className="md:hidden w-[50%]">
            <Dice />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
