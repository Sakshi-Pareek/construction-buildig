import React from "react";
import Lorem1 from "../assets/images/webp/Lorem_caed_1.webp";
import Lorem2 from "../assets/images/webp/lorem_card_2.webp";
import Lorem3 from "../assets/images/webp/lorem_card_3.webp";
import { TriangleIcon } from "./Icon";

const LoremCard = () => {
  const data = [
    {
      image: Lorem1,
    },
    {
      image: Lorem2,
    },
    {
      image: Lorem3,
    },
  ];
  return (
    <>
      <div className="bg-[#025066]">
        <div className="container xl:max-w-[1320px] mx-auto md:px-6 px-4 xl:pt-[77px] xl:pb-[85px] md:py-20 sm:py-14 py-12">
          <div
            className="flex flex-row flex-wrap lg:justify-between justify-center lg:gap-0 md:gap-7 gap-4"
            id="BLOG"
          >
            {data.map((a, index) => (
              <div
                className="lg:w-[31.8%] sm:w-[48%] group"
                key={index}
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-easing="linear"
              >
                <div className="bg-white rounded-[5px] sm:p-3 p-2 group-hover:shadow-[0_3px_10px_rgba(225,_225,_225,_1)] transition-all duration-500 ease-linear group cursor-pointer">
                  <img
                    src={a.image}
                    alt="cardimg"
                    className="w-full rounded-[5px] group-hover:scale-[0.99] transition-all duration-500 ease-linear"
                  />
                  <h2 className="text-[#025066] text-[25px] font-bold leading-[139.687%] mb-2.5 mt-5">
                    Lorem ipsum dolo
                  </h2>
                  <p className="text-base font-normal leading-[139.687%] text-[#4E8594] mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi feugiat molestie ex quis finibus. Quisque tincidunt
                    dolor ut convallis lobortis. Proin ullamcorper
                  </p>
                  <a
                    href=""
                    className="text-[#025066] text-base !leading-[120.187%] font-bold flex items-center gap-2 mb-2.5"
                  >
                    VIEW PROJECTS
                    <TriangleIcon />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LoremCard;
