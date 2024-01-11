import React from "react";
import Logo from "../assets/images/webp/weblogo.webp";
import { FacebookIcon, InstagramIcon } from "./Icon";

const FooterSec = () => {
  return (
    <>
      <div className="bg-[#025066] -mt-[2px]">
        <div className="container xl:max-w-[1320px] mx-auto md:px-6 px-4 xl:pt-[68px] xl:pb-[72px] md:py-20   sm:py-14 py-12">
          <div className="flex flex-row flex-wrap justify-between items-center lg:gap-0 gap-10">
            <div className="lg:w-[40%]">
              <a href="#">
                <img src={Logo} alt="Logo" className="max-w-[87px] w-full" />
              </a>
              <p className="text-white text-base font-normal leading-[139.687%] lg:max-w-[433px] lg:my-8 my-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                feugiat molestie ex quis finibus. Quisque tincidunt dolor ut
                convallis lobortis. Proin ullamcorper eros ac ultrices
                imperdiet. s
              </p>
              <div className="flex gap-4 items-center">
                <a
                  href="http://www.instagram.com"
                  target="_blank"
                  className="group"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="http://www.facebook.com"
                  target="_blank"
                  className="group"
                >
                  <FacebookIcon />
                </a>
              </div>
            </div>
            <div className="xl:w-[30%] lg:w-[45%] w-full flex justify-between">
              <ul className="flex flex-col gap-[17px]">
                <li className="text-white text-base font-normal leading-[138%] group">
                  <a href="" className=" after:w-0 after:h-[2px] after:bg-white after:absolute relative after:left-0 after:bottom-[-2px] group-hover:after:w-full after:duration-500 after:ease-in-out"> Renovation</a>
                </li>
                <li className="text-white text-base font-normal leading-[138%] group">
                  <a href="" className=" after:w-0 after:h-[2px] after:bg-white after:absolute relative after:left-0 after:bottom-[-2px] group-hover:after:w-full after:duration-500 after:ease-in-out">Carpentry</a>
                </li>
                <li className="text-white text-base font-normal leading-[138%] group">
                  <a href="" className=" after:w-0 after:h-[2px] after:bg-white after:absolute relative after:left-0 after:bottom-[-2px] group-hover:after:w-full after:duration-500 after:ease-in-out"> Tiling</a>
                </li>
                <li className="text-white text-base font-normal leading-[138%] group">
                  <a href="" className=" after:w-0 after:h-[2px] after:bg-white after:absolute relative after:left-0 after:bottom-[-2px] group-hover:after:w-full after:duration-500 after:ease-in-out"> Ceiling</a>
                </li>
              </ul>
              <ul className="flex flex-col gap-[17px]">
                <li className="text-white text-base font-normal leading-[138%] group">
                  <a href="" className=" after:w-0 after:h-[2px] after:bg-white after:absolute relative after:left-0 after:bottom-[-2px] group-hover:after:w-full after:duration-500 after:ease-in-out">Renovation</a>
                </li>
                <li className="text-white text-base font-normal leading-[138%] group">
                  <a href="" className=" after:w-0 after:h-[2px] after:bg-white after:absolute relative after:left-0 after:bottom-[-2px] group-hover:after:w-full after:duration-500 after:ease-in-out">Carpentry</a>
                </li>
                <li className="text-white text-base font-normal leading-[138%] group">
                  <a href="" className=" after:w-0 after:h-[2px] after:bg-white after:absolute relative after:left-0 after:bottom-[-2px] group-hover:after:w-full after:duration-500 after:ease-in-out">Tiling</a>
                </li>
                <li className="text-white text-base font-normal leading-[138%] group">
                  <a href="" className=" after:w-0 after:h-[2px] after:bg-white after:absolute relative after:left-0 after:bottom-[-2px] group-hover:after:w-full after:duration-500 after:ease-in-out"> Ceiling</a>
                </li>
              </ul>
              <ul className="flex flex-col gap-[17px]">
                <li className="text-white text-base font-normal leading-[138%] group">
                  <a href="" className=" after:w-0 after:h-[2px] after:bg-white after:absolute relative after:left-0 after:bottom-[-2px] group-hover:after:w-full after:duration-500 after:ease-in-out">Renovation</a>
                </li>
                <li className="text-white text-base font-normal leading-[138%] group">
                  <a href="" className=" after:w-0 after:h-[2px] after:bg-white after:absolute relative after:left-0 after:bottom-[-2px] group-hover:after:w-full after:duration-500 after:ease-in-out"> Carpentry</a>
                </li>
                <li className="text-white text-base font-normal leading-[138%] group">
                  <a href="" className=" after:w-0 after:h-[2px] after:bg-white after:absolute relative after:left-0 after:bottom-[-2px] group-hover:after:w-full after:duration-500 after:ease-in-out">Tiling</a>
                </li>
                <li className="text-white text-base font-normal leading-[138%] group">
                  <a href="" className=" after:w-0 after:h-[2px] after:bg-white after:absolute relative after:left-0 after:bottom-[-2px] group-hover:after:w-full after:duration-500 after:ease-in-out">Ceiling</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p className="bg-[#033A49] py-5 text-white text-center text-base leading-[139%] mt-[-1px]">
        Copyright@IS Company2021{" "}
      </p>
    </>
  );
};

export default FooterSec;
