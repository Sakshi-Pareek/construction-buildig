import React from "react";
import Building1 from "../assets/images/webp/building1.webp";
import Building2 from "../assets/images/webp/building2.webp";
import Building3 from "../assets/images/webp/building3.webp";
import Building4 from "../assets/images/webp/building4.webp";
import Building5 from "../assets/images/webp/building5.webp";
import Building6 from "../assets/images/webp/building6.webp";

const BuildingGallery = () => {
  const data = [
    {
      image: Building1,
    },
    {
      image: Building2,
    },
    {
      image: Building3,
    },
    {
      image: Building4,
    },
    {
      image: Building5,
    },
    {
      image: Building6,
    },
  ];
  return (
    <>
      <div className="bg-[#025066]">
        <div className="container xl:max-w-[1320px] mx-auto md:px-6 px-4 xl:py-[92px] md:py-20 sm:py-14 py-12">
          <div className="flex flex-row flex-wrap lg:justify-between justify-center gap-5">
            {data.map((a, index) => (
              <div
                className="lg:w-[32.2%] sm:w-[48%]"
                key={index}
                data-aos="flip-left"
                data-aos-duration="1000"
                data-aos-delay="200"
                data-aos-easing="linear"
              >
                <img
                  src={a.image}
                  alt="cardimg"
                  className="hover:shadow-[2px_5px_8px_#333333] transition-all duration-300 ease-linear cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BuildingGallery;
