import React from "react";
import { TriangleIcon } from "./Icon";
import Ourservices from "../assets/images/webp/construction_img.webp";

const OurServices = () => {
  return (
    <>
      <div
        className="container xl:max-w-[1320px] mx-auto md:px-6 px-4 xl:pt-[101px] xl:pb-[151px] md:py-20 sm:py-14 py-12"
        id="PORTFOLIO"
      >
        <div className="flex flex-row flex-wrap-reverse lg:gap-0 gap-10 lg:justify-between justify-center items-center">
          <div className="lg:w-[55%] flex justify-between lg:gap-0 sm:gap-10 xs:gap-4 gap-3">
            <div
              className="xs:pt-[27px] xs:pb-[23px] py-3 xs:px-10 px-6 bg-stone-300 bg-opacity-0 border border-sky-900 flex flex-col items-center justify-between xl:w-[141px] sm:w-[100px] xs:w-[40px] w-[25px] xl:h-[519px] xs:h-[450px] h-[425px]"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-easing="linear"
            >
              <p className="text-sky-900 xs:text-base text-sm font-bold">
                H<br /> E<br /> R <br />E <br /> <br />W<br />E<br /> <br />D
                <br />O
              </p>
              <p className="xl:max-w-[140px] w-[80px] h-[1px] border-none origin-center rotate-90 border bg-sky-900 my-[50px]"></p>
              <p className="max-w-[61px] text-sky-900 sm:text-[51.37px] text-3xl font-medium leading-none">
                01
              </p>
            </div>
            <div className="lg:max-w-[365px]">
              <h2
                className="text-black sm:mb-4 mb-2 text-[20px] font-medium leading-[117%]"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="linear"
              >
                OUR SERVICES
              </h2>
              <h3
                className="text-[#025066] xl:text-[48px] xs:text-[32px] text-[28px]  font-bold leading-[117%] xl:mb-[38px] sm:mb-4 mb-2"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="linear"
              >
                Construction building.
              </h3>
              <p
                className="text-sky-900 text-opacity-70 sm:text-base text-sm font-normal leading-[139.687%] md:mb-[30px] mb-4"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="linear"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                feugiat molestie ex quis finibus. Quisque tincidunt dolor ut
                convallis lobortis. Proin ullamcorper eros ac ultrices
                imperdiet. Vivamus eros nibh, dictum sed venenatis vitae, ornare
                eget magna. Etiam mattis, felis eu interdum posuere, justo neque
                dictum sapien, eu luctus neque nulla non ante. Quisque pharetra
                facilisis mauris a hendrerit. Donec rutrum maximus turpis id
                luctus. In gravida pulvinar elit, a auctor mauris scele risque
                ac. Aliquam facilisis tortor elit, auctor semper est ve stibulum
                ut. Nam sit amet libero vulputate, faucibus purus et, vestibulum
                sem. Nunc ac nulla erat. Nulla facilis
              </p>
              <button
                className="cursor-pointer text-[#025066] text-base !leading-[120.187%] font-bold flex items-center gap-2 "
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="linear"
              >
                VIEW PROJECTS
                <TriangleIcon />
              </button>
            </div>
          </div>
          <div className="lg:w-[40%] flex flex-col lg:justify-end justify-center">
            <img
              src={Ourservices}
              alt="Ourservices"
              className="w-full lg:max-w-[503px] lg:ml-auto"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-easing="linear"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
