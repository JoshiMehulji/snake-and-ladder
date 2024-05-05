import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Layout from "./layout/Layout";
import Dice from "./dice/Dice";
import WinnerList from "./winner/WinnerList";
import Players from "./Players";

function App() {
  const [playerSelected, setPlayerSelected] = useState(false);
  const [selected, setSelected] = useState("two");
  const [direction, setDirection] = useState("right");

  return (
    <React.Fragment>
      {playerSelected ? (
        <div className="flex flex-col md:flex-row justify-between p-2 gap-4">
          <div className="w-[15%] hidden md:flex items-center">
            <Dice selected={selected} direction={direction} />
          </div>
          <div className="md:w-[70%] overflow-hidden">
            <Layout selected={selected} setDirection={setDirection} />
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
      ) : (
        <div className="flex justify-center items-center h-screen">
          <Players
            setPlayerSelected={setPlayerSelected}
            setSelected={setSelected}
          />
        </div>
      )}
    </React.Fragment>
  );
}

export default App;
