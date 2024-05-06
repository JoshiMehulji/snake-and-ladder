import React from "react";

const Players = ({ setPlayerSelected, setSelected, selected }) => {
  return (
    <React.Fragment>
      <div className="border-2 border-black bg-[#ffffcf] rounded-sm w-[500px] h-[250px]">
        <div className="grid gap-4 p-4">
          <div>
            <p className="font-bold text-center text-[24px] ">Select players</p>
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
                if(selected){
                  setPlayerSelected(true);
                } else {
                  alert('Please select players before starting the game.')
                }
              }}
            >
              Start
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Players;
