"use client";
import { useState } from "react";

import { LTicketPrizeProduct1 } from "../../../../public/assets/images";
import {
  LeftArrowWhite,
  RightArrowWhite,
} from "../../../../public/assets/Icons";
import Image from "next/image";

const FocusingPrizeWithProduct = () => {
  const [data, setData] = useState([
    {
      InspirationTitle: "Win",
      moto: "Buy our Rolax Watch and make it yours",

      product: {
        name: "Rolax Watch",
        coverImage: LTicketPrizeProduct1,
        galleryImages: [LTicketPrizeProduct1],
        stock: 20000,
        sold: 125000,
      },

      prize: {
        name: "Tesla V3",
        coverImage: "https://i.ibb.co/B2BXQH3/Rectangle-1.png",
      },
    },
    {
      InspirationTitle: "Win",
      moto: "Buy our Rolax Watch and make it yours",

      product: {
        name: "Rolax Watch",
        coverImage: LTicketPrizeProduct1,
        galleryImages: [LTicketPrizeProduct1],
        stock: 20000,
        sold: 125000,
      },

      prize: {
        name: "Iphone 14 pro max",
        coverImage: "https://i.ibb.co/w6pPnXD/Picture1.jpg",
      },
    },
  ]);

  const [selectedItem, setSelectedItem] = useState(0);

  const handleOnClickChangeSelectedItem = (value) => {
    let dlen = data.length;
    if (value > 0) {
      if (selectedItem + value >= dlen - 1) setSelectedItem(0);
      else setSelectedItem((currentValue) => currentValue + value);
    } else {
      if (selectedItem + value < 0) setSelectedItem(dlen - 1);
      else setSelectedItem((currentValue) => currentValue + value);
    }
  };

  return (
    <>
      {/* FOR LARGE SCREEN */}
      <div className="w-full lg:block md:block sm:hidden lg:h-full md:h-[781px]">
        {
          <div
            style={{
              backgroundImage: `url(${data[selectedItem]?.prize?.coverImage})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className="relative max-h-[859px] h-full rounded-[24px]"
          >
            {/* <Image
              src={data[selectedItem]?.prize?.coverImage}
              height={859}
              width={1040}
              alt=""
              className="opacity-0 transition-opacity duration-1000 rounded-[24px]"
              onLoadingComplete={(img) => img.classList.remove("opacity-0")}
            /> */}
            <div className="absolute top-0 w-full h-full">
              <div
                className="p-4 absolute bottom-0 w-full"
                // relative w-full lg:min-h-[859px]
              >
                <div
                  style={{
                    backgroundColor: "rgba(0,0,0,0.5)",
                  }}
                  className="  rounded-[19px] lg:min-h-[269px] w-full bg-red-300  p-8 flex justify-between items-start"
                >
                  <div className="font-sora h-full">
                    <p className="text-[64px] font-extrabold">
                      {data[selectedItem]?.InspirationTitle}
                    </p>
                    <p className="text-[28px] font-extrabold">
                      {data[selectedItem]?.prize?.name}
                    </p>
                    <p className="text-[20px] mb-2 font-medium">
                      {data[selectedItem]?.moto}
                    </p>
                    <button className="white_btn w-fit"> See Details</button>
                  </div>

                  <div className="lg:min-h-[220px] h-full flex flex-col justify-between items-end">
                    <div className="flex gap-4">
                      <button
                        onClick={() => handleOnClickChangeSelectedItem(1)}
                        className="white_btn_outline"
                      >
                        {LeftArrowWhite}
                      </button>
                      <button
                        onClick={() => handleOnClickChangeSelectedItem(-1)}
                        className="white_btn_outline"
                      >
                        {RightArrowWhite}
                      </button>
                    </div>
                    <Image
                      className="cursor-pointer opacity-0 transition-opacity duration-1000"
                      onLoadingComplete={(img) =>
                        img.classList.remove("opacity-0")
                      }
                      src={data[selectedItem]?.product?.coverImage}
                      height={105}
                      width={110}
                      alt={data[selectedItem]?.product?.name + " image"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
      {/* FOR SMALL SCREEN */}

      <div className="w-auto lg:hidden md:hidden sm:block overflow-x-auto ">
        <div
          style={{ width: `${data?.length * 340 + (data?.length - 1) * 8}px` }}
          className={"flex gap-2 "}
        >
          {data?.map((x, index) => {
            return (
              <div className="w-[340px]">
                <div className="relative">
                  <Image
                    src={x?.prize?.coverImage}
                    height={282}
                    width={340}
                    alt=""
                    className="opacity-0 transition-opacity duration-1000 rounded-[12px]"
                    onLoadingComplete={(img) =>
                      img.classList.remove("opacity-0")
                    }
                  />
                  <div className="absolute top-0 w-full h-full">
                    <div
                      className="p-1 absolute bottom-0 w-full"
                      // relative w-full lg:min-h-[859px]
                    >
                      <div
                        style={{
                          backgroundColor: "rgba(0,0,0,0.5)",
                        }}
                        className="  rounded-[10px] lg:min-h-[269px] w-full bg-red-300  p-4 flex justify-between items-start"
                      >
                        <div className="font-sora h-full">
                          <p className="prim_text_exlg">
                            {data[selectedItem]?.InspirationTitle}
                          </p>
                          <p className="prim_text_sm">
                            {data[selectedItem]?.prize?.name}
                          </p>
                          <p className="prim_text_xs_reg">
                            {data[selectedItem]?.moto}
                          </p>
                        </div>

                        <div className="lg:min-h-[220px] h-full flex flex-col justify-between items-end">
                          <div className="mt-6"></div>
                          <Image
                            className="cursor-pointer opacity-0 transition-opacity duration-1000"
                            onLoadingComplete={(img) =>
                              img.classList.remove("opacity-0")
                            }
                            src={data[selectedItem]?.product?.coverImage}
                            height={41}
                            width={43}
                            alt={data[selectedItem]?.product?.name + " image"}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FocusingPrizeWithProduct;
