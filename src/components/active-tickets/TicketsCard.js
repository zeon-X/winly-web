import React from "react";
import { ticketBg } from "../../../public/assets/cardBg";
import { calenderSvg } from "../../../public/assets/Icons";
import Image from "next/image";

const TicketsCard = ({ ticket }) => {
  const D = new Date(ticket.campaign.validity);

  return (
    <div className="relative min-h-[217px] max-w-[776px] flex justify-center items-center">
      <Image
        src={ticketBg}
        height={217}
        className="absolute top-0 min-h-[217px] max-w-[776px] w-full"
      />
      <div className="z-10 min-h-[155px] max-w-[531px] w-full border-r border-r-info border-dashed  ">
        <p className="text-primary text-sora font-bold text-[32px]">WIN</p>
        <p className="my-5 sec_text_xl">{ticket.campaign.title}</p>
        <div className="flex flex-wrap gap-4 items-center ">
          <button type="" className="btn_prim_user_db prim_text_lg">
            Prize Details
          </button>
          <div className="flex gap-2 btn_sec_user_db prim_text_lg">
            {calenderSvg} <span>Max Draw Date: </span>{" "}
            <span>{D.toDateString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketsCard;
