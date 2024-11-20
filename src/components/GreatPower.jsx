import React from "react";
import { DoubleQuotation } from "./common/Icon";

const GreatPower = () => {
  return (
    <div className="container xl:max-w-[1100px] 3xl:max-w-[1140px] mx-auto px-3 pt-5 lg:pt-4">
      <div className="border border-[#ABB2BF] relative p-4 md:p-8">
        <span className="absolute top-[-10px] left-[2%] bg-[#282C33] px-1">
          <DoubleQuotation />
        </span>
        <span className="absolute bottom-[-10px] right-[2%] bg-[#282C33] px-1">
          <DoubleQuotation />
        </span>
        <p className="ff_fira text-white font-medium text-lg sm:text-xl md:text-2xl">
          With great power comes great electricity bill
        </p>
      </div>
      <div className="flex justify-end">
        <div className="md:p-4 border-t-0 p-2 border border-white w-[164px] ff_fira text-white font-medium text-lg sm:text-xl md:text-2xl">- Dr. Who</div>
      </div>
    </div>
  );
};

export default GreatPower;
