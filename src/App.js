import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Layout from "./layout/Layout";
import Dice from "./dice/Dice";
import WinnerList from "./winner/WinnerList";
import Players from "./Players";
import Modal from "./modal/Modal";

function App() {
  const [playerSelected, setPlayerSelected] = useState(false);
  const [selected, setSelected] = useState("");
  const [direction, setDirection] = useState("right");
  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState("");
  const [winners, setWinners] = useState(
    localStorage.getItem("player") === "two"
      ? {
          red: false,
          blue: false,
        }
      : localStorage.getItem("player") === "three"
      ? {
          red: false,
          blue: false,
          green: false,
        }
      : {
          red: false,
          blue: false,
          green: false,
          black: false,
        }
  );

  return (
    <React.Fragment>
      {showModal && (
        <Modal setShowModal={setShowModal} modalText={modalText} />
      )}
      {playerSelected ? (
        <div className="flex flex-col md:flex-row justify-between p-2 gap-4">
          <div className="w-[15%] hidden md:flex items-center">
            <Dice selected={selected} direction={direction} setShowModal={setShowModal} setModalText={setModalText} winners={winners} setWinners={setWinners} />
          </div>
          <div className="md:w-[70%] overflow-hidden">
            <Layout selected={selected} setDirection={setDirection} />
          </div>
          <div className="md:w-[15%] flex items-center gap-4">
            <div className="w-[50%] md:w-full">
              <WinnerList winners={winners} setWinners={setWinners} />
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
            selected={selected}
          />
        </div>
      )}
    </React.Fragment>
  );
}

export default App;
