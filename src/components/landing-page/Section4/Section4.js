"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../../public/assets/logo/Winly Logo 1.png";
import {
  LeftArrowWhite,
  RightArrowWhite,
} from "../../../../public/assets/Icons";
import sec4flash from "../../../../public/assets/landingPage/section4/g10.png";
import Winniers from "./Winniers";

const Section4 = () => {
  const [visibleData, setVisibleData] = useState([
    {
      name: "Rinku Sing",
      winningOn: "Lancer V86X",

      announce: "11:55 am 11 may, 2023 ",
      ticketNo: "836846577778 ",
      prizeImage: "https://i.ibb.co/n3chgg2/Rectangle-51.png",
    },
    {
      name: "Rinku Sing",
      winningOn: "Lancer V86X",

      announce: "11:55 am 11 may, 2023 ",
      ticketNo: "836846577778 ",
      prizeImage: "https://i.ibb.co/L0xTMTj/cpphoto5.jpg",
    },
  ]);
  const [data, setData] = useState([
    {
      name: "Rinku Sing",
      winningOn: "Lancer V86X",

      announce: "11:55 am 11 may, 2023 ",
      ticketNo: "836846577778 ",
      prizeImage: "https://i.ibb.co/n3chgg2/Rectangle-51.png",
    },
    {
      name: "Rinku Sing",
      winningOn: "Lancer V86X",

      announce: "11:55 am 11 may, 2023 ",
      ticketNo: "836846577778 ",
      prizeImage: "https://i.ibb.co/L0xTMTj/cpphoto5.jpg",
    },
  ]);
  return (
    <section className="max-w-[1920px] mx-auto lg:px-6 sm:p-4">
      <div className="max-w-[1408px] mx-auto relative bg_sec_light rounded-[37px] pl-28 py-28 flex lg:flex-row sm:flex-col gap-8">
        <div className="lg:w-4/12 sm:w-full h-full">
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
          </div>
          <Image
            src={sec4flash}
            height={370}
            width={380}
            alt=""
            className="absolute bottom-0 "
          />
        </div>
        <div className="lg:w-8/12 sm:w-full h-full overflow-x-hidden relative">
          <Winniers data={visibleData} />
        </div>
      </div>
    </section>
  );
};

export default Section4;
