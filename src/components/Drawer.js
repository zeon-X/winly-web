"use client";
import Nav from "./Nav";
import Link from "next/link";
import { logo } from "../../public/assets/Icons";

const Drawer = ({ children }) => {
  return (
    <div className="drawer">
      <input id="navbarToggle" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col ">
        {/* <!-- Navbar --> */}
        <div className="w-full">
          <Nav />
        </div>
        {/* <!-- Page content here --> */}
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="navbarToggle" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-100">
          {/* <!-- Sidebar content here --> */}
          <li>{logo}</li>
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
