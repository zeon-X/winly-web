"use client";
import "@styles/globals.css";
import Image from "next/image";
import logo from "../../public/assets/logo/Winly-Logo-1.png";
import Link from "next/link";
import { navToggleSvg } from "../../public/assets/Icons";
import { useEffect } from "react";
import CartComponent from "./navbar/CartComponent";
import CurrencyDropdown from "./navbar/CurrencyDropdown";
import AccountBalance from "./navbar/AccountBalance";
import { useDispatch, useSelector } from "react-redux";
import { getCartItems } from "@app/redux/actions";

const Nav = () => {
  const auth = useSelector((state) => state.auth);

  // console.log(auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  return (
    <div className="lg:p-6 sm:px-4 sm:py-6">
      <div className=""></div>

      <div className="flex justify-between items-center lg:h-[81px] sm:h-[48px] rounded-[16px] bg-[#2D2D2D] w-full lg:px-6 sm:px-4 ">
        <div className="flex lg:justify-center sm:justify-between lg:w-auto sm:w-full items-center lg:gap-10 sm:gap-4">
          {/* LOGO lg:h-[43px] lg:w-[110px] sm:h-[23px] sm:w-[60px] mb-2 */}
          <Image
            className="lg:block sm:hidden mb-2"
            src={logo}
            alt="Winly logo"
            height={43}
            width={110}
          />
          <Image
            className="lg:hidden sm:block mb-2"
            src={logo}
            alt="Winly logo"
            height={23}
            width={60}
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

            {!auth.authenticate ? (
              <>
                <li>
                  <Link href="/login">
                    <div className="prim_text_lg_reg">Login</div>
                  </Link>
                </li>
                <li>
                  <Link href="/login">
                    <div className="btn_outline prim_text_lg_reg">Register</div>
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="">
                  {
                    <Link href="/cart">
                      <CartComponent />
                    </Link>
                  }
                </li>
                <li className="">
                  {
                    <Link href="/profile">
                      <AccountBalance />
                    </Link>
                  }
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
