"use client";
import React, { useState } from "react";
import { mc, pp } from "../../../../public/assets/images";
import Image from "next/image";
import { moreHorizontal } from "../../../../public/assets/Icons";
import RequirePasswordModal from "@components/payment-options/RequirePasswordModal";

const PaymentMethod = ({ po }) => {
  return (
    <div className="rounded-xl bg_sec h-[220px] lg:w-[496px] sm:w-full py-6 px-10">
      <div className="flex justify-between items-start mb-3">
        <Image src={po?.icon} height={71} width={71} alt={po?.cardName} />

        <div className="dropdown dropdown-end">
          <label
            tabIndex={0}
            className="w-[42px] h-[42px] cursor-pointer hover:scale-95 transition-all ease-in-out bg-info rounded-full flex justify-center items-center"
          >
            {moreHorizontal}
          </label>

          <ul
            tabIndex={0}
            className="dropdown-content border border-[#EAEAEA]  bg-info rounded-lg shadow-xl w-52"
          >
            <li className="py-4 px-6">
              <label
                htmlFor="reqPassModal"
                className="prim_text_lg_reg text-white cursor-pointer"
              >
                See Details
              </label>
              {/* <a className="prim_text_lg_reg cursor-pointer">See Details</a> */}
            </li>
            <div className="border-b border-b-[#EAEAEA] w-full" />
            <li className="py-4 px-6">
              <a className="prim_text_lg_reg cursor-pointer">Delete Gateway</a>
            </li>
          </ul>
        </div>
      </div>
      <p className="prim_text_xl">{po?.nameOnCard}</p>
      <p className="sec_text_lg">{po?.email}</p>
    </div>
  );
};

const page = () => {
  const [paymentOptions, setPaymentOptions] = useState([
    {
      nameOnCard: "Md. Shefat Zeon",
      cardNo: "",
      expiresOn: "",
      cardName: "PayPal",
      email: "shefatzeon212@gmail.com",
      icon: pp,
    },
    {
      nameOnCard: "Md. Shefat Zeon",
      cardNo: "",
      expiresOn: "",
      cardName: "Master Card",
      email: "mdshefatzeon@gmail.com",
      icon: mc,
    },
  ]);
  return (
    <div>
      <div>
        <p className="prim_text_2xl mb-8">Payment Methods</p>

        <div className=" flex flex-wrap gap-4">
          {paymentOptions?.map((po, index) => {
            return <PaymentMethod po={po} key={index} />;
          })}

          <div className="lg:max-w-[496px] w-full min-h-[183px] p-6 bg_sec rounded-xl flex flex-col justify-center items-center">
            <p className="prim_text_lg_reg mb-3">Add more payment method</p>
            <button className="btn_primary lg:max-w-[130px] w-full lg:min-w-[300px]">
              Add Payment Method
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
