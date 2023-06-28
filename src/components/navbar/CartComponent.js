"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartSvg } from "../../../public/assets/Icons";

const CartComponent = () => {
  const cart = useSelector((state) => state.cart.cart);

  const totalItem = cart.cartItems
    ? Object.keys(cart.cartItems).reduce(function (qty, key) {
        return qty + cart.cartItems[key].qty;
      }, 0)
    : 0;

  return (
    <a href="/cart" className="prim_text_lg_reg flex  items-center gap-2">
      {cartSvg}
      <span>
        Cart{" "}
        <span
          className={
            cart.cartItems && cart.cartItems.length > 0
              ? "bg-primary-red rounded-full px-2 py-1 text-[12px]"
              : "hidden"
          }
        >
          {totalItem}
        </span>
      </span>
    </a>
  );
};

export default CartComponent;
