import React from "react";

const WinnerList = ({ winners }) => {
  return (
    <React.Fragment>
      <div className="bg-[#ffffcf] border-2 border-black w-full p-4">
        <p className="text-center font-bold mb-4">Winners:</p>
        <div className="grid gap-2">
          {Object.entries(winners)?.map((item, index) => {
            console.log(item)
            if (item[1]) {
              return (
                <p className="text-center flex gap-2 items-center justify-center font-black text-red-500">
                  {/* <span className="font-bold">{index + 1}.</span> */}
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
