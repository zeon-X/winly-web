import Nav from "./Nav";
import { closeBtn } from "../../public/assets/Icons";
import logo from "../../public/assets/logo/Winly Logo 1.png";
import Image from "next/image";
import PrimaryLinks from "./navbar/PrimaryLinks";
import CurrencyDropdown from "./navbar/CurrencyDropdown";
import CartComponent from "./navbar/CartComponent";
import ClientDashboardNav from "./navbar/ClientDashboardNav";
import Footer from "./Footer";

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
        <div className="w-full min-h-fit">{children}</div>

        <Footer />
      </div>
      <div className="drawer-side ">
        <label htmlFor="navbarToggle" className="drawer-overlay"></label>
        <ul className="nav_menu bg_prim p-10 w-full bg-base-100">
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

          <PrimaryLinks />
          <li>
            <CurrencyDropdown />
          </li>

          <li>
            <CartComponent />
          </li>

          <li>
            <ClientDashboardNav />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
