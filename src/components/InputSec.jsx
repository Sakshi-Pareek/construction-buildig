import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const InputSec = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vdrz1vb",
        "template_pjuqntb",
        form.current,
        "4ZOBoX_pcwTLX-Ipq"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("your form is sumbitted");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const handleClick = () => {
    setTimeout(() => {
      form.current.reset();
    }, 3000);
  };
  return (
    <>
      <div className="bg-inputpattern bg-cover bg-center bg-no-repeat">
        <div
          className="container xl:max-w-[1320px] mx-auto md:px-6 px-4 xl:pt-[38px] xl:pb-[39px] md:py-20 sm:py-14 py-12"
          id="CONTACT"
        >
          <div className="flex flex-wrap-reverse flex-row justify-between lg:gap-0 gap-8">
            <div className="lg:w-[46.8%] w-full mt-5">
              <form
                ref={form}
                onSubmit={sendEmail}
                className="flex flex-col gap-[14px]"
              >
                <input
                  type="text"
                  required
                  name="user_name"
                  placeholder="Your Name"
                  className="border-[#025066] border bg-white rounded-md py-[14px] px-[14px] w-full text-[#A7A7A7] text-[14px] font-medium leading-[142.857%] outline-none"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-easing="linear"
                />
                <input
                  type="number"
                  required
                  name="user_contact"
                  max="10"
                  placeholder="Phone Number"
                  className="border-[#025066] border bg-white rounded-md py-[14px] px-[14px] w-full text-[#A7A7A7] text-[14px] font-medium leading-[142.857%] outline-none"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-easing="linear"
                />
                <input
                  type="mail"
                  required
                  name="user_mail"
                  placeholder="E-Mail"
                  className="border-[#025066] border bg-white rounded-md py-[14px] px-[14px] w-full text-[#A7A7A7] text-[14px] font-medium leading-[142.857%] outline-none"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-easing="linear"
                />
                <input
                  type="text"
                  required
                  name="Message"
                  placeholder="Message"
                  className="border-[#025066] border bg-white rounded-md pt-[14px] xl:pb-[93px] pb-[70px] px-[14px] w-full text-[#A7A7A7] text-[14px] font-medium leading-[142.857%] outline-none"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-easing="linear"
                />
                <div
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-easing="linear"
                >
                  <button
                    type="submit"
                    onClick={handleClick}
                    className="hover:shadow-[0_3px_20px_#025066] transition-all duration-500 ease-linear inline-block xl:mt-8 lg:mt-6 md:mt-4 mt-2 text-white text-[20px] font-medium !leading-normal py-[15px] px-[33px] h-[59px] w-[206px] rounded-[10px] bg-[#025066] border-none"
                  >
                    CONTACT NOW
                  </button>
                </div>
              </form>
            </div>
            <div className="lg:w-[50%]">
              <h2
                className="lg:text-white text-[#025066] xl:text-[61px] lg:text-[50px] sm:text-[42px] text-[34px] font-normal leading-[106%] lg:max-w-[348px] lg:text-right lg:mb-8 mb-4 lg:ml-auto"
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-easing="linear"
              >
                How we can help you?
              </h2>
              <p
                className="lg:text-white text-[#025066] text-base font-normal leading-[normal] ml-auto lg:max-w-[325px] lg:text-right lg:mb-10 mb-4"
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-easing="linear"
              >
                Quisque vel nisl blandit sem tempor dignissim. Sed maximus
                efficitur neque
              </p>
              <p
                className="lg:text-white text-[#025066] text-base font-normal leading-[139.687%] lg:text-right mb-2.5"
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-easing="linear"
              >
                Phone Number:
                <a href="tel:+1235265652" className="ms-4">
                  +1235265652
                </a>
              </p>
              <p
                className="lg:text-white text-[#025066] text-base font-normal leading-[139.687%] lg:text-right"
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-easing="linear"
              >
                Address:
                <a
                  href="https://www.google.com/maps"
                  target="_blank"
                  className="ms-2"
                >
                  Nam convallis feugiat
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InputSec;
