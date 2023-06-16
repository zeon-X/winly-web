"use client";
import Image from "next/image";
import React, { useState } from "react";
import { shareSvg, shoppingBagYellow } from "../../../../public/assets/Icons";

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
      <div className="grid grid-cols-1 gap-6">
        {data?.map((item, index) => {
          return (
            <div className="flex lg:flex-row sm:flex-col justify-between items-start gap-6 p-4 rounded-[32px] bg_sec_light lg:min-h-[403px]">
              {/* TICKET PRIZE PIC */}
              <div>
                <Image
                  src={item?.prize?.coverImage}
                  height={349}
                  width={443}
                  alt={item?.prize?.name + " image"}
                  className="rounded-[20px]"
                />
              </div>

              <div className="flex lg:flex-row sm:flex-col lg:min-h-[349px]">
                {/* INFO */}
                <div className="flex lg:flex-col sm:flex-row justify-between">
                  {/* TEXT */}
                  <div>
                    <p className="text-[40px] font-sora font-bold text-primary">
                      {item?.InspirationTitle}
                    </p>
                    <p className="text-[40px] font-sora font-bold">
                      {item?.prize?.name}
                    </p>
                    <p className="text-[#F19C08] flex gap-2 prim_text_xl_reg">
                      <span>{shoppingBagYellow}</span> <span>{item?.moto}</span>
                    </p>
                  </div>
                  <Image
                    src={item?.product?.coverImage}
                    height={133}
                    width={140}
                    alt={item?.product?.name + " image"}
                    className="rounded-[20px]"
                  />
                </div>
                {/* BUY INFO */}
                <div className="flex lg:flex-col sm:flex-row justify-between">
                  {/* PROGRESSBAR */}
                  <div></div>
                  {/* ACTION BTN */}
                  <div className="flex gap-3">
                    <button
                      type=""
                      className="bg-[#202020] px-6 py-2 rounded-[14px] prim_text_lg text-white"
                    >
                      Price Details
                    </button>
                    <button
                      type=""
                      className=" bg-primary px-6 py-2 rounded-[14px] prim_text_lg text-white"
                    >
                      Add to cart
                    </button>
                    <button type=""> {shareSvg} </button>
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
