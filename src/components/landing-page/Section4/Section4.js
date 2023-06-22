import Image from "next/image";
import React from "react";
import logo from "../../../../public/assets/logo/Winly Logo 1.png";
import {
  LeftArrowWhite,
  RightArrowWhite,
} from "../../../../public/assets/Icons";

const Section4 = () => {
  return (
    <section className="max-w-[1920px] mx-auto lg:px-6 sm:p-4">
      <div className="max-w-[1408px] mx-auto relative bg_sec_light rounded-[37px] p-28 flex lg:flex-row sm:flex-col gap-4">
        <div className="lg:w-5/12 sm:w-full">
          <div className="flex gap-1 justify-start items-start">
            <Image
              className="lg:block sm:hidden mb-2"
              src={logo}
              alt="Winly logo"
              height={55}
              width={140}
            />
            <Image
              className="lg:hidden sm:block mb-2"
              src={logo}
              alt="Winly logo"
              height={23}
              width={60}
            />
            <p className="lg:text-[48px] sm:text-[16px] font-bold  font-sora">
              Winners
            </p>
          </div>
          <p className="lg:text-[18px] sm:text-[12px]  font-sora mt-4 mb-8">
            Winly runs the lottery with reputed people and live videos are
            uploaded during the draw sessions.
          </p>

          <div className="flex gap-4">
            <button
              // onClick={() => handleOnClickChangeSelectedItem(1)}
              className="white_btn_outline_lg "
            >
              {LeftArrowWhite}
            </button>
            <button
              // onClick={() => handleOnClickChangeSelectedItem(-1)}
              className="white_btn_outline_lg "
            >
              {RightArrowWhite}
            </button>

            <Image src={""} height={370} width={380} alt="" />
          </div>
        </div>
        <div className="lg:w-7/12 sm:w-full"></div>
      </div>
    </section>
  );
};

export default Section4;
