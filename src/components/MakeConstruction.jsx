import React from "react";
import { TriangleIcon } from "./Icon";
import HouseWithShadow from "../assets/images/webp/house_with_shadow.webp";

const MakeConstruction = () => {
  return (
    <>
      <div className="container xl:max-w-[1320px] mx-auto md:px-6 px-4 xl:pt-[105px] xl:pb-[124px] md:py-20 sm:py-14 py-12">
        <div className="flex flex-row flex-wrap-reverse lg:gap-0 md:gap-10 gap-6 lg:justify-between justify-center">
          <div className="xl:w-[35%] lg:w-[46%]">
            <h2
              className="text-black text-[20px] font-medium leading-[120%] xl:mb-4 mb-2"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-easing="linear"
            >
              MAKE UNIQUE
            </h2>
            <h3
              className="text-[#025066] xl:text-[48px] xs:text-[32px] text-[28px] font-bold leading-[116%] xl:w-[286px]"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-easing="linear"
            >
              Construction building.
            </h3>
            <p
              className="text-[#4E8594] xs:text-base text-sm font-normal leading-[138%] xl:mt-[33px] mt-3 xl:mb-[35px] mb-3 xl:max-w-[446px]"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-easing="linear"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              feugiat molestie ex quis finibus. Quisque tincidunt dolor ut
              convallis lobortis. Proin ullamcorper eros ac ultrices imperdiet.
              Vivamus eros nibh, dictum sed venenatis vitae, ornare eget magna.
              Etiam mattis, felis eu interdum posuere, justo neque dictum
              sapien, eu luctus neque nulla non ante. Quisque pharetra facilisis
              mauris a hendrerit. Donec rutrum maximus turpis id luctus. In
              gravida pulvinar elit, a auctor mauris scele risque ac. Aliquam
              facilisis tortor elit, auctor semper est ve stibulum ut. Nam sit
              amet libero vulputate, faucibus purus et, vestibulum sem. Nunc ac
              nulla erat. Nulla facilis
            </p>
            <button
              className="text-[#025066] text-base !leading-[120.187%] font-bold flex items-center gap-2"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-easing="linear"
            >
              VIEW PROJECTS
              <TriangleIcon />
            </button>
          </div>
          <div className="xl:w-[60%] lg:w-[50%]">
            <div className="lg:mt-12">
              <img
                src={HouseWithShadow}
                alt="HouseWithShadow"
                className="w-full"
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-easing="linear"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MakeConstruction;
