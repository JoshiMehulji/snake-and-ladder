import React from "react";
import {
  boxLayout,
  ladderData,
  players,
  snakeData,
} from "./blockData";
import ladder from "../assets/ladder.png";
import player1 from "../assets/red.png";
import player2 from "../assets/blue.png";
import player3 from "../assets/green.png";
import player4 from "../assets/black.png";
import aadahIcon from "../assets/aadha.jpeg";

const Layout = ({ selected, setDirection }) => {
  return (
    <React.Fragment>
      <div className="grid gap-2">
        <div className="border-2 border-black relative">
          <div>
            {ladderData?.map((item, index) => {
              return (
                <img
                  src={ladder}
                  key={index}
                  alt="ladder"
                  className={`absolute h-full w-full object-contain z-10`}
                  style={{
                    transform: item?.transform,
                    top: item?.top,
                    left: item?.left,
                  }}
                />
              );
            })}
          </div>
          <div>
            {snakeData?.map((item, index) => {
              return (
                <img
                  src={item?.snake}
                  key={index}
                  alt="ladder"
                  className={`absolute h-full w-full object-contain z-10`}
                  style={{
                    transform: item?.transform,
                    top: item?.top,
                    left: item?.left,
                  }}
                />
              );
            })}
          </div>
          <div>
            {selected == "two" ? (
              <>
                <img
                  id={"red"}
                  src={player1}
                  alt={"red"}
                  className="absolute w-[32px] md:w-[45px] top-[86.5vmin] left-[1vmin] z-20 transition-all duration-500"
                  style={{
                    marginTop: "0vmin",
                    marginLeft: "-9.5vmin",
                  }}
                />
                <img
                  id={"blue"}
                  src={player2}
                  alt={"blue"}
                  className="absolute w-[32px] md:w-[45px] top-[86.5vmin] left-[1vmin] z-20 transition-all duration-500"
                  style={{
                    marginTop: "0vmin",
                    marginLeft: "-9.5vmin",
                  }}
                />
              </>
            ) : selected == "three" ? (
              <>
                <img
                  id={"red"}
                  src={player1}
                  alt={"red"}
                  className="absolute w-[32px] md:w-[45px] top-[86.5vmin] left-[1vmin] z-20 transition-all duration-500"
                  style={{
                    marginTop: "0vmin",
                    marginLeft: "-9.5vmin",
                  }}
                />
                <img
                  id={"blue"}
                  src={player2}
                  alt={"blue"}
                  className="absolute w-[32px] md:w-[45px] top-[86.5vmin] left-[1vmin] z-20 transition-all duration-500"
                  style={{
                    marginTop: "0vmin",
                    marginLeft: "-9.5vmin",
                  }}
                />
                <img
                  id={"green"}
                  src={player3}
                  alt={"green"}
                  className="absolute w-[32px] md:w-[45px] top-[86.5vmin] left-[1vmin] z-20 transition-all duration-500"
                  style={{
                    marginTop: "0vmin",
                    marginLeft: "-9.5vmin",
                  }}
                />
              </>
            ) : (
              <>
                <img
                  id={"red"}
                  src={player1}
                  alt={"red"}
                  className="absolute w-[32px] md:w-[45px] top-[86.5vmin] left-[1vmin] z-20 transition-all duration-500"
                  style={{
                    marginTop: "0vmin",
                    marginLeft: "-9.5vmin",
                  }}
                />
                <img
                  id={"blue"}
                  src={player2}
                  alt={"blue"}
                  className="absolute w-[32px] md:w-[45px] top-[86.5vmin] left-[1vmin] z-20 transition-all duration-500"
                  style={{
                    marginTop: "0vmin",
                    marginLeft: "-9.5vmin",
                  }}
                />
                <img
                  id={"green"}
                  src={player3}
                  alt={"green"}
                  className="absolute w-[32px] md:w-[45px] top-[86.5vmin] left-[1vmin] z-20 transition-all duration-500"
                  style={{
                    marginTop: "0vmin",
                    marginLeft: "-9.5vmin",
                  }}
                />
                <img
                  id={"black"}
                  src={player4}
                  alt={"black"}
                  className="absolute w-[32px] md:w-[45px] top-[86.5vmin] left-[1vmin] z-20 transition-all duration-500"
                  style={{
                    marginTop: "0vmin",
                    marginLeft: "-9.5vmin",
                  }}
                />
              </>
            )}
          </div>
          <div className="grid grid-cols-10">
            {boxLayout?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="bg-[#ffffcf] border-[1px] border-[#e5c851] h-[9.5vmin] w-full px-1 font-bold first:text-[16px] text-[12px] md:text-[16px] first:md:text-[30px] first:text-center text_one relative"
                >
                  <span className="relative z-10 bg-[#ffffcf] rounded-full text-[#212121]">
                    {item.value}
                  </span>
                  {index === 90 && (
                    <span>
                      <img
                        src={aadahIcon}
                        className="absolute top-0 mix-blend-difference mt-[1vmin] ml-[-0.5vmin]"
                        alt="aadha full"
                        width={35}
                        height={35}
                      />
                    </span>
                  )}
                  {/* {index === 99 && (
                    <span>
                      <img
                        src={upIcon}
                        className="absolute top-1 left-12 drop-shadow-[0px_1px_2px_#000000] rotate-180 scale-x-50"
                        alt="up"
                        width={40}
                        height={40}
                      />
                    </span>
                  )} */}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;
