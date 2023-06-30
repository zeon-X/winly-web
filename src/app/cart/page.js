"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getCartItems } from "@app/redux/actions";

const CartPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  const cart = useSelector((state) => state.cart.cart);

  const handleCart = ({ productData, qty }) => {
    const item = {
      _id: productData.product._id,
      price: productData.price,
    };
    console.log(item);
    dispatch(addToCart(item, qty));
  };

  const totalItem = cart.cartItems
    ? Object.keys(cart.cartItems).reduce(function (qty, key) {
        return qty + cart.cartItems[key].qty;
      }, 0)
    : 0;

  const totalPrice = cart.cartItems
    ? Object.keys(cart.cartItems).reduce((totalPrice, key) => {
        const { price, qty } = cart.cartItems[key];
        return totalPrice + price * qty;
      }, 0)
    : 0;

  return (
    <div>
      <div className="flex lg:flex-row sm:flex-col justify-between items-start gap-10">
        <div className="lg:w-3/4 sm:w-full">
          <p className="prim_text_2xl mb-8">Cart</p>
          {/* PRODUCT */}
          <div className="lg:p-10 sm:p-4 shadow-lg rounded-[24px] grid grid-cols-1 gap-8 bg_sec max-w-[936px]">
            {cart?.cartItems &&
              cart?.cartItems?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex lg:flex-row md:flex-row sm:flex-col justify-between items-center gap-6"
                  >
                    {/* INFO */}
                    <div className="flex gap-10 justify-start items-center">
                      <Image
                        src={item?.product?.img?.url}
                        height={127}
                        width={137}
                        alt={item?.product?.title + " image"}
                      />

                      <div>
                        <p className="prim_text_lg"> {item?.product?.title} </p>
                        <p className="sec_text_md_reg">
                          Win {item?.product?.campaign?.campaign_name}
                        </p>
                        <p className="font-bold text-[20px] font-sora text-primary-red mt-1 lg:mb-6 sm:mb-1">
                          $ {item?.price}
                        </p>
                        <p className="">
                          You Will Get{" "}
                          <span className="text-success">
                            {item?.product?.ticketQty} Tickets
                          </span>
                        </p>
                      </div>
                    </div>
                    {/* COUNT */}
                    <div className="flex lg:gap-6 sm:gap-2 justify-center items-center ">
                      <button
                        type=""
                        className="btn_gray_update bg-info "
                        onClick={() =>
                          handleCart({ productData: item, qty: -1 })
                        }
                      >
                        -
                      </button>
                      <button type="" className="btn_gray_update bg-neutral">
                        {item?.qty}
                      </button>
                      <button
                        type=""
                        className="btn_gray_update bg-info"
                        onClick={() =>
                          handleCart({ productData: item, qty: 1 })
                        }
                      >
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
          <div className="bg_sec rounded-xl shadow-lg">
            <div className="flex justify-between items-center p-6 border-b border-b-neutral">
              <div className="">
                <p className="prim_text_2xl font-bold  ">Total</p>
                <p className="sec_text_md ">Including VAT</p>
              </div>
              <p className="text-primary-red text-[32px] font-bold">
                {totalPrice}
              </p>
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
