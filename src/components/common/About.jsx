import React from "react";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import about_img from "../../assets/images/png/hero-img.png";
import small_dots from "../../assets/images/png/about_dot_group_small.png";
import big_dots from "../../assets/images/png/hero-img-dots.png";
const About = () => {
  return (
    <div className="relative pt-12 lg:pt-[106px]">
      <img
        className="absolute sm:h-[60px] h-[50px] w-[50px] sm:w-[60px] lg:h-[84px] lg:w-[84px] bottom-[16%] right-0 hidden md:block"
        src={big_dots}
        alt="dots-group"
      />
      <div className="border border-l-0 border-white py-20 h-22 w-12 top-[50%] translate-y-[-50%] absolute hidden xl:block"></div>
      <div className="px-3 container xl:max-w-[1100px] 3xl:max-w-[1140px] mx-auto">
        <h2 className=" text-white font-medium ff_fira text-[22px] sm:text-3xl md:text-[32px] sm:text-[32px] relative before:absolute before:h-[2px] before:w-[150%] inline-block before:right-[-160%] before:top-[50%] before:bg-[#C778DD]">
          <span className="text-[#C778DD]">#</span>about-me
        </h2>
        <div className="flex flex-wrap  items-center justify-center md:justify-between">
          <div className="md:w-6/12">
            <p className="ff_fira text-[#ABB2BF] leading-[162%] pt-6">
              Hello, i’m Sumit Chouhan!
            </p>
            <p className="ff_fira text-[#ABB2BF] leading-[162%] py-3 lg:py-5">
              I’m a self-taught front-end developer based in Haryana, India. I
              can develop responsive websites from scratch and raise them into
              modern user-friendly web experiences.
            </p>
            <p className="ff_fira text-[#ABB2BF] leading-[162%] pb-5">
              Transforming my creativity and knowledge into a websites has been
              my passion for over a year. I have been helping various clients to
              establish their presence online. I always strive to learn about
              the newest technologies and frameworks.
            </p>
            <a href="/about">
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
              <img className="xl:pb-20 lg:pb-10" src={about_img} alt="man img" />
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

export default About;
