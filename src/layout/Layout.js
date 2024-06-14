import React from "react";
import {
  boxLayout,
  ladderData,
  players,
  snakeData,
} from "./blockData";
import unicef from "../assets/united-nations-childrens-fund-unicef-vector-logo.png";
import RSCERT from "../assets/RSCERT-logo.jpeg";
import ladder from "../assets/ladder.png";
import player1 from "../assets/red.png";
import player2 from "../assets/blue.png";
import player3 from "../assets/green.png";
import player4 from "../assets/black.png";
import aadahIcon from "../assets/aadha.jpeg";
import upIcon from "../assets/down-arrow.png";

const Layout = ({ selected, setDirection }) => {
  return (
    <React.Fragment>
      <div className="grid gap-2">
        {/* <div>
          <p className="text-red-500 md:text-xl font-bold italic flex justify-around">
            <span>आओ खेलें</span>
            <span> सेल्फ एस्टीम एंड बॉडी कॉन्फिडेंस</span>
          </p>
        </div> */}
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
            {selected === "two" ? (
              <>
                <img
                  id={"red"}
                  src={player1}
                  alt={"red"}
                  className="absolute w-[32px] md:w-[45px] top-[93vmin] md:top-[76vmin] left-[18px] md:left-4 z-20 transition-all duration-500"
                  style={{
                    marginTop: "0vmin",
                    marginLeft:
                      window.innerWidth < 480 ? "-13vmin" : "-14.5vmin",
                  }}
                />
                <img
                  id={"blue"}
                  src={player2}
                  alt={"blue"}
                  className="absolute w-[32px] md:w-[45px] top-[93vmin] md:top-[76vmin] left-[18px] md:left-4 z-20 transition-all duration-500"
                  style={{
                    marginTop: "0vmin",
                    marginLeft:
                      window.innerWidth < 480 ? "-13vmin" : "-14.5vmin",
                  }}
                />
              </>
            ) : selected === "three" ? (
              <>
                <img
                  id={"red"}
                  src={player1}
                  alt={"red"}
                  className="absolute w-[32px] md:w-[45px] top-[93vmin] md:top-[76vmin] left-[18px] md:left-4 z-20 transition-all duration-500"
                  style={{
                    marginTop: "0vmin",
                    marginLeft:
                      window.innerWidth < 480 ? "-13vmin" : "-14.5vmin",
                  }}
                />
                <img
                  id={"blue"}
                  src={player2}
                  alt={"blue"}
                  className="absolute w-[32px] md:w-[45px] top-[93vmin] md:top-[76vmin] left-[18px] md:left-4 z-20 transition-all duration-500"
                  style={{
                    marginTop: "0vmin",
                    marginLeft:
                      window.innerWidth < 480 ? "-13vmin" : "-14.5vmin",
                  }}
                />
                <img
                  id={"green"}
                  src={player3}
                  alt={"green"}
                  className="absolute w-[32px] md:w-[45px] top-[93vmin] md:top-[76vmin] left-[18px] md:left-4 z-20 transition-all duration-500"
                  style={{
                    marginTop: "0vmin",
                    marginLeft:
                      window.innerWidth < 480 ? "-13vmin" : "-14.5vmin",
                  }}
                />
              </>
            ) : (
              <>
                <img
                  id={"red"}
                  src={player1}
                  alt={"red"}
                  className="absolute w-[32px] md:w-[45px] top-[93vmin] md:top-[76vmin] left-[18px] md:left-4 z-20 transition-all duration-500"
                  style={{
                    marginTop: "0vmin",
                    marginLeft:
                      window.innerWidth < 480 ? "-13vmin" : "-14.5vmin",
                  }}
                />
                <img
                  id={"blue"}
                  src={player2}
                  alt={"blue"}
                  className="absolute w-[32px] md:w-[45px] top-[93vmin] md:top-[76vmin] left-[18px] md:left-4 z-20 transition-all duration-500"
                  style={{
                    marginTop: "0vmin",
                    marginLeft:
                      window.innerWidth < 480 ? "-13vmin" : "-14.5vmin",
                  }}
                />
                <img
                  id={"green"}
                  src={player3}
                  alt={"green"}
                  className="absolute w-[32px] md:w-[45px] top-[93vmin] md:top-[76vmin] left-[18px] md:left-4 z-20 transition-all duration-500"
                  style={{
                    marginTop: "0vmin",
                    marginLeft:
                      window.innerWidth < 480 ? "-13vmin" : "-14.5vmin",
                  }}
                />
                <img
                  id={"black"}
                  src={player4}
                  alt={"black"}
                  className="absolute w-[32px] md:w-[45px] top-[93vmin] md:top-[76vmin] left-[18px] md:left-4 z-20 transition-all duration-500"
                  style={{
                    marginTop: "0vmin",
                    marginLeft:
                      window.innerWidth < 480 ? "-13vmin" : "-14.5vmin",
                  }}
                />
              </>
            )}
            {/* {players.map((item, index) => {
              return (
                <img
                  id={item?.name}
                  src={item?.icon}
                  key={index}
                  alt={item?.name}
                  className="absolute w-[32px] md:w-[45px] top-[93vmin] md:top-[76vmin] left-[18px] md:left-4 z-20 transition-all duration-500"
                />
              );
            })} */}
          </div>
          <div className="grid grid-cols-10">
            {boxLayout?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="bg-[#ffffcf] border-[1px] border-[#e5c851] h-[40px] md:h-[51px] w-full px-1 font-bold first:text-[16px] text-[12px] md:text-[16px] first:md:text-[30px] first:text-center text_one relative"
                >
                  <span className="relative z-10 bg-[#ffffcf] rounded-full text-[#212121]">
                    {item.value}
                  </span>
                  {index === 90 && (
                    <span>
                      <img
                        src={aadahIcon}
                        className="absolute top-0 mix-blend-difference"
                        alt="aadha full"
                        width={50}
                        height={50}
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
            {/* {[...Array(100)]?.map((item, i) => {
              let value = "";
              if (
                String(i).length == 1 ||
                (String(i).length == 2 && Number(String(i)[0])) % 2 == 0
              ) {
                value = 100 - i;
              } else {
                value =
                  Number(`${9 - Number(String(i)[0])}${String(i)[1]}`) + 1;
              }
              return (
                <p
                  key={i}
                  className="bg-[#ffffcf] border-[1px] border-[#e5c851] h-[40px] md:h-[51px] w-full px-1 font-bold first:text-[16px] text-[12px] md:text-[16px] first:md:text-[30px] first:text-center text_one"
                >
                  <span className="relative z-[10]">{value}</span>
                </p>
              );
            })} */}
          </div>
        </div>
        {/* <div className="flex justify-around">
          <img
            src={RSCERT}
            alt="RSCERT"
            className="w-[60px] h-[30px] object-fill"
          />
          <p className="text-black font-bold md:text-xl text-center italic flex justify-around">
            राजस्थान राज्य शैक्षिक अनुसंधान एवं प्रशिक्षण परिषद्, उदयपुर
          </p>
          <img
            src={unicef}
            alt="unicef"
            className="w-[100px] h-[30px] object-contain"
          />
        </div> */}
      </div>
    </React.Fragment>
  );
};

export default Layout;
