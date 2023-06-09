"use client";
import Nav from "./Nav";
import Link from "next/link";
import { closeBtn } from "../../public/assets/Icons";
import logo from "../../public/assets/logo/Winly Logo 1.png";
import Image from "next/image";

const Drawer = ({ children }) => {
  return (
    <div className="drawer drawer-end">
      <input id="navbarToggle" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col ">
        {/* <!-- Navbar --> */}
        <div className="w-full">
          <Nav />
        </div>
        {/* <!-- Page content here --> */}
        {children}
      </div>
      <div className="drawer-side ">
        <label htmlFor="navbarToggle" className="drawer-overlay"></label>
        <ul className="nav_menu p-6 w-80 bg-base-100">
          {/* <!-- Sidebar content here --> */}
          <li className="flex justify-between items-center">
            <Image
              className="lg:h-[43px] lg:w-[110px] sm:h-[23px] sm:w-[60px] mb-2"
              src={logo}
              alt="Picture of the lgoo"
            />
            <label
              htmlFor="navbarToggle"
              className="drawer-overlay cursor-pointer"
            >
              {closeBtn}
            </label>
          </li>

          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/products"}>Products</Link>
          </li>
          <li>
            <Link href={"/contact"}>Neel Help? Contact us</Link>
          </li>
          <li>
            <Link href={"/"}>
              Call <span className="primary-red">08056482623</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
