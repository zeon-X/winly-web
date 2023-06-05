"use client";
import "@styles/globals.css";
import Image from "next/image";
import logo from "../../public/assets/logo/Winly Logo 1.png";
import Link from "next/link";
import {
  arrowDown,
  cartSvg,
  navToggleSvg,
  userSvg,
} from "../../public/assets/Icons";
import { useState } from "react";
import { aed, usd } from "../../public/assets/countryFlags";

const CartComponent = () => {
  return (
    <a
      href=""
      className="prim_text_lg_reg flex justify-center items-center gap-2"
    >
      {cartSvg}
      <span>
        Cart{" "}
        <span className="bg-primary-red rounded-full px-2.5 py-1 "> 0</span>
      </span>
    </a>
  );
};

const CurrencyDropdown = ({ currencySelected, currencyData }) => {
  return (
    <div className="dropdown dropdown-end prim_text_lg_reg">
      <label
        tabIndex={0}
        className="flex cursor-pointer justify-center items-center gap-2"
      >
        <Image
          src={currencyData[currencySelected]?.icon}
          alt={currencyData[currencySelected]?.name}
          height={24}
          width={32}
          className="rounded"
        ></Image>
        <p className="">{currencyData[currencySelected]?.name}</p>
        {arrowDown}
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        {currencyData.map((x) => {
          return (
            <li>
              <div className="flex justify-center items-center gap-2">
                <Image
                  src={x?.icon}
                  alt={x?.name}
                  height={24}
                  width={32}
                  className="rounded"
                ></Image>
                <p className="">{x?.name}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const AccountBalance = () => {
  return (
    <div className="flex justify-center items-center gap-2 font-sora text-white  ">
      <div className="border-l h-[34px] border-slate-100 pl-4"></div>
      <div className="flex flex-col items-end">
        <p className="sec_text_sm">Available Balance </p>
        <p className="prim_text_md">$550</p>
      </div>
      <div className="bg-nutral p-3 rounded-full"> {userSvg}</div>
    </div>
  );
};

const Nav = () => {
  const currencyData = [
    {
      name: "USD",
      icon: usd,
    },
    {
      name: "AED",
      icon: aed,
    },
  ];
  const [currencySelected, setCurrencySelected] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(1);
  return (
    <div className="p-6">
      <div className=""></div>

      <div className="flex justify-between items-center lg:h-[81px] sm:h-[48px] rounded-[16px] bg-[#2D2D2D] w-full lg:px-6 sm:px-4 ">
        <div className="flex lg:justify-center sm:justify-between lg:w-auto sm:w-full items-center lg:gap-10 sm:gap-4">
          {/* LOGO */}
          <Image
            className="lg:h-[43px] lg:w-[110px] sm:h-[23px] sm:w-[60px] mb-2"
            src={logo}
            alt="Picture of the lgoo"
          />
          {/* TOGGLE SM */}
          <div className="lg:hidden sm:flex md:flex ">
            <label
              htmlFor="navbarToggle"
              className="h-[30px] w-[32px] flex justify-center items-center bg-neutral rounded"
            >
              {navToggleSvg}
            </label>
          </div>
          {/* LEFT SIDE NAV ITEMS */}
          <div className="prim_text_lg_reg justify-center items-center gap-8  hidden lg:flex">
            <Link href={"/"}>Home</Link>
            <Link href={"/products"}>Products</Link>
            <Link href={"/contact"}>Neel Help? Contact us</Link>
            <Link href={"/"}>
              Call <span className="primary-red">08056482623</span>
            </Link>
          </div>
        </div>
        {/* CURRENCY, PERSONAL DETAILTS, REG LOGIN, CART */}
        <div className="lg:flex md:hidden sm:hidden justify-center items-center ">
          <ul className="flex justify-center items-center gap-6">
            <li>
              {
                <CurrencyDropdown
                  currencyData={currencyData}
                  currencySelected={currencySelected}
                />
              }
            </li>
            <li className="">{<CartComponent />}</li>

            {!isLoggedIn ? (
              <>
                <li>
                  <a href="" className="prim_text_lg_reg">
                    Login
                  </a>
                </li>
                <li>
                  <a href="" className="btn_outline prim_text_lg_reg">
                    Register
                  </a>
                </li>
              </>
            ) : (
              <li className="">{<AccountBalance />}</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
