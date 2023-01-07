import React from "react";
import { useRouter } from "next/router";
import { MdClose } from "react-icons/md";

const Modal = ({
  children,
  isModalOpen,
  setIsModalOpen,
}: {
  children: React.ReactNode;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const closeModal = async () => {
    // await router.back();
  };

  return (
    <div
      // onClick={closeModal}
      className="fixed top-0 left-0 w-full h-full z-50 bg-colors-modal flex items-center justify-center"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="z-0 flex-col relative w-11/12 max-w-lg flex justify-center items-center"
      >
        <div className="p-3 bg-white flex items-center justify-between w-full border-b rounded-t-md border-gray-700 px-8 font-semibold">
          <p className="opacity-90 w-full text-center text-lg font-semibold">
            How do you wish to continue?
          </p>
          <span
            // onClick={closeModal}
            className="cursor-pointer transition-all duration-200 hover:bg-gray-900 rounded-full p-2"
          >
            {/* <MdClose fontSize={18}></MdClose> */}
          </span>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
