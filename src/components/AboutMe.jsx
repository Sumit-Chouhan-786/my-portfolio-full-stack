import React from "react";
import about_img from "../assets/images/png/hero-img.png";
import small_dots from "../assets/images/png/about_dot_group_small.png";
import big_dots from "../assets/images/png/hero-img-dots.png";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import dotC from "../components/assets/images/svg/dots-c.svg";
import halfBox from "../components/assets/images/svg/box.svg";
const AboutMe = () => {
  return (
    <div className="mt-10  relative">
      <img
        src={dotC}
        alt="dotC"
        className=" absolute top-[50%] left-5 hidden xl:block"
      />
      <img
        src={dotC}
        alt="dotC"
        className=" absolute bottom-[-100px] right-0 hidden xl:block"
      />
      <img
        src={halfBox}
        alt="halfBox"
        className=" hidden xl:block absolute top-[0%] right-0"
      />
      <div className=" px-3 container xl:max-w-[1100px] 3xl:max-w-[1140px] mx-auto">
        <h2 className="ff_fira font-semibold text-white text-[22px] sm:text-3xl md:text-[32px]">
          <span className=" text-[#C778DD]">/</span>about-me
        </h2>
        <p className=" ff_fira text-base text-white mt-4">Who am i? </p>
        <div className="flex flex-wrap  items-center justify-center md:justify-between">
          <div className="md:w-6/12">
            <p className="ff_fira text-[#ABB2BF] leading-[162%] pt-6">
              Hello, i’m Sumit Chouhan!
            </p>
            <p className="ff_fira text-[#ABB2BF] leading-[162%] py-3 lg:py-5">
              I’m a self-taught full stack developer from Haryana, India. I
              specialize in building responsive websites from the ground up,
              turning them into modern and user-friendly web experiences.
            </p>
            <p className="ff_fira text-[#ABB2BF] leading-[162%] pb-5">
              For over a year, I've been passionate about transforming ideas
              into functional websites. I've worked with clients to help them
              build their online presence, and I'm always eager to learn new
              technologies and frameworks to stay updated.
            </p>

            <a href="/">
              <button class="group ff_fira  font-medium relative min-h-[40px] sm:min-h-[50px] w-36 sm:w-40  overflow-hidden border border-[#C778DD] bg-transparent text-white shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-0 before:w-1/4 before:bg-[#C778DD] before:duration-500 after:absolute after:bottom-0 after:right-0 after:h-0 after:w-1/4 after:bg-[#C778DD] after:duration-500 hover:text-white hover:before:h-full hover:after:h-full">
                <span class="top-0 flex h-full w-full items-center justify-center before:absolute before:bottom-0 before:left-1/4 before:z-0 before:h-0 before:w-1/4 before:bg-[#C778DD] before:duration-500 after:absolute after:right-1/4 after:top-0 after:z-0 after:h-0 after:w-1/4 after:bg-[#C778DD] after:duration-500 hover:text-white group-hover:before:h-full group-hover:after:h-full"></span>
                <span class="absolute bottom-0 left-0 right-0 top-0 z-10 flex h-full w-full items-center justify-center group-hover:text-white">
                  Read more{" "}
                  <ArrowLongRightIcon className="h-8 w-6 text-white ms-2" />
                </span>
              </button>
            </a>
          </div>
          <div className="md:w-5/12 lg:w-5/12">
            <div className="relative">
              <img
                className="lg:min-h-[450px] w-full"
                src={about_img}
                alt="man img"
              />
              <img
                className="absolute sm:h-[60px] h-[50px] w-[50px] sm:w-[60px] lg:h-[84px] lg:w-[84px] top-[15%]"
                src={big_dots}
                alt="dots-group"
              />
              <img
                className="absolute sm:h-[40px] h-[36px] w-[46px] sm:w-[50px] lg:h-[56px] lg:w-[84px] bottom-[26%] right-[8%]"
                src={small_dots}
                alt="dots-group"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
