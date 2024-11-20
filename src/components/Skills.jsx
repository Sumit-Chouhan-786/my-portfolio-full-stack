import React, { useLayoutEffect, useRef } from "react";
import dotBox from "../assets/images/png/dot_box.png";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
const Skills = () => {
  gsap.registerPlugin(ScrollTrigger);

  const skillsParentRef = useRef(null);
  useLayoutEffect(() => {
    let cards = gsap.matchMedia();
    cards.add("(min-width: 992px)", () => {
      if (skillsParentRef.current) {
        const project = gsap.timeline({
          scrollTrigger: {
            trigger: skillsParentRef.current,
            start: "top 50%",
            end: "bottom top",
          },
        });
        project.fromTo(
          ".skill_img",
          {
            scale: 0,
            duration: 1,
            ease: "back(2)",
          },
          {
            scale: 1,
            ease: "back(2)",
            duration: 0.8,
            stagger: 0.8,
          }
        );
      }
    });
  }, []);
  return (
    <>
      <div ref={skillsParentRef}>
        <div className="px-3 container xl:max-w-[1100px] 3xl:max-w-[1140px] mx-auto pt-12 lg:pt-[106px]">
          <h2 className="text-white font-medium ff_fira text-[22px] sm:text-3xl md:text-[32px] sm:text-[32px] relative skills_line pb-6">
            <span className="text-[#C778DD]">#</span>skills
          </h2>
          <div className="flex flex-wrap justify-between">
            <div className="w-5/12 px-3 mt-9 hidden lg:block skill_img">
              <img
                src={dotBox}
                alt="dotBox"
                className="ms-6 max-w-[350px] min-h-[283px] w-full"
              />
            </div>
            <div className="w-full lg:w-7/12 px-2">
              <div className="mx-auto max-w-[375px] sm:max-w-[100%] sm:flex justify-between">
                {/* ==================BOX=1=================*/}

                <div>
                  <div className="border border-[#ABB2BF] group sm:w-[148px] max-h-[160px] transition-all duration-300">
                    <h3 className="text-base py-2 px-3 ff_fira text-white font-medium border-b border-b-[#ABB2BF]">
                      Languages
                    </h3>
                    <div className="px-3 py-2">
                      <p className="text-base ff_fira text-[#ABB2BF] group-hover:text-white">
                        JavaScript
                      </p>
                      <p className="text-base ff_fira text-[#ABB2BF] group-hover:text-white">
                        Node js
                      </p>
                      <p className="text-base ff_fira text-[#ABB2BF] group-hover:text-white">
                        Sql
                      </p>
                      <p className="text-base ff_fira text-[#ABB2BF] group-hover:text-white">
                        TypeScript
                      </p>
                    </div>
                  </div>
                  <div className="border border-[#ABB2BF] group h-[110px] mt-3 transition-all duration-300">
                    <h3 className="text-base py-2 px-3 ff_fira text-white font-medium border-b border-b-[#ABB2BF]">
                      Database
                    </h3>
                    <div className="px-3 py-2">
                      <p className="text-base ff_fira text-[#ABB2BF] group-hover:text-white">
                        MySql
                      </p>
                      <p className="text-base ff_fira text-[#ABB2BF] group-hover:text-white">
                        MongoDb
                      </p>
                    </div>
                  </div>
                </div>
                {/* ==================BOX=2=================*/}
                <div>
                  <div className="border border-[#ABB2BF] group transition-all duration-300 mt-4 sm:mt-0 h-[130px]">
                    <h3 className="text-base py-2 px-3 ff_fira text-white font-medium border-b border-b-[#ABB2BF]">
                      Other
                    </h3>
                    <div className="px-3 py-2">
                      <p className="text-base ff_fira text-[#ABB2BF] group-hover:text-white">
                        HTML CSS
                      </p>
                      <p className="text-base ff_fira text-[#ABB2BF] group-hover:text-white">
                        SCSS
                      </p>
                      <p className="text-base ff_fira text-[#ABB2BF] group-hover:text-white">
                        Vite
                      </p>
                    </div>
                  </div>
                  <div className="border border-[#ABB2BF] mt-4 h-[110px]  transition-all group duration-300">
                    <h3 className="text-base py-2 px-3 ff_fira text-white font-medium border-b border-b-[#ABB2BF]">
                      Frameworks
                    </h3>
                    <div className="px-3 py-2">
                      <p className="text-base ff_fira text-[#ABB2BF] group-hover:text-white">
                        React js , Next.js
                      </p>
                      <p className="text-base ff_fira text-[#ABB2BF] group-hover:text-white">
                        Express js
                      </p>
                    </div>
                  </div>
                </div>
                {/*================ BOX=3===================*/}

                <div>
                  <div className="mt-4 sm:mt-0 border border-[#ABB2BF] group h-[130px]  transition-all duration-300">
                    <h3 className="text-base py-2 px-3 ff_fira text-white font-medium border-b border-b-[#ABB2BF]">
                      Tools
                    </h3>
                    <div className="px-3 py-2">
                      <p className="text-base ff_fira text-[#ABB2BF] group-hover:text-white">
                        Vs code
                      </p>
                      <p className="text-base ff_fira text-[#ABB2BF] group-hover:text-white">
                        Github
                      </p>
                      <p className="text-base ff_fira text-[#ABB2BF] group-hover:text-white">
                        Vercel,Netlify,Firebase
                      </p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="border border-[#ABB2BF] group h-[150px]  transition-all duration-300">
                      <h3 className="text-base py-2 px-3 ff_fira text-white font-medium border-b border-b-[#ABB2BF]">
                        Library
                      </h3>
                      <div className="px-3 py-2">
                        <p className="text-base ff_fira text-[#ABB2BF] group-hover:text-white">
                          <span> bootstrap</span> <span>AOS</span>{" "}
                        </p>
                        <p className="text-base ff_fira text-[#ABB2BF] group-hover:text-white">
                          Tailwind.css
                        </p>
                        <p className="text-base ff_fira text-[#ABB2BF] group-hover:text-white">
                          GSAP{" "}
                        </p>
                        <p className="text-base ff_fira text-[#ABB2BF] group-hover:text-white">
                          Material ui
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
