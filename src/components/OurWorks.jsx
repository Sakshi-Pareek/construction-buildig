import React from "react";

const OurWorks = () => {
  return (
    <>
      <div className="container xl:max-w-[1320px] mx-auto md:px-6 px-4">
        <div className="md:flex lg:gap-0 md:gap-10 gap-6 justify-between items-end">
          <div className="lg:pt-[27px] lg:pb-[23px] py-3 xs:px-10 px-6 bg-stone-300 bg-opacity-0 border border-sky-900 md:flex flex-col items-center justify-between xl:w-[141px] sm:w-[100px] xs:w-[40px] w-[25px] lg:h-[420px] h-[300px] hidden" data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="200"
                data-aos-easing="linear">
            <p className="text-sky-900 lg:text-base text-sm font-bold">
              O<br /> U<br /> R <br />
              <br />W <br /> O<br />R<br />K<br />S
            </p>
            <p className="xl:max-w-[140px] md:w-[50px] h-[1px] border-none origin-center rotate-90 border bg-sky-900 lg:my-[50px]"></p>
            <p className="max-w-[61px] text-sky-900 lg:text-[51.37px] text-3xl font-medium leading-none">
              02
            </p>
          </div>
          <div>
            <h2 className="text-[#025066] lg:text-right lg:ml-auto xl:text-[48px] xs:text-[32px] text-[28px] font-bold leading-[117%] lg:w-[482px] lg:mb-[51px] mb-4" data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="200"
                data-aos-easing="linear">
              Mauris viverra justo et dictum mattis.
            </h2>
            <p className="text-[#4E8594] lg:text-right font-normal text-base leading-[139.687%] mb-7 lg:w-[656px]" data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="200"
                data-aos-easing="linear">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              feugiat molestie ex quis finibus. Quisque tincidunt dolor ut
              convallis lobortis. Proin ullamcorper eros ac ultrices imperdiet.
              Vivamus eros nibh, dictum sed venenatis vitae, ornare eget magna.
              Etiam mattis, felis eu interdum posuere, justo neque
            </p>
          </div>
          <div className="xs:ps-[27px] xs:pe-[23px] p-3 bg-stone-300 bg-opacity-0 border border-sky-900 flex items-center justify-between w-full md:hidden mb-10" data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="200"
                data-aos-easing="linear">
            <p className="text-sky-900 xs:text-base text-sm font-bold">
              O U R  <span className="ms-3">W O R K S</span>
            </p>
            <p className="w-[150px] h-[1px] border-none origin-center bg-sky-900"></p>
            <p className="max-w-[61px] text-sky-900 sm:text-[51.37px] text-3xl font-medium leading-none">
              02
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurWorks;
