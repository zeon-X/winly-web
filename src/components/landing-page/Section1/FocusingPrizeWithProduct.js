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
    <div className="w-full">
      {
        <div
          style={{
            backgroundImage: `url(${data[selectedItem]?.prize?.coverImage})`,
          }}
          className="w-full lg:min-h-[859px] h-full bg-cover bg-center rounded-[24px] p-4"
        >
          <div className="relative w-full lg:min-h-[859px]">
            <div
              style={{
                backgroundColor: "rgba(0,0,0,0.5)",
                // filter: "blur(2px)",
              }}
              className="absolute bottom-0 rounded-[19px] lg:min-h-[269px] w-full bg-red-300  p-8 flex justify-between items-start"
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
                  className="cursor-pointer"
                  src={data[selectedItem]?.product?.coverImage}
                  height={105}
                  width={110}
                  alt={data[selectedItem]?.product?.name + " image"}
                />
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default FocusingPrizeWithProduct;
