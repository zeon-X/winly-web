"use client";
import React, { useState } from "react";
import { productImage1, productImage2 } from "../../../public/assets/images";
import Image from "next/image";

const CartPage = () => {
  const [cartData, setCartData] = useState([
    {
      image: productImage1,
      title: "Escalade Sport Platinum",
      prize: "Win macbook pro",
      price: "$256",
      ticketCount: 3,
    },
    {
      image: productImage2,
      title: "Escalade Sport Platinum",
      prize: "Win macbook pro",
      price: "$256",
      ticketCount: 2,
    },
  ]);
  return (
    <div>
      <div className="flex flex-wrap justify-between items-start lg:gap-0 sm:gap-10">
        <div className="lg:w-3/4 sm:w-full">
          <p className="prim_text_2xl mb-8">Cart</p>
          {/* PRODUCT */}
          <div className="p-10 shadow-lg rounded-[24px] grid lg:grid-cols-1 sm:grid-cols-1 gap-8 bg-white max-w-[936px]">
            {cartData?.map((product) => {
              return (
                <div className="flex flex-wrap justify-between items-center gap-6">
                  {/* INFO */}
                  <div className="flex gap-10 justify-start items-center">
                    <Image
                      src={product?.image}
                      height={127}
                      width={137}
                      alt={product?.title + " image"}
                    />

                    <div>
                      <p className="prim_text_lg"> {product?.title} </p>
                      <p className="sec_text_md_reg">{product?.prize}</p>
                      <p className="font-bold text-[20px] font-sora text-primary-red mt-1 mb-6">
                        {product?.price}
                      </p>
                      <p className="">
                        You Will Get{" "}
                        <span className="text-success">
                          {product?.ticketCount} Tickets
                        </span>
                      </p>
                    </div>
                  </div>
                  {/* COUNT */}
                  <div className="flex gap-6 justify-center items-center">
                    <button type="" className="btn_gray_update bg-[#F5F5F5]">
                      -
                    </button>
                    <button type="" className="btn_gray_update bg-[#EBEAED]">
                      10
                    </button>
                    <button type="" className="btn_gray_update bg-[#F5F5F5]">
                      +
                    </button>
                  </div>
                </div>
              );
            })}

            {/* EXCHANGE WITH WXTRA PRODUCT */}
            <div className="flex justify-start items-center gap-2 mt-8">
              <input
                type="checkbox"
                checked="checked"
                className="checkbox checkbox-success"
              />
              <p className="prim_text_lg">
                Exchange the product with EXTRA ticket
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/4 sm:w-full">
          {/*TOTAL  */}
          <div className="bg-white rounded-xl shadow-lg">
            <div className="flex justify-between items-center p-6 border-b border-b-slate-200">
              <div className="">
                <p className="prim_text_2xl font-bold  ">Total</p>
                <p className="sec_text_md ">Including VAT</p>
              </div>
              <p className="text-primary-red text-[32px] font-bold">$579</p>
            </div>

            <div className="p-6 ">
              <p className="mb-2 flex justify-between items-center sec_text_md_reg">
                <span>Sub Total</span>
                <span>$235</span>
              </p>
              <p className="mb-2  flex justify-between items-center sec_text_md_reg">
                <span>VAT</span>
                <span>$70</span>
              </p>
            </div>
          </div>
          {/* PAYMENT METHOD  */}
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
