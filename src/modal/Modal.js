import React, { useEffect } from "react";

const Modal = ({ setShowModal, modalText }) => {
  useEffect(() => {
    setTimeout(() => {
      setShowModal(false);
    }, 5000);
  }, []);

  return (
    <div className="bg-[#00000030] fixed top-0 w-full h-full z-20">
      <div className="flex justify-center items-center h-full">
        <div className="w-[90%] md:w-max md:max-w-[600px] md:m-auto h-[80%] overflow-auto md:h-max flex justify-center">
          <div className="bg-[#fffff6] border-2 border-black rounded-[20px] h-[200px] w-[90%] md:w-[400px] flex items-center justify-center p-6">
            <p
              id="modal-text"
              className="font-bold text-[20px] md:text-[24px] text-center text-red-500 italic"
            >{modalText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
