"use client";
import "@styles/globals.css";
import Image from "next/image";
import logo from "../../public/assets/logo/Winly Logo 1.png";
import Link from "next/link";
import { navToggleSvg } from "../../public/assets/Icons";
import { useState } from "react";
import CartComponent from "./navbar/CartComponent";
import CurrencyDropdown from "./navbar/CurrencyDropdown";
import AccountBalance from "./navbar/AccountBalance";

const Nav = () => {
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
            <li>{<CurrencyDropdown />}</li>
            <li className="">{<CartComponent />}</li>

            {!isLoggedIn ? (
              <>
                <li>
                  <a href="/login" className="prim_text_lg_reg">
                    Login
                  </a>
                </li>
                <li>
                  <a href="/register" className="btn_outline prim_text_lg_reg">
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
