import React from "react";
import { projects } from "../components/common/Helper";
import arrowP from "../components/assets/images/svg/Arrow_p.svg";
import dotC from "../components/assets/images/svg/dots-c.svg";
import halfBox from "../components/assets/images/svg/box.svg";

const CompleteApps = () => {
  return (
    <div className=" mt-10 md:mt-14 mb-16 lg:mb-32 relative">
      <img
        src={dotC}
        alt="dotC"
        className=" absolute top-[80%] left-5 hidden xl:block"
      />
      <img
        src={halfBox}
        alt="halfBox"
        className=" hidden xl:block absolute top-[10%] right-0"
      />
      <div className="px-3 container xl:max-w-[1100px] 3xl:max-w-[1140px] mx-auto">
        <h2 className="ff_fira font-semibold text-white text-[22px] sm:text-3xl md:text-[32px]">
          <span className=" text-[#C778DD]">/</span>projects
        </h2>
        <p className=" ff_fira text-base text-white mt-4">
          List of my projects
        </p>
        <h2 className="ff_fira font-semibold text-white text-[22px] sm:text-3xl md:text-[32px] mt-9 lg:mt-16">
          <span className=" text-[#C778DD]">#</span>my-projects
        </h2>

        <div className="flex flex-wrap justify-center md:justify-start md:mt-6">
          {projects.map((index) => (
            <div className="w-full max-w-[400px] sm:w-6/12 lg:w-4/12 sm:px-3 mt-6">
              <div className=" border border-[#ABB2BF] sm:min-h-[448px] flex flex-col justify-between">
                <img src={index.img} alt="map-img" className="w-full" />
                <p className="ff_fira text-[#ABB2BF] py-2 px-2 border-b border-b-[#ABB2BF]">
                  {index.skill}
                </p>
                <h2 className="py-3 sm:py-4 px-4 ff_fira font-medium text-white  max-w-[329px] text-lg sm:text-xl md:text-xl">
                  {index.projectsName}
                </h2>
                <p className=" ff_fira text-base px-4 pb-3 sm:pb-4 text-[#ABB2BF]">
                  {index.servers}
                </p>
                <a target="blank" href={index.myLink}>
                  <button className=" flex items-center mx-4 mb-4 ff_fira font-medium text-white text-base border border-[#ABB2BF] py-2 px-4 ">
                    {index.btn}
                    <span className=" ms-2">
                      <img src={arrowP} alt="arrowP" />
                    </span>
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompleteApps;
