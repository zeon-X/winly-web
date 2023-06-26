"use client";

import { useEffect, useState } from "react";
import {
  LeftArrowWhite,
  RightArrowWhite,
} from "../../../../public/assets/Icons";
import Image from "next/image";

const SellingFastProducts = () => {
  const [data, setData] = useState([
    {
      InspirationTitle: "Win",
      moto: "",

      product: {
        name: "Iphone 14 pro max",
        coverImage: "https://i.ibb.co/N65Q0yT/i1.png",
        galleryImages: ["https://i.ibb.co/N65Q0yT/i1.png"],
        stock: 20000,
        sold: 12500,
      },

      prize: {
        name: "Tesla V3",
        coverImage: "https://i.ibb.co/N65Q0yT/i1.png",
      },
    },
    {
      InspirationTitle: "Win",
      moto: "",

      product: {
        name: "Iphone 14 pro max",
        coverImage: "https://i.ibb.co/v3Zs7pW/i2.png",
        galleryImages: ["https://i.ibb.co/v3Zs7pW/i2.png"],
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
        coverImage: "https://i.ibb.co/42hN3qx/i3.png",
        galleryImages: ["https://i.ibb.co/42hN3qx/i3.png"],
        stock: 20000,
        sold: 15500,
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
        coverImage: "https://i.ibb.co/DKwnzFJ/i4.png",
        galleryImages: ["https://i.ibb.co/DKwnzFJ/i4.png"],
        stock: 20000,
        sold: 15500,
      },

      prize: {
        name: "Tesla V3",
        coverImage: "https://i.ibb.co/f8rwKq9/Picture1.png",
      },
    },
    {
      InspirationTitle: "Win",
      moto: "",

      product: {
        name: "Samsung Level U2 ",
        coverImage: "https://i.ibb.co/WsW3TjX/i5.png",
        galleryImages: ["https://i.ibb.co/WsW3TjX/i5.png"],
        stock: 20000,
        sold: 15500,
      },

      prize: {
        name: "Tesla V3",
        coverImage: "https://i.ibb.co/gMFq5CW/Picture2.png",
      },
    },
    {
      InspirationTitle: "Win",
      moto: "",

      product: {
        name: "Samsung Level U2 ",
        coverImage: "https://i.ibb.co/gMFq5CW/Picture2.png",
        galleryImages: ["https://i.ibb.co/gMFq5CW/Picture2.png"],
        stock: 20000,
        sold: 15500,
      },

      prize: {
        name: "Tesla V3",
        coverImage: "https://i.ibb.co/gMFq5CW/Picture2.png",
      },
    },
  ]);
  const [startFrom, setStartFrom] = useState(0);
  const [endAt, setEndAt] = useState(data.length >= 5 ? 4 : data.length); //0 1 2
  const [displayItems, setDisplayItems] = useState([]);
  useEffect(() => {
    let temItemData = [];
    for (let i = startFrom; i <= endAt; i++) {
      temItemData.push(data[i]);
    }

    setDisplayItems(temItemData);

    console.log(temItemData);
  }, [data, startFrom, endAt]);

  const handleRightClick = () => {
    let dataLen = data.length;
    if (endAt + 1 >= dataLen) {
      //no updates
    } else {
      setStartFrom((currentValue) => currentValue + 1);
      setEndAt((currentValue) => currentValue + 1);
    }
  };
  const handleLeftClick = () => {
    if (startFrom - 1 < 0) {
      //no updates
    } else {
      setStartFrom((currentValue) => currentValue - 1);
      setEndAt((currentValue) => currentValue - 1);
    }
  };

  let widthForSM = data?.length * 158 + (data?.length - 1) * 8;
  let widthForMD = data?.length * 384 + (data?.length - 1) * 8;

  return (
    <div className="">
      {/* FOR LARGE SCREEN */}
      <div className="lg:block md:hidden sm:hidden">
        <div className="max-w-[1600px] mx-auto flex justify-center items-center gap-4">
          <button
            onClick={handleLeftClick}
            className="white_btn_outline_md h-[38px]"
          >
            {LeftArrowWhite}
          </button>
          {/* PRODUCTS */}
          <div className="max-w-[1400px] mx-auto w-full grid grid-cols-5 justify-center items-center gap-4">
            {displayItems?.map((item, index) => {
              return (
                <div key={index} className="relative mx-auto">
                  <Image
                    src={item?.product?.coverImage}
                    height={344}
                    width={243}
                    alt={item?.product?.name}
                    className={
                      "rounded-tl-[16px] rounded-tr-[16px] opacity-0 transition-opacity duration-1000"
                    }
                    onLoadingComplete={(img) =>
                      img.classList.remove("opacity-0")
                    }
                  />

                  <div className="absolute bottom-0 w-[243px] min-h-[82px] p-4 bg_prim rounded-bl-[16px] rounded-br-[16px]">
                    {/* PROGRESS BAR */}
                    <progress
                      className="progress progress-primary w-full h-[6px]"
                      value={item?.product?.sold ? item?.product?.sold : 0}
                      max={item?.product?.stock ? item?.product?.stock : 100}
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

          <button
            onClick={handleRightClick}
            className="white_btn_outline_md h-[38px]"
          >
            {RightArrowWhite}
          </button>
        </div>
      </div>
      {/* FOR SMALL SCREEN */}
      <div className="lg:hidden md:block sm:block">
        <div className="">
          {/* PRODUCTS */}
          <div className="overflow-x-auto">
            <div
              // className={
              //   "flex gap-2 sm:w-[" +
              //   widthForSM +
              //   "] " +
              //   "md:w-[" +
              //   widthForMD +
              //   "] "
              // }
              style={{
                width: `${widthForSM}px`,
              }}
              className="flex gap-2"
            >
              {data?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="relative md:w-[384px] sm:w-[158px]"
                  >
                    <Image
                      src={item?.product?.coverImage}
                      height={222}
                      width={158}
                      alt={item?.product?.name}
                      className="rounded-[12px] opacity-0 transition-opacity duration-1000"
                      onLoadingComplete={(img) =>
                        img.classList.remove("opacity-0")
                      }
                    />

                    <div className="bg_prim absolute bottom-0 rounded-bl-[12px] rounded-br-[12px] w-full min-h-[54px] px-2">
                      {/* PROGRESS BAR */}
                      <progress
                        className="progress progress-primary w-full md:h-[5px] sm:h-[2px]"
                        value={item?.product?.sold ? item?.product?.sold : 0}
                        max={item?.product?.stock ? item?.product?.stock : 100}
                      />

                      {/* SELLING INFO */}
                      <p className="md:text-[12px] sm:text-[8px] font-sora">
                        {item?.product?.sold} {" of "} {item?.product?.stock}
                        {" sold"}
                      </p>
                      <p className="md:text-[14px] sm:text-[10px] mb-2  font-sora">
                        {item?.product?.name}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellingFastProducts;
