"use client";
import React, { useState } from "react";
import { mc, pp } from "../../../../public/assets/images";
import Image from "next/image";
import { moreHorizontal } from "../../../../public/assets/Icons";
import RequirePasswordModal from "@components/payment-options/RequirePasswordModal";

const PaymentMethod = ({ po }) => {
  return (
    <div className="rounded-xl bg-white h-[220px] lg:w-[496px] sm:w-auto py-6 px-10">
      <div className="flex justify-between items-start mb-3">
        <Image src={po?.icon} height={71} width={71} alt={po?.cardName} />

        <div className="dropdown dropdown-end">
          <label
            tabIndex={0}
            className="w-[42px] h-[42px] cursor-pointer hover:scale-95 transition-all ease-in-out bg-gray rounded-full flex justify-center items-center"
          >
            {moreHorizontal}
          </label>

          <ul
            tabIndex={0}
            className="dropdown-content   bg-white rounded-lg shadow-xl w-52"
          >
            <RequirePasswordModal />
            <li className="py-4 px-6">
              <label
                htmlFor="reqPassModal"
                className="prim_text_lg_reg cursor-pointer"
              >
                See Details
              </label>
              {/* <a className="prim_text_lg_reg cursor-pointer">See Details</a> */}
            </li>
            <div className="border-b border-b-slate-100 w-full" />
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

          <div className="lg:min-w-[496px] min-h-[183px] p-6 bg-white rounded-xl flex flex-col justify-center items-center">
            <p className="prim_text_lg_reg mb-3">Add more payment method</p>
            <button className="btn_primary w-full lg:min-w-[300px]">
              Add Payment Method
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
