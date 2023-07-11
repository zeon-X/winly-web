"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getCartItems, orderPlace } from "@app/redux/actions";
import { Elements } from "@stripe/react-stripe-js";
import { CheckOutForm } from "@components/CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";
import axiosInstance from "@app/redux/helpers/axios";

const addCardImageClass =
  "cursor-pointer bg-white hover:border-2 hover:border-blue-500 hover:scale-95 rounded-lg transition-all ease-in-out";
const addCardImageClassActive =
  "cursor-pointer bg-white border-2 border-blue-500 scale-95 rounded-lg";

const cardInputCss =
  "input input-bordered input-info w-full  bg_sec text-white mb-2 text-[14px]";
const addressInputCss =
  "textarea textarea-info w-full bg_sec text-white mb-2 text-[14px] h-32 text-white";

const CartPage = () => {
  const [exchangeProductWithTickets, setExchangeProductWithTickets] =
    useState(false);

  const [apartment, setApartment] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [detailAddress, setDetailAddress] = useState("");

  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  const cart = useSelector((state) => state.cart.cart);

  // console.log(cart);

  const handleCart = ({ productData, qty }) => {
    const item = {
      _id: productData.product._id,
      price: productData.price,
    };
    // console.log(item);
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

  const handleOrder = (cart) => {
    const order = {
      orderItems: cart.map((item) => {
        return {
          product_id: item.product._id,
          price: item.price,
          qty: item.qty,
          ticketQty: item.product.ticketQty,
          campaign_id: item.product.campaign.campaign_id,
        };
      }),
      orderTotal: totalPrice,
      orderID: Math.floor(100000 + Math.random() * 900000),
    };
    dispatch(orderPlace(order));
  };

  useEffect(() => {
    axiosInstance.get(`/payment/stripe/get-key`).then(async (res) => {
      const { publishableKey } = await res.data;
      setStripePromise(loadStripe(publishableKey));
    });
  }, []);

  useEffect(() => {
    console.log(totalPrice);
    const data = { amount: totalPrice };
    axiosInstance
      .post(`/payment/stripe/create-intent`, data)
      .then(async (res) => {
        const { clientSecret } = await res.data;
        setClientSecret(clientSecret);
      });
  }, [totalPrice > 0 && cart]);

  return (
    <div>
      <div className="flex lg:flex-row sm:flex-col justify-between items-start gap-10">
        <div className="max-w-[936px] lg:w-full sm:w-full mx-auto">
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
                    <div className="flex gap-10 justify-start items-center rounded-2xl">
                      <Image
                        src={
                          item?.product?.img?.url
                            ? item?.product?.img?.url
                            : "https://i.ibb.co/fFnnXLZ/shopping-cart.png"
                        }
                        height={127}
                        width={137}
                        alt={item?.product?.title + " image"}
                        className="rounded-3xl"
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
                id="exeProductWithTkt"
                type="checkbox"
                value={exchangeProductWithTickets}
                onClick={() => setExchangeProductWithTickets((state) => !state)}
                className="checkbox checkbox-success"
              />
              <label
                htmlFor="exeProductWithTkt"
                className="prim_text_lg text-white cursor-pointer"
              >
                Exchange the products with EXTRA ticket
              </label>
            </div>
          </div>
        </div>
        <div className="max-w-[391px] lg:w-full sm:w-full mx-auto">
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
                <span>$0</span>
              </p>
              <p className="mb-2  flex justify-between items-center sec_text_md_reg">
                <span>VAT</span>
                <span>$0</span>
              </p>
            </div>
            <div></div>
          </div>

          {/* PAYMENT METHOD  */}

          <div className="bg_sec rounded-xl shadow-lg my-6 p-6">
            <p className="prim_text_2xl font-bold  ">Payment Method</p>
            {clientSecret && stripePromise && (
              <Elements
                stripe={stripePromise}
                options={{ clientSecret, appearance: { theme: "night" } }}
              >
                <CheckOutForm cart={cart} />
              </Elements>
            )}

            {/* <div className="grid grid-cols-4 justify-start items-center gap-0 my-6">
              <Image
                src={pp}
                width={71}
                height={71}
                alt={""}
                className={
                  paymentMethod === 1
                    ? addCardImageClassActive
                    : addCardImageClass
                }
                onClick={() => setPaymentMethod(1)}
              />
              <Image
                src={visa}
                width={71}
                height={71}
                alt={""}
                className={
                  paymentMethod === 2
                    ? addCardImageClassActive
                    : addCardImageClass
                }
                onClick={() => setPaymentMethod(2)}
              />
              <Image
                src={mc}
                width={71}
                height={71}
                alt={""}
                className={
                  paymentMethod === 3
                    ? addCardImageClassActive
                    : addCardImageClass
                }
                onClick={() => setPaymentMethod(3)}
              />
              <Image
                src={cc}
                width={71}
                height={71}
                alt={""}
                className={
                  paymentMethod === 4
                    ? addCardImageClassActive
                    : addCardImageClass
                }
                onClick={() => setPaymentMethod(4)}
              />
            </div> */}

            {/* <input
              type="text"
              placeholder="Card No"
              value={cardNo}
              onChange={(e) => setCardNo(e.target.value)}
              className={cardInputCss}
            /> */}

            {/* <div className="flex lg:flex-row sm:flex-col gap-2">
              <input
                type="text"
                placeholder="Expire date MM/YY"
                value={cardExpiary}
                onChange={(e) => setCardExpiary(e.target.value)}
                className={cardInputCss}
              />

              <input
                type="text"
                placeholder="Security code"
                value={cardVcc}
                onChange={(e) => setCardVcc(e.target.value)}
                className={cardInputCss}
              />
            </div> 
            
            <button
              type=""
              className="mt-4 normal-case btn flex justify-center items-center bg-neutral w-full  rounded-xl text-[14px] font-semibold font-sora text-white"
            >
              Add Card
            </button> */}
          </div>

          {/* ADDRESS */}

          {exchangeProductWithTickets && (
            <div className="bg_sec rounded-xl shadow-lg my-6 p-6">
              <p className="prim_text_2xl font-bold mb-4">Address</p>

              <input
                type="text"
                placeholder="Apartment"
                value={apartment}
                onChange={(e) => setApartment(e.target.value)}
                className={cardInputCss}
              />

              <div className="flex lg:flex-row sm:flex-col gap-2">
                <input
                  type="text"
                  placeholder="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className={cardInputCss}
                />

                <input
                  type="text"
                  placeholder="Postal Code"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  className={cardInputCss}
                />
              </div>

              <textarea
                className={addressInputCss}
                // className="textarea textarea-bordered"
                placeholder="Detailed Address"
                value={detailAddress}
                onChange={(e) => setDetailAddress(e.target.value)}
              ></textarea>
            </div>
          )}

          {/* PLACE ORDER BTN */}
          <div className="">
            <button
              onClick={() => handleOrder(cart.cartItems)}
              type=""
              className="mt-4 normal-case btn flex justify-center items-center bg-primary w-full  rounded-xl text-[14px] font-semibold font-sora text-white"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
