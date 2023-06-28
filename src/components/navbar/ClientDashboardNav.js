"use client";
import { dp } from "../../../public/assets/images";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  active_ticket,
  logout,
  notification,
  offer,
  payment_options,
  person,
  settiing,
  wallet,
} from "../../../public/assets/Icons";
import { signout } from "@app/redux/actions";
import { useDispatch } from "react-redux";

const ClientDashboardNav = () => {
  const dispatch = useDispatch();
  const [navData, setNavData] = useState([
    {
      title: "Personal Details",
      link: "personal-details",
      icon: person,
    },
    {
      title: "Wallet",
      link: "wallet",
      icon: wallet,
    },
    {
      title: "Offer",
      link: "offers",
      icon: offer,
    },
    {
      title: "Active Tickets",
      link: "active-tickets",
      icon: active_ticket,
    },
    {
      title: "Payment Options",
      link: "payment-options",
      icon: payment_options,
    },
    {
      title: "Settings",
      link: "settings",
      icon: settiing,
    },
    {
      title: "Notification Preferences",
      link: "notification",
      icon: notification,
    },
  ]);

  const userData = JSON.parse(localStorage.getItem("user"));

  const profileImg =
    userData.img.url === null
      ? "https://winly-storage.s3.me-central-1.amazonaws.com/profileicon.jpeg"
      : userData.img.url;

  return (
    <div className="w-full flex flex-col gap-6">
      {/* PROFILE INFO */}
      <div className="h-[246px] bg_sec rounded-[24px] lg:flex sm:hidden flex-col justify-center items-center">
        <Image
          src={profileImg}
          height={112}
          width={112}
          className="rounded-full"
          alt={userData.firstName + "profile picture"}
        />
        <p className="prim_text_lg mt-[14px]">{userData?.fullName}</p>
        <p className="sec_text_lg">{userData?.email}</p>
      </div>
      {/* PROFILE NEVIGATION */}
      <div className="bg_sec rounded-[24px]">
        {navData?.map((nav, index) => {
          return (
            <Link href={"/profile/" + nav?.link} key={index}>
              <div className="flex gap-3 p-4">
                {nav?.icon} <p className="prim_text_lg_reg">{nav?.title}</p>
              </div>
              <div className="border-b border-b-neutral w-full"></div>
            </Link>
          );
        })}

        <div className="flex gap-3 p-4" onClick={() => dispatch(signout())}>
          {logout} <p className="prim_text_lg_reg">Logout</p>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboardNav;
