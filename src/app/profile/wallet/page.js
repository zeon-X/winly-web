"use client";
import React, { useState } from "react";
import { visa, wcc, mc, cc, pp } from "../../../../public/assets/images";
import Image from "next/image";
import { useSelector } from "react-redux";

const addCardImageClass =
  "cursor-pointer bg-white hover:border hover:border-blue-500 rounded-lg";

const WalletPage = () => {
  const user = JSON.parse(localStorage.getItem("user"));

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
        <div className="max-w-[640px] min-h-[183px] bg_sec rounded-xl flex flex-col justify-center items-center">
          <p className="prim_text_lg_reg">Available balance for withdrawal</p>
          <p className="font-sora text-white text-[40px]">
            AED {user?.wallet?.available > 0 ? user?.wallet?.available : 0}
          </p>
        </div>

        <p className="mt-10 mb-4 prim_text_lg">Select Top-up Method</p>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6">
          {topUpMethod?.map((card, index) => {
            return (
              <div
                key={index}
                style={{ backgroundColor: "white" }}
                className="rounded-xl p-4  min-h-[136px]  flex flex-col justify-center items-center"
              >
                <Image src={card?.image} width={106} alt={card?.name} />
                {/* {(card?.no !== "" || card?.no !== null) && (
                  <p className="sec_text_sm">{card?.no}</p>
                )} */}
              </div>
            );
          })}

          <div
            // style={{ backgroundColor: "white" }}
            className="rounded-xl p-4 min-h-[136px] bg_sec flex flex-col justify-center items-center"
          >
            <p className="prim_text_md mb-2" style={{ color: "white" }}>
              Debit/ Credit card
            </p>
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

export default WalletPage;
