"use client";

import { useEffect, useState } from "react";
import {
  LeftArrowWhite,
  RightArrowWhite,
} from "../../../../public/assets/Icons";
import {
  LProduct1,
  LProduct2,
  LProduct3,
  loadingAnimation,
} from "../../../../public/assets/images";
import Image from "next/image";

const SellingFastProducts = () => {
  const [data, setData] = useState([
    {
      InspirationTitle: "Win",
      moto: "",

      product: {
        name: "Salwar kamiz",
        coverImage:
          "https://winly-storage.s3.me-central-1.amazonaws.com/2b840d8d2c49034bd53711e07e2eac35.jpeg",
        galleryImages: [LProduct3],
        stock: 20000,
        sold: 12500,
      },

      prize: {
        name: "Salwar kamiz",
        coverImage:
          "https://winly-storage.s3.me-central-1.amazonaws.com/2b840d8d2c49034bd53711e07e2eac35.jpeg",
      },
    },
    {
      InspirationTitle: "Win",
      moto: "",

      product: {
        name: "Salwar Kamiz",
        coverImage:
          "https://winly-storage.s3.me-central-1.amazonaws.com/5b4fc687-b93b-4141-aeb6-1bd82db75e671663054576612-Antheaa-Women-Dresses-631663054576038-1.webp",
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
        name: "Salwar Kamiz",
        coverImage:
          "https://winly-storage.s3.me-central-1.amazonaws.com/product-jpeg-500x500.webp",
        galleryImages: [LProduct3],
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
        coverImage: "https://i.ibb.co/f8rwKq9/Picture1.png",
        galleryImages: ["https://i.ibb.co/f8rwKq9/Picture1.png"],
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
  const [endAt, setEndAt] = useState(data.length >= 3 ? 2 : data.length); //0 1 2
  const [displayItems, setDisplayItems] = useState([]);
  useEffect(() => {
    let temItemData = [];
    for (let i = startFrom; i <= endAt; i++) {
      temItemData.push(data[i]);
    }

    setDisplayItems(temItemData);

    // console.log(temItemData);
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
    <>
      {/* FOR LARGE SCREEN */}
      <div className="lg:block md:hidden sm:hidden">
        <div className="rounded-tl-[24px] rounded-tr-[24px] rounded-bl-[24px] bg_sec pl-6 pt-4">
          {/* TOGGLE BUTTONS */}
          <div className="pr-6 pb-4 flex justify-between items-center">
            <p className="text-[24px] font-extrabold">Selling Fast</p>

            <div className="flex gap-4">
              <button
                onClick={handleLeftClick}
                className="white_btn_outline_md"
              >
                {LeftArrowWhite}
              </button>
              <button
                onClick={handleRightClick}
                className="white_btn_outline_md"
              >
                {RightArrowWhite}
              </button>
            </div>
          </div>
          {/* PRODUCTS */}
          <div className="grid grid-cols-3 gap-4">
            {displayItems?.map((item, index) => {
              return (
                <div key={index} className="relative">
                  <Image
                    src={item?.product?.coverImage}
                    height={344}
                    width={243}
                    alt={item?.product?.name}
                    className={
                      index !== 2
                        ? "rounded-[16px] rounded-tr-[16px] opacity-0 transition-opacity duration-1000"
                        : "rounded-tl-[16px]  opacity-0 transition-opacity duration-1000"
                    }
                    onLoadingComplete={(img) =>
                      img.classList.remove("opacity-0")
                    }
                  />

                  <div
                    style={{
                      backgroundColor: "rgba(0,0,0,0.9)",
                    }}
                    className="absolute bottom-0 w-full min-h-[82px] p-4"
                  >
                    {/* PROGRESS BAR */}
                    <progress
                      className="progress progress-primary w-full h-[6px]"
                      value={item?.product?.sold ? item?.product?.sold : 0}
                      max={item?.product?.stock ? item?.product?.stock : 100}
                    />

                    {/* SELLING INFO */}
                    <p className="prim_text_sm mt-2 ">
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
      {/* FOR SMALL SCREEN */}
      <div className="lg:hidden md:block sm:block">
        <div className="">
          {/* TITLE */}
          <p className="md:text-[22px] sm:text-[16px] font-extrabold  font-sora mb-4">
            Selling Fast
          </p>

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
                      <p className="md:text-[12px] sm:text-[8px]  font-sora">
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
    </>
  );
};

export default SellingFastProducts;
