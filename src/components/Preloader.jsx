import React from "react";
import PreLoader from "../assets/images/webp/weblogo.webp";

const Preloader = () => {
  return (
    <>
      <div className="w-full h-screen flex flex-col sm:gap-6 gap-4 justify-center items-center fixed bg-[#025066]">
        <img
          src={PreLoader}
          alt="PreLoader"
          className="max-w-[87px] w-full loaderanimat"
        />
        <div className="loader md:w-[210px] w-[170px] h-1"></div>
      </div>
    </>
  );
};

export default Preloader;
