import React, { useEffect } from "react";

const ProgressBar = () => {
  useEffect(() => {
    const scrollHandler = () => {
      scrollProgress();
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      // Cleanup the event listener when the component unmounts
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  const scrollProgress = () => {
    const currentState = window.scrollY || document.documentElement.scrollTop;
    const pageHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollStatePercentage = (currentState / pageHeight) * 100;
    document.querySelector(".page-scroll-indicator > .progress").style.width =
      scrollStatePercentage + "%";
  };

  return (
    <div className="top_bar !fixed !top-0 z-50 w-full">
      <div className="page-scroll-indicator h-1 sm:h-2">
        <div
          className="progress h-full bg-[#c778dd]"
          style={{ width: "0%" }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
