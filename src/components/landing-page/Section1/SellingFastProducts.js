"use client";

import { useState } from "react";
import {
  LeftArrowWhite,
  RightArrowWhite,
} from "../../../../public/assets/Icons";
import {
  LProduct1,
  LProduct2,
  LProduct3,
} from "../../../../public/assets/images";
import Image from "next/image";

const SellingFastProducts = () => {
  const [data, setData] = useState([
    {
      InspirationTitle: "Win",
      moto: "",

      product: {
        name: "Iphone 14 pro max",
        coverImage: LProduct3,
        galleryImages: [LProduct3],
        stock: 20000,
        sold: 12500,
      },

      prize: {
        name: "Tesla V3",
        coverImage: "https://i.ibb.co/B2BXQH3/Rectangle-1.png",
      },
    },
    {
      InspirationTitle: "Win",
      moto: "",

      product: {
        name: "Iphone 14 pro max",
        coverImage: LProduct2,
        galleryImages: [LProduct2],
        stock: 20000,
        sold: 12500,
      },

      prize: {
        name: "Tesla V3",
        coverImage: "https://i.ibb.co/B2BXQH3/Rectangle-1.png",
      },
    },
    {
      InspirationTitle: "Win",
      moto: "",

      product: {
        name: "Iphone 14 pro max",
        coverImage: LProduct1,
        galleryImages: [LProduct3],
        stock: 20000,
        sold: 15500,
      },

      prize: {
        name: "Tesla V3",
        coverImage: "https://i.ibb.co/B2BXQH3/Rectangle-1.png",
      },
    },
  ]);
  return (
    <div>
      <div className="rounded-tl-[24px] rounded-tr-[24px] rounded-bl-[24px] bg_sec pl-6 pt-6">
        {/* TOGGLE BUTTONS */}
        <div className="pr-6 pb-6 flex justify-between items-center">
          <p className="text-[24px] font-extrabold">Selling Fast</p>

          <div className="flex gap-4">
            <button
              // onClick={() => handleOnClickChangeSelectedItem(1)}
              className="white_btn_outline_md"
            >
              {LeftArrowWhite}
            </button>
            <button
              // onClick={() => handleOnClickChangeSelectedItem(-1)}
              className="white_btn_outline_md"
            >
              {RightArrowWhite}
            </button>
          </div>
        </div>
        {/* PRODUCTS */}
        <div className="grid grid-cols-3 gap-4">
          {data?.map((item, index) => {
            let sellingProgress =
              (item?.product?.sold / item?.product?.stock) * 100;

            console.log(sellingProgress);
            return (
              <div className="relative">
                <Image
                  src={item?.product?.coverImage}
                  height={344}
                  width={243}
                  alt={item?.product?.name}
                  className="opacity-0 transition-opacity duration-1000"
                  onLoadingComplete={(img) => img.classList.remove("opacity-0")}
                />

                <div
                  style={{
                    backgroundColor: "rgba(0,0,0,0.7)",
                  }}
                  className="absolute bottom-0 w-full min-h-[82px] p-4"
                >
                  {/* PROGRESS BAR */}
                  <progress
                    className="progress progress-primary w-full h-[6px]"
                    value={sellingProgress}
                    max="100"
                  />

                  {/* SELLING INFO */}
                  <p className="prim_text_sm mt-2">
                    {item?.product?.sold} {" of "} {item?.product?.stock}
                    {" sold"}
                  </p>
                  <p className="prim_text_lg">{item?.product?.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SellingFastProducts;
