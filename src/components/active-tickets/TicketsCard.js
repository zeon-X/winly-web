import React from "react";
import { ticketBg2 } from "../../../public/assets/cardBg";
import { calenderSvg } from "../../../public/assets/Icons";
import Image from "next/image";

const TicketsCard = ({ tickets }) => {
  return (
    <div className="relative min-h-[217px] max-w-[776px] flex justify-center items-center">
      <Image
        src={ticketBg2}
        height={217}
        className="absolute top-0 min-h-[217px] max-w-[776px] w-full"
      />
      <div className="z-10 min-h-[155px] max-w-[531px] w-full border-r border-r-slate-200 border-dashed  ">
        <p className="text-primary text-sora font-bold text-[32px]">
          {tickets?.title}
        </p>
        <p className="my-5 sec_text_xl">{tickets?.prize_name}</p>
        <div className="flex gap-2 items-center ">
          <button type="" className="btn_gray_md prim_text_lg">
            Prize Details
          </button>
          <div className="flex gap-2 btn_gray_md prim_text_lg">
            {calenderSvg} <span>Max Draw Date: </span>{" "}
            <span>{tickets?.draw_date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketsCard;
