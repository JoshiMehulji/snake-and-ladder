import React from "react";
import unicef from "./assets/united-nations-childrens-fund-unicef-vector-logo.png";
import RSCERT from "./assets/RSCERT-logo.jpeg";

const Players = ({ setPlayerSelected, setSelected, selected }) => {
  return (
    <React.Fragment>
      <div className="w-[98%] flex flex-col justify-center h-[60vh] w-[60%]">
        <div>
          <p className="text-red-500 md:text-xl font-bold italic flex justify-center">
            <span> सेल्फ एस्टीम एंड बॉडी कॉन्फिडेंस</span>
          </p>
        </div>
        <div className="flex-grow items-center flex justify-center">
          <div className="border-2 border-black bg-[#ffffcf] rounded-sm w-[500px] h-[250px]">
            <div className="grid gap-4 p-4">
              <div>
                <p className="font-bold text-center text-[24px] ">
                  Select players
                </p>
              </div>
              <div className="grid gap-4 justify-center">
                <label
                  className="font-semibold flex items-center gap-2 cursor-pointer"
                  onClick={() => {
                    setSelected("two");
                    localStorage.setItem("player", "two");
                  }}
                >
                  <input type="radio" name="player" value="two" />
                  Two
                </label>
                <label
                  className="font-semibold flex items-center gap-2 cursor-pointer"
                  onClick={() => {
                    setSelected("three");
                    localStorage.setItem("player", "three");
                  }}
                >
                  <input type="radio" name="player" value="three" />
                  Three
                </label>
                <label
                  className="font-semibold flex items-center gap-2 cursor-pointer"
                  onClick={() => {
                    setSelected("four");
                    localStorage.setItem("player", "four");
                  }}
                >
                  <input type="radio" name="player" value="four" />
                  Four
                </label>
              </div>
              <div className="flex justify-center">
                <button
                  className="bg-black text-white cursor-pointer py-2 px-8 uppercase rounded-md font-semibold"
                  onClick={() => {
                    if (selected) {
                      setPlayerSelected(true);
                    } else {
                      alert("Please select players before starting the game.");
                    }
                  }}
                >
                  Start
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-around items-center gap-[10px]">
          <img
            src={RSCERT}
            alt="RSCERT"
            className="w-[100px] h-[100px] object-contain"
          />
          <p className="text-black font-bold md:text-xl text-center italic flex justify-around">
            राजस्थान राज्य शैक्षिक अनुसंधान एवं प्रशिक्षण परिषद्, उदयपुर
          </p>
          <img
            src={unicef}
            alt="unicef"
            className="w-[110px] h-[100px] object-contain"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Players;
