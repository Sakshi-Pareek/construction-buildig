import React from "react";
import Worker from "../assets/images/webp/worker.webp";

const OtherServices = () => {
  return (
    <>
      <div className="container xl:max-w-[1320px] mx-auto md:px-6 px-4 md:py-[83px] sm:py-14 py-12">
        <div
          className="flex felx-row flex-wrap items-center justify-between lg:gap-0 gap-8"
          id="SHOP"
        >
          <div className="xl:w-[40%] lg:w-[48%]">
            <h2
              className="text-black text-[20px] font-medium leading-[120%] xl:mb-6 mb-2"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="200"
              data-aos-easing="linear"
            >
              OTHER SERVICES
            </h2>
            <h3
              className="text-[#025066] xl:text-[48px] xs:text-[32px] text-[28px] font-bold leading-[117%] xl:w-[420px] xl:mb-[44px] md:mb-6 mb-4"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="200"
              data-aos-easing="linear"
            >
              Gates Construction Company
            </h3>
            <h4
              className="text-[#025066] text-[25px] font-normal leading-[139.687%] xl:mb-[17px] mb-3"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="200"
              data-aos-easing="linear"
            >
              Best Builing Material
            </h4>
            <p
              className="text-base font-normal leading-[139.687%] text-[#4E8594] xl:w-[470px] xl:mb-[33px] mb-4"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="200"
              data-aos-easing="linear"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              feugiat molestie ex quis finibus. Quisque tincidunt dolor ut
              convallis lobortis. Proin ullamcorper eros ac ultrices imperdiet.
            </p>
            <h4
              className="text-[#025066] text-[25px] font-normal leading-[139.687%] xl:mb-[17px] mb-3"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="200"
              data-aos-easing="linear"
            >
              Experience Workers
            </h4>
            <p
              className="text-base font-normal leading-[139.687%] text-[#4E8594] xl:w-[470px] xl:mb-[33px] mb-4"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="200"
              data-aos-easing="linear"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              feugiat molestie ex quis finibus. Quisque tincidunt dolor ut
              convallis lobortis. Proin ullamcorper eros ac ultrices imperdiet.
            </p>
            <h4
              className="text-[#025066] text-[25px] font-normal leading-[139.687%] xl:mb-[17px] mb-3"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="200"
              data-aos-easing="linear"
            >
              Modern Technologies
            </h4>
            <p
              className="text-base font-normal leading-[139.687%] text-[#4E8594] xl:w-[470px]"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="200"
              data-aos-easing="linear"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              feugiat molestie ex quis finibus. Quisque tincidunt dolor ut
              convallis lobortis. Proin ullamcorper eros ac ultrices imperdiet.
            </p>
          </div>
          <div className="xl:w-[49%] lg:w-[45%] xs:w-[80%] flex flex-col max-lg:mx-auto">
            <img
              src={Worker}
              alt="Worker"
              className="w-full "
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="200"
              data-aos-easing="linear"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default OtherServices;
