import React, { useLayoutEffect, useRef } from "react";
import viewAllAroww from "../components/assets/images/svg/Arrow.svg";
import { projects } from "../components/common/Helper";
import arrowP from "../components/assets/images/svg/Arrow_p.svg";
import dotsImg from "../components/assets/images/svg/dots.svg";
import halfBox from "../components/assets/images/svg/box.svg";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Projects = () => {
  gsap.registerPlugin(ScrollTrigger);

  const projectParentRef = useRef(null);

  useLayoutEffect(() => {
    let cards = gsap.matchMedia();
    cards.add("(min-width: 992px)", () => {
      if (projectParentRef.current) {
        const project = gsap.timeline({
          scrollTrigger: {
            trigger: projectParentRef.current,
            start: "top 50%",
            end: "bottom top",
          },
        });
        project.fromTo(
          ".project_cards > div",
          {
            xPercent: 500,
            duration: 1,
            ease: "back(2)",
          },
          {
            xPercent: 0,
            ease: "back(2)",
            duration: 0.8,
            stagger: 0.2,
          }
        );
      }
    });
  }, []);

  return (
    <>
      <div className="overflow-hidden" ref={projectParentRef}>
        <div className="pt-12 lg:pt-[74px] relative">
          <img
            src={dotsImg}
            alt="dotsImg"
            className=" absolute hidden lg:block top-[22%] z-[-1]"
          />
          <img
            src={halfBox}
            alt="halfBox"
            className=" hidden xl:block absolute top-[57%] right-0"
          />
          <div className=" px-3 container xl:max-w-[1100px] 3xl:max-w-[1140px] mx-auto ">
            <div className=" flex justify-between">
              <h2 className="text-white font-medium ff_fira text-[22px] sm:text-3xl md:text-[32px] sm:text-[32px] relative projects_line">
                <span className="text-[#C778DD]">#</span>projects
              </h2>
              <a
                href="/project"
                className="text-white font-medium ff_fira text-base flex items-center"
              >
                View all
                <span className="ms-2">
                  <img src={viewAllAroww} alt="viewAllAroww" />
                </span>
              </a>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start project_cards">
              {projects.slice(0, 4).map((index) => (
                <div className="w-full max-w-[375px]  sm:w-6/12 lg:w-3/12 sm:px-3 mt-6">
                  <div className="border-[2px] border-[#ABB2BF]">
                    <img
                      src={index.img}
                      alt="map-img"
                      className="w-full min-h-[100px] object-cover max-h-[166px] lg:max-h-[107px]"
                    />
                    <h2 className="py-3 sm:py-4 px-4 ff_fira font-medium text-white  max-w-[329px] text-lg sm:text-xl md:text-xl">
                      {index.projectsName}
                    </h2>
                    <p className=" ff_fira text-xs px-4 pb-3 sm:pb-4 text-[#ABB2BF]">
                      {index.skill}
                    </p>
                    <a target="blank" href={index.myLink}>
                      <button className="flex items-center mx-4 mb-4 ff_fira font-medium text-white text-base border border-[#ABB2BF] py-1 px-4">
                        {index.btn}
                        <span className="ms-2">
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
      </div>
    </>
  );
};

export default Projects;
