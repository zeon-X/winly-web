import React from "react";
import SellingFastProducts from "./SellingFastProducts";
import logo from "../../../../public/assets/logo/Winly Logo 1.png";
import Image from "next/image";

const Section3 = () => {
  return (
    <section className="bg_sec lg:px-0 lg:py-32  sm:p-4">
      <div className="max-w-[1407px] mx-auto ">
        {/* HEADING */}

        <div className="grid lg:grid-cols-2 sm:grid-cols-1 justify-between items-center lg:gap-16 sm:gap-4">
          <div className="flex gap-1 justify-start  lg:items-start sm:items-center">
            <Image
              className="lg:block sm:hidden mb-2"
              src={logo}
              alt="Winly logo"
              height={55}
              width={140}
            />
            <Image
              className="lg:hidden sm:block mb-2"
              src={logo}
              alt="Winly logo"
              height={23}
              width={60}
            />
            <p className="lg:text-[48px] sm:text-[16px] font-bold  font-sora">
              Selling Fast Products
            </p>
          </div>
          <p className="lg:text-[18px] sm:text-[12px] font-sora ">
            Winly offers different categories of products and ranges varies with
            your need. These products are awesome.
          </p>
        </div>
        <div className="w-full border border-b-[#E3E1E5] lg:my-[64px] sm:my-8 " />
      </div>

      <div className="">
        <SellingFastProducts />
      </div>
    </section>
  );
};

export default Section3;
