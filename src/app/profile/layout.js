"use client";
import "@styles/globals.css";
import { dp } from "../../../public/assets/images";
import Image from "next/image";
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
import Link from "next/link";

export default function ProfileLayout({ children }) {
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
  const [userData, setUserData] = useState({
    firstname: "Shefat",
    lastname: "Zeon",
    email: "mdshefatzeon@gmail.com",
    dob: "27/01/2000",
    cc: "+880",
    phone: "1402199906",
    gender: 1,
    nationality: "Bangladesh",
    country: "United Arab Emirats",
    Image: dp,
  });
  return (
    <section className="max-w-[1440px] w-full mx-auto flex justify-between gap-10 items-start p-6">
      {/* w-[337px] */}
      <div className="w-1/4 flex flex-col gap-6">
        {/* PROFILE INFO */}
        <div className="h-[246px] bg-white rounded-xl flex flex-col justify-center items-center">
          <Image
            src={userData.Image}
            height={112}
            width={112}
            className="rounded-full"
            alt={userData.firstname + "profile picture"}
          />
          <p className="prim_text_lg mt-[14px]">
            {userData?.firstname} {userData?.lastname}
          </p>
          <p className="sec_text_lg">{userData?.email}</p>
        </div>
        {/* PROFILE NEVIGATION */}
        <div className="bg-white rounded-xl">
          {navData?.map((nav, index) => {
            return (
              <Link href={"/profile/" + nav?.link} key={index}>
                <div className="flex gap-3 p-4">
                  {nav?.icon} <p className="prim_text_lg_reg">{nav?.title}</p>
                </div>
                <div className="border-b border-slate-100 w-full"></div>
              </Link>
            );
          })}

          <div className="flex gap-3 p-4">
            {logout} <p className="prim_text_lg_reg">Logout</p>
          </div>
        </div>
      </div>

      {/* NEVIGATION PAGE LOADER DIV */}
      <div className="w-3/4">{children}</div>
    </section>
  );
}
