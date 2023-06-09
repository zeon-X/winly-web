"use client";
import React, { useState } from "react";
import { cartSvg } from "../../../public/assets/Icons";

const CartComponent = () => {
  const [cartItem, setCartItem] = useState([]);
  return (
    <a href="/cart" className="prim_text_lg_reg flex  items-center gap-2">
      {cartSvg}
      <span>
        Cart{" "}
        <span
          className={
            cartItem?.length > 0
              ? "bg-primary-red rounded-full px-2 py-1 text-[12px]"
              : "hidden"
          }
        >
          {cartItem?.length}
        </span>
      </span>
    </a>
  );
};

export default CartComponent;
