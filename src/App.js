import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
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
  const [modalTextColor, setModalTextColor] = useState("red");
  const [showCelebrationGif, setShowCelebrationGif] = useState(false);
  const [winners, setWinners] = useState();

  useEffect(()=>{
    setWinners(
      localStorage.getItem("player") == "two"
        ? {
            red: false,
            blue: false,
          }
        : localStorage.getItem("player") == "three"
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
    )
  }, [localStorage, selected]);

  return (
    <React.Fragment>
      {showModal && <Modal setShowModal={setShowModal} modalText={modalText} modalTextColor={modalTextColor} setShowCelebrationGif={setShowCelebrationGif} showCelebrationGif={showCelebrationGif} />}
      {playerSelected ? (
        <div className="flex flex-col xl:flex-row justify-between p-2 gap-4 h-screen">
          <div className="w-[15%] hidden xl:flex items-center">
            <Dice
              selected={selected}
              direction={direction}
              setShowModal={setShowModal}
              setModalText={setModalText}
              winners={winners}
              setWinners={setWinners}
              setPlayerSelected={setPlayerSelected}
              setModalTextColor={setModalTextColor}
            />
          </div>
          <div className="w-full sm:w-[96%] xl:w-[45%] h-full overflow-hidden m-auto">
            <Layout selected={selected} setDirection={setDirection} />
          </div>
          <div className="xl:w-[15%] flex sm:flex-col md:flex-row items-center gap-4">
            <div className="w-[50%] md:w-full">
              <WinnerList winners={winners} setWinners={setWinners} />
            </div>
            <div className="xl:hidden w-[50%]">
              <Dice
                selected={selected}
                direction={direction}
                setShowModal={setShowModal}
                setModalText={setModalText}
                winners={winners}
                setWinners={setWinners}
                setPlayerSelected={setPlayerSelected}
                setModalTextColor={setModalTextColor}
              />
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
