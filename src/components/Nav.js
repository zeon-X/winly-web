"use client";
import "@styles/globals.css";
import Image from "next/image";
import logo from "../../public/assets/logo/Winly Logo 1.svg";
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
    <a href="" className="flex justify-center items-center gap-2">
      {cartSvg}
      <span>
        Cart{" "}
        <span className="bg-primary-red rounded-full px-2.5 py-1 text-white">
          {" "}
          0
        </span>
      </span>
    </a>
  );
};

const CurrencyDropdown = ({ currencySelected, currencyData }) => {
  return (
    <div className="dropdown dropdown-end">
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
    <div className="flex justify-center items-center gap-2   ">
      <div className="border-l h-[34px] border-slate-100 pl-4"></div>
      <div className="flex flex-col items-end">
        <p className="sec_text_sm">Available Balance </p>
        <p className="prim_text_md">$550</p>
      </div>
      <div className="bg-gray p-3 rounded-full"> {userSvg}</div>
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
  const [isLoggedIn, setIsLoggedIn] = useState(0);
  return (
    <div className="p-6 ">
      <div className=""></div>

      <div className="flex justify-between items-center h-[81px] rounded-lg bg-white w-full lg:px-6 sm:px-4 ">
        <div className="flex justify-center items-center lg:gap-10 sm:gap-4">
          <div className="flex-none lg:hidden">
            <label htmlFor="navbarToggle" className="btn btn-square btn-ghost">
              {navToggleSvg}
            </label>
          </div>
          <Image
            className="lg:block sm:hidden"
            src={logo}
            width={110}
            height={43}
            alt="Picture of the author"
          />
          <div className=" justify-center items-center gap-8  hidden lg:flex">
            <Link href={"/"}>Home</Link>
            <Link href={"/products"}>Products</Link>
            <Link href={"/contact"}>Neel Help? Contact us</Link>
            <Link href={"/"}>
              Call <span className="primary-red">08056482623</span>
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center ">
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
                  <a href="">Login</a>
                </li>
                <li>
                  <a href="" className="btn_outline">
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
