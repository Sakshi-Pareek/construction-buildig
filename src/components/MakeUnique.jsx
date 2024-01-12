import React, { useState } from "react";
import PoolSideHouse from "../assets/images/webp/pool_side_img.webp";
import { PlayIcon, TriangleIcon } from "./Icon";

const MakeUnique = () => {
  const [modal, setModal] = useState(false);
  if (modal === true) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <>
      <div className="container xl:max-w-[1320px] mx-auto md:px-6 px-4">
        <div className="flex flex-row flex-wrap lg:gap-0 md:gap-10 gap-6 lg:justify-between justify-center">
          <div className="xl:w-[60%] lg:w-[50%]">
            <div className="lg:mt-12 relative">
              <img src={PoolSideHouse} alt="PoolSideHouse" className="w-full"/>
              <div
                onClick={() => setModal(true)}
                className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 cursor-pointer"
              >
                <PlayIcon />
              </div>
              {modal ? (
                <>
                  <div className="fixed bg-[#ffffffd9] backdrop-blur-sm top-0 left-0 h-full w-full overflow-hidden flex items-center justify-center z-20">
                    <div className="bg-[#025066] rounded-[10px] relative sm:p-2 p-1">
                      <div
                        onClick={() => setModal(false)}
                        className="sm:w-[40px] sm:h-[40px] w-[25px] h-[25px] absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 sm:mr-3 sm:mt-3 mr-1 mt-1 bg-[#025066] rounded-[100%] sm:p-2 p-1 flex justify-center items-center font-bold text-[#ffffff] cursor-pointer max-sm:text-sm"
                      >
                        X
                      </div>
                      <iframe
                        className="rounded-lg xl:w-[992px] lg:w-[700px] md:w-[600px] sm:w-[480px] w-[350px] xl:h-[480px] lg:h-[380px] md:h-[330px] sm:h-[280px] h-[200px]"
                        src="https://www.youtube.com/embed/iY7MQb4fMB4?si=FpXWNPO50rSMqRUT"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </>
              ) : null}
            </div>
          </div>
          <div className="xl:w-[35%] lg:w-[46%] lg:text-right">
            <h2
              className="text-black text-[20px] font-medium leading-[120%] xl:mb-4 mb-2"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-easing="linear"
            >
              MAKE UNIQUE
            </h2>
            <h3
              className="text-[#025066] xl:text-[48px] xs:text-[32px] lg:ml-auto text-[28px] font-bold leading-[110%] xl:w-[376px]"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-easing="linear"
            >
              Solutions interior design
            </h3>
            <p
              className="text-[#4E8594] xs:text-base text-sm font-normal leading-[138%] xl:mt-6 mt-3 xl:mb-[31px] mb-3 xl:max-w-[365px] lg:ml-auto"
              data-aos="fade-left"
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
              className="text-[#025066] text-base !leading-[120.187%] font-bold flex items-center cursor-pointer gap-2 lg:float-right"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-easing="linear"
            >
              VIEW PROJECTS
              <TriangleIcon />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MakeUnique;
