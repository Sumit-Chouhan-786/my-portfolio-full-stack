import React, { useEffect, useState } from "react";
import { Bars3CenterLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "./Helper";
import { LogoIcon } from "./Icon";
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const path = useLocation().pathname;
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);
  return (
    <>
      <nav>
        <div className="container xl:max-w-[1100px] 3xl:max-w-[1140px] mx-auto px-3 xl:px-0 py-5">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="ff_fira text-white font-bold text-xl md:text-2xl flex items-center gap-2"
            >
              <LogoIcon /> Sumit-Chouhan
            </Link>
            <div className="hidden sm:block">
              <div className="gap-5 flex items-center">
                {navLinks.map((link, index) => (
                  <Link
                    key={index}
                    className={`ff_fira text-[#ABB2BF] text-lg hover:text-white font-medium transition-all duration-200 relative before:absolute before:h-[2px] hover:before:left-0 before:transition-all before:duration-300 hover:before:w-full before:w-0 before:bottom-0 before:bg-white before:left-[50%] before:content-[''] ${
                      path === link.to ? "text_stroke !text-white" : ""
                    }`}
                    to={link.to}
                  >
                    <span
                      className={`${
                        path === link.to ? "text_stroke !text-[#C778DD]" : ""
                      } text-[#C778DD]`}
                    >
                      {link.has}
                    </span>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex sm:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="relative z-30"
              >
                {!isOpen ? (
                  <Bars3CenterLeftIcon className="h-8 w-8 text-white" />
                ) : (
                  <XMarkIcon className="h-8 w-8 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
        <div
          className={`md:opacity-0 transition-all duration-300  fixed backdrop-blur-md h-screen w-screen z-20  top-0 ${
            isOpen ? " translate-x-0" : "translate-x-[-100%]"
          }`}
          id="mobile-menu"
        >
          <div className="gap-5 flex items-center flex-col justify-center h-full">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                className={`ff_fira text-[#ABB2BF] text-lg hover:text-white font-medium transition-all duration-200 relative before:absolute before:h-[2px] hover:before:left-0 before:transition-all before:duration-300 hover:before:w-full before:w-0 before:bottom-0 before:bg-white before:left-[50%] before:content-[''] ${
                  path === link.to ? "text_stroke !text-white" : ""
                }`}
                to={link.to}
              >
                <span
                  className={`${
                    path === link.to ? "text_stroke !text-[#C778DD]" : ""
                  } text-[#C778DD]`}
                >
                  {link.has}
                </span>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
