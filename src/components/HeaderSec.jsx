import React, { useState } from "react";
import { FacebookIcon, InstagramIcon, SearchIcon, TwitterIcon } from "./Icon";
import HeroBuilding from "../assets/images/webp/hero_building_img.webp";

const HeaderSec = () => {
  const [show, setshow] = useState(true);
  if (show === false) {
    document.body.classList.add("overflow_hidden");
  } else {
    document.body.classList.remove("overflow_hidden");
  }

  return (
    <>
      <div className="bg-white shadow">
        <nav className="flex justify-end items-center md:pt-[40px] pt-6 pb-4 md:pb-[34px] container xl:max-w-[1320px] mx-auto md:px-6 px-4">
          <ul
            className={`${
              show ? "left-[-100%]" : "left-0 z-10"
            } gap-[51px] flex transition-all duration-300 ease-linear md:bg-white bg-white max-md:w-full max-md:fixed z-40 mx-md:top-0 max-md:min-h-screen max-md:flex max-md:flex-col max-md:items-center max-md:justify-center max-md:z-40 bottom-0`}
          >
            <li onClick={() => setshow(!show)}>
              <a
                className="text-[#025066] uppercase navlink transition-all duration-500 ease-linear flex font-normal text-[16px]"
                href="#home"
              >
                HOME
              </a>
            </li>
            <li onClick={() => setshow(!show)}>
              <a
                className="text-[#025066] uppercase navlink transition-all duration-500 ease-linear font-normal text-[16px] flex"
                href="#PORTFOLIO"
              >
                PORTFOLIO
              </a>
            </li>
            <li onClick={() => setshow(!show)}>
              <a
                className="text-[#025066] uppercase navlink transition-all duration-500 ease-linear font-normal text-[16px]"
                href="#BLOG"
              >
                BLOG
              </a>
            </li>
            <li onClick={() => setshow(!show)}>
              <a
                className="text-[#025066] uppercase navlink transition-all duration-500 ease-linear font-normal text-[16px]"
                href="#CONTACT"
              >
                CONTACT
              </a>
            </li>
            <li onClick={() => setshow(!show)}>
              <a
                className="text-[#025066] uppercase navlink transition-all duration-500 ease-linear font-normal text-[16px]"
                href="#SHOP"
              >
                SHOP
              </a>
            </li>
            <li className="md:block hidden">
              <a href="https//:www.google.com" target="_blank">
                <SearchIcon />
              </a>
            </li>
          </ul>
          <div className="md:hidden block me-5">
            <a href="https//:www.google.com" target="_blank">
              <SearchIcon />
            </a>
          </div>
          <div
            onClick={() => setshow(!show)}
            className="w-[39px] h-[27px] relative z-50 flex flex-col justify-between md:hidden cursor-pointer"
          >
            <span
              className={`${
                show
                  ? "bg-[#025066] w-full h-[4px] transition-all duration-300 ease-linear rounded-3xl"
                  : "bg-[#025066] w-full h-[4px] transition-all duration-300 ease-linear rounded-3xl rotate-[48deg] translate-y-[25px]"
              }`}
            ></span>
            <span
              className={`${
                show
                  ? "bg-[#025066] w-full h-[4px] transition-all duration-300 ease-linear rounded-3xl"
                  : "opacity-0"
              }`}
            ></span>
            <span
              className={`${
                show
                  ? "bg-[#025066] w-full h-[4px] transition-all duration-300 ease-linear rounded-3xl"
                  : "bg-[#025066] w-full h-[4px] transition-all duration-300 ease-linear rounded-3xl rotate-[-50deg] translate-y-[50%]"
              }`}
            ></span>
          </div>
        </nav>
        <div
          className="bg-heropattern bg-bgfull bg-no-repeat bg-center overflow-x-hidden relative z-10 max-lg:h-[1050px] max-md:h-[900px] max-sm:h-[850px] max-xs:h-[720px]"
          id="home"
        >
          <div className="container xl:max-w-[1320px] mx-auto md:px-6 px-4">
            <div className="flex flex-row flex-wrap md:pt-[155px] sm:pt-[100px] pt-[50px] pb-6">
              <div className="lg:w-5/12">
                <h1
                  className="text-white font-bold xl:text-[72px] lg::text-[58px] md:text-[50px] text-[48px] max-lg:leading-[124.687%] leading-[100.687%] lg:pt-[14px] pt-0"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-easing="linear"
                >
                  Morbi facilisis nulla purus, ac
                </h1>
                <p
                  className="xl:mt-10 lg:mt-8 md:mt-5 mt-3 text-white font-normal text-lg !leading-[139.687%] pb-5"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-easing="linear"
                >
                  Mauris viverra justo et dictum mattis. Donec massa felis,
                  tempus nec erat id, fermentum rhoncus justo. Donec viverra
                  quam nulla, id faucibus metus ullamcorp
                </p>
                <div
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-easing="linear"
                >
                  <a
                    href=""
                    className="hover:shadow-[0_3px_15px_rgba(225,_225,_225,_1)] transition-all duration-500 ease-linear inline-block xl:mt-10 lg:mt-8 md:mt-4 mt-2 text-[#025066] text-[20px] font-medium !leading-normal py-[15px] px-[33px] rounded-[10px] bg-white border-none"
                  >
                    CONTACT NOW
                  </a>
                </div>
                <ul
                  className="flex items-center gap-[14px] 2xl:mt-[170px] xl:mt-[100px] sm:mt-[50px] mt-8"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-easing="linear"
                >
                  <a
                    href="http://www.facebook.com"
                    target="_blank"
                    className="group"
                  >
                    <FacebookIcon />
                  </a>
                  <a
                    href="http://www.twitter.com"
                    target="_blank"
                    className="group"
                  >
                    <TwitterIcon />
                  </a>
                  <a
                    href="http://www.instagram.com"
                    target="_blank"
                    className="group"
                  >
                    <InstagramIcon />
                  </a>
                </ul>
              </div>
              <div className="lg:w-7/12 lg:mt-0 mt-10">
                <img
                  src={HeroBuilding}
                  alt="HeroBuilding"
                  className="!max-w-[941px] w-full absolute right-[-10px] max-h-[511px] max-3xl:ps-40 max-2xl:ps-60 max-xl:ps-96 max-lg:ps-10"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-easing="linear"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderSec;
