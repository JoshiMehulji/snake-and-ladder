import clsx from "clsx";
import React, { useEffect } from "react";
import Lottie from "lottie-react";
import celebration from "../assets/Animation - 1718379298533.json";

const Modal = ({
  setShowModal,
  modalText,
  modalTextColor,
  setShowCelebrationGif,
  showCelebrationGif,
}) => {
  useEffect(() => {
    setTimeout(() => {
      setShowModal(false);
      if (showCelebrationGif) {
        setShowCelebrationGif(false);
      }
    }, 5000);
  }, []);

  return (
    <div className="bg-[#00000030] fixed top-0 w-full h-full z-50">
      <div className="flex justify-center items-center h-full">
        <div className="w-[90%] md:w-max md:max-w-[600px] md:m-auto h-[80%] overflow-auto md:h-max flex justify-center">
          {showCelebrationGif && (
            <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
              <Lottie animationData={celebration} autoplay={true} loop={true} />
            </div>
          )}
          <div className="bg-[#fffff6] border-2 border-black rounded-[20px] h-[200px] w-[90%] md:w-[400px] flex items-center justify-center p-6">
            <p
              id="modal-text"
              className={clsx(
                "font-bold text-[20px] md:text-[24px] text-center italic",
                modalTextColor === "red" ? "text-red-500" : "text-green-500"
              )}
            >
              {modalText}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
