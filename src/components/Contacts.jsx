import React from "react";
import wahtApp from "../components/assets/images/svg/whatsapp-icon.svg";
import emailIcon from "../components/assets/images/svg/Email-icon.svg";
import dotsC from "../components/assets/images/svg/dots-c.svg";

const Contacts = () => {
  return (
    <div className="py-12 lg:py-28 relative">
      <img
        src={dotsC}
        alt="dotsC"
        className=" absolute top-[46%] hidden xl:inline-block z-[-1]"
      />
      <div className=" px-3 container xl:max-w-[1100px] 3xl:max-w-[1140px] mx-auto ">
        <h2 className="text-white font-medium ff_fira text-[22px] sm:text-3xl md:text-[32px] sm:text-[32px] relative contacts_line">
          <span className="text-[#C778DD]">#</span>contacts
        </h2>
        <div className="flex flex-wrap mt-6 md:mt-11">
          <div className="sm:w-6/12">
            <p className="text-base ff_fira text-[#ABB2BF] max-w-[505px]">
              I’m interested in freelance opportunities. However, if you have
              other request or question, don’t hesitate to contact me
            </p>
          </div>
          <div className="w-full sm:w-6/12 mt-7 sm:mt-0">
            <div className="sm:flex justify-end">
              <div className="border border-[#ABB2BF] p-4 group  transition-all duration-300">
                <p className="text-base ff_fira font-semibold text-white">
                  Message me here
                </p>
                <div className="mt-4">
                  <a href="tel:+8221077926" className=" flex items-center">
                    <img src={wahtApp} alt="wahtApp" />
                    <span className="text-base ff_fira text-[#ABB2BF] inline-block ms-2 group-hover:text-white">
                      (+91)8221077926
                    </span>
                  </a>
                </div>
                <div className="mt-2">
                  <a
                    href="mailto:sumitkhan.dhana@gmail.com"
                    className="flex items-center"
                  >
                    <img src={emailIcon} alt="emailIcon" />
                    <span className="text-base ff_fira text-[#ABB2BF] inline-block ms-2 group-hover:text-white">
                      sumitkhan.dhana@gmail.com
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
