"use client";
import React from "react";
import { userSvg } from "../../../public/assets/Icons";

const AccountBalance = () => {
  return (
    <div>
      <div className="lg:flex sm:hidden md:hidden justify-center items-center gap-2 font-sora text-white  ">
        <div className="border-l h-[34px] border-slate-100 pl-4"></div>
        <div className="flex flex-col items-end">
          <p className="sec_text_sm">Available Balance </p>
          <p className="prim_text_md">$550</p>
        </div>
        <div className="bg-nutral p-3 rounded-full"> {userSvg}</div>
      </div>

      <div className="lg:hidden sm:flex md:flex  justify-start items-center gap-2 font-sora text-white  ">
        <div className="bg-nutral p-3 rounded-full"> {userSvg}</div>
        <div className="flex flex-col items-start">
          <p className="sec_text_sm">Available Balance </p>
          <p className="prim_text_md">$550</p>
        </div>
      </div>
    </div>
  );
};

export default AccountBalance;
