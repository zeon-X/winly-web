"use client";
import React, { useState } from "react";
import { visa, wcc, mc, cc, pp } from "../../../../public/assets/images";
import Image from "next/image";

const addCardImageClass =
  "cursor-pointer hover:border hover:border-blue-500 rounded-lg";

const wallet = () => {
  const [topUpMethod, setTopUpMethod] = useState([
    {
      image: wcc,
      name: "Winly Card",
      no: "",
    },
    {
      image: visa,
      name: "Visa Card",
      no: "4043 1023 0000 1234",
    },
  ]);
  return (
    <div>
      <div>
        <p className="prim_text_2xl mb-8">Wallet</p>
        <div className="max-w-[640px] min-h-[183px] bg-white rounded-xl flex flex-col justify-center items-center">
          <p className="prim_text_lg_reg">Available balance for withdrawal</p>
          <p className="font-sora text-[40px]">$550</p>
        </div>

        <p className="mt-10 mb-4 prim_text_lg">Select Top-up Method</p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
          {topUpMethod?.map((card) => {
            return (
              <div className="rounded-xl p-4 min-h-[136px] bg-white flex flex-col justify-center items-center">
                <Image src={card?.image} width={106} alt={card?.name} />
                {/* {(card?.no !== "" || card?.no !== null) && (
                  <p className="sec_text_sm">{card?.no}</p>
                )} */}
              </div>
            );
          })}

          <div className="rounded-xl p-4 min-h-[136px] bg-white flex flex-col justify-center items-center">
            <p className="text-[14px] font-sora mb-2">Debit/ Credit card</p>
            <div className="flex gap-2">
              <Image
                src={pp}
                width={42}
                height={42}
                alt={""}
                className={addCardImageClass}
              />
              <Image
                src={visa}
                width={42}
                height={42}
                alt={""}
                className={addCardImageClass}
              />
              <Image
                src={mc}
                width={42}
                height={42}
                alt={""}
                className={addCardImageClass}
              />
              <Image
                src={cc}
                width={42}
                height={42}
                alt={""}
                className={addCardImageClass}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default wallet;
