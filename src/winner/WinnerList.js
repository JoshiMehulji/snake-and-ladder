import React from "react";

const WinnerList = () => {
  return (
    <React.Fragment>
      <div className="bg-[#ffffcf] border-2 border-black w-full p-4">
        <p className="text-center font-bold mb-4">Winners:</p>
        <div className="grid gap-2">
          <p className="text-center flex gap-2 items-center">
            <span className="font-bold">1.</span>
            <span></span>
          </p>
          <p className="text-center flex gap-2 items-center">
            <span className="font-bold">2.</span>
            <span></span>
          </p>
          <p className="text-center flex gap-2 items-center">
            <span className="font-bold">3.</span>
            <span></span>
          </p>
          <p className="text-center flex gap-2 items-center">
            <span className="font-bold">4.</span>
            <span></span>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default WinnerList;
