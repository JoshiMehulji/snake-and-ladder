import clsx from "clsx";
import React from "react";

const WinnerList = ({ winners }) => {
  return (
    <React.Fragment>
      <div className="bg-[#ffffcf] border-2 border-black w-full p-4">
        <p className="text-center font-bold mb-4">बॉडी कॉन्फिडेंस चैंपियन:</p>
        <div className="grid gap-2">
          {Object.entries(winners)?.map((item, index) => {
            if (item[1]) {
              return (
                <p key={index} className={clsx("capitalize text-center flex gap-2 items-center justify-center font-black", item[0] == "red" ? "text-red-500" : item[0] == "blue" ? "text-blue-500" : item[0] == "green" ? "text-green-500" : "text-black")}>
                  <span>{item[0]}</span>
                </p>
              );
            }
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default WinnerList;
