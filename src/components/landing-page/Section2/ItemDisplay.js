"use client";
import Image from "next/image";
import React, { useState } from "react";
import { shareSvg } from "../../../../public/assets/Icons";

const ItemDisplay = () => {
  const [data, setData] = useState([
    {
      InspirationTitle: "Win",
      moto: "Buy a Zorro Pencil and make it yours!",

      product: {
        name: "Rolax Watch",
        coverImage: "https://i.ibb.co/ckx2r7H/t1p1.png",
        galleryImages: ["https://i.ibb.co/ckx2r7H/t1p1.png"],
        stock: 20,
        sold: 5,
      },

      prize: {
        name: "IPhone 14 pro max",
        coverImage: "https://i.ibb.co/0VrMRDW/t2.png",
      },
    },
    {
      InspirationTitle: "Win",
      moto: "Buy a Zorro Pencil and make it yours!",

      product: {
        name: "Rolax Watch",
        coverImage: "https://i.ibb.co/RhXB6Vj/p5.png",
        galleryImages: ["https://i.ibb.co/RhXB6Vj/p5.png"],
        stock: 20,
        sold: 5,
      },

      prize: {
        name: "Lancer X6V Model",
        coverImage: "https://i.ibb.co/6gK15TB/t3.png",
      },
    },
    {
      InspirationTitle: "Win",
      moto: "Buy a Zorro Pencil and make it yours!",

      product: {
        name: "Rolax Watch",
        coverImage: "https://i.ibb.co/x5b0G3P/p6.png",
        galleryImages: ["https://i.ibb.co/x5b0G3P/p6.png"],
        stock: 20,
        sold: 5,
      },

      prize: {
        name: "5,00,000 UAD",
        coverImage: "https://i.ibb.co/swSMqBQ/t4.png",
      },
    },
  ]);

  return (
    <div>
      <div className="grid lg:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6">
        {data?.map((item, index) => {
          return (
            <div
              key={index}
              className="flex lg:flex-row sm:flex-col justify-between items-center lg:gap-6 sm:gap-3 p-4  lg:rounded-[32px] sm:rounded-[12px] bg_sec_light lg:min-h-[390px]"
            >
              {/* TICKET PRIZE PIC */}

              <Image
                src={item?.prize?.coverImage}
                height={349}
                width={443}
                alt={item?.prize?.name + " image"}
                className="lg:rounded-[20px] sm:rounded-[8px]"
              />

              <div className="flex lg:flex-row sm:flex-col lg:gap-8 sm:gap-0 md:gap-0 lg:min-h-[349px] py-4 lg:w-auto sm:w-full">
                {/* INFO */}
                <div className="flex lg:flex-col sm:flex-row justify-between ">
                  {/* TEXT */}
                  <div>
                    <p className="lg:text-[40px] sm:text-[16px] font-sora font-bold text-primary">
                      {item?.InspirationTitle}
                    </p>
                    <p className="lg:text-[40px] sm:text-[16px] font-sora font-bold">
                      {item?.prize?.name}
                    </p>
                    <p className="text-[#F19C08] flex gap-2 items-center lg:text-[20px] sm:text-[10px]">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="lg:h-[24px] lg:w-[24px] sm:h-[10px] sm:w-[11px]"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18 6H16C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6H6C4.9 6 4 6.9 4 8V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8C20 6.9 19.1 6 18 6ZM10 10C10 10.55 9.55 11 9 11C8.45 11 8 10.55 8 10V8H10V10ZM12 4C13.1 4 14 4.9 14 6H10C10 4.9 10.9 4 12 4ZM16 10C16 10.55 15.55 11 15 11C14.45 11 14 10.55 14 10V8H16V10Z"
                          fill="#F19C08"
                        />
                      </svg>{" "}
                      <span>{item?.moto}</span>
                    </p>
                  </div>
                  <Image
                    src={item?.product?.coverImage}
                    height={133}
                    width={140}
                    alt={item?.product?.name + " image"}
                    className="rounded-[20px] lg:block sm:hidden "
                  />
                  <Image
                    src={item?.product?.coverImage}
                    height={58}
                    width={61}
                    alt={item?.product?.name + " image"}
                    className="rounded-[8px] lg:hidden sm:block"
                  />
                </div>
                {/* DIVIDER */}
                <div className="w-full border border-b-[#1A1A1A] mb-[9px] mt-[19px] lg:hidden sm:block " />
                {/* BUY INFO */}
                <div className="flex lg:flex-col justify-between lg:gap-2 sm:gap-4 lg:pr-4 sm:pr-0">
                  {/* PROGRESSBAR */}

                  <div className="lg:ml-auto sm:ml-0">
                    <div className="lg:w-[194px] lg:h-[93px] sm:w-[138px] sm:h-[66px] rounded-[50px] lg:border-[16px] border-[10px] border-[#1A1A1A] ">
                      <div className="p-4 bg_sec_light rounded-[35px] h-full flex justify-evenly items-center">
                        <div className="flex flex-col justify-center items-center">
                          <p className="lg:text-[22px] sm:text-[15px] font-semibold">
                            {item?.product?.sold}
                          </p>
                          <p className="lg:text-[11px] sm:text-[7px]">SOLD</p>
                        </div>

                        <div className="h-[40px] border  border-[#202020]" />

                        <div className="flex flex-col justify-center items-center">
                          <p className="lg:text-[11px] sm:text-[7px]">OUT OF</p>
                          <p className="lg:text-[22px] sm:text-[15px] font-semibold">
                            {item?.product?.stock}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <Cp percent={20} /> */}
                  {/* ACTION BTN */}
                  <div className="lg:flex sm:block lg:my-0 sm:my-auto gap-3">
                    <button
                      type=""
                      className="bg-[#202020] px-4 py-2 rounded-[14px] text-[16px] font-semibold text-white sm:hidden lg:block"
                    >
                      Price Details
                    </button>
                    <button
                      type=""
                      className="lg:text-[16px] sm:text-[12px] bg-primary px-4 lg:py-2 sm:py-4 rounded-[14px] font-semibold text-white"
                    >
                      Add to cart
                    </button>
                    <button
                      type=""
                      className="bg-[#202020] px-4 py-2 rounded-[14px] text-[16px] font-semibold text-white sm:hidden lg:block"
                    >
                      {" "}
                      {shareSvg}{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ItemDisplay;
