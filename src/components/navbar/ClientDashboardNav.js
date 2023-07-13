"use client";
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
import { signout, updateImage } from "@app/redux/actions";
import { useDispatch } from "react-redux";
import ReactModal from "react-modal";

const formInputCss =
  "p-1 focus:outline-none bg-transparent sec_text_xl text-white w-full";

const ClientDashboardNav = () => {
  const dispatch = useDispatch();
  const [image, setImage] = useState();
  const [show, setShow] = useState(false);
  const [previw, setPreview] = useState("");

  const handleImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setPreview(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
      setPreview(reader.result);
    }
  };

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
    userData?.img?.url === null
      ? "https://winly-storage.s3.me-central-1.amazonaws.com/profileicon.jpeg"
      : userData?.img?.url;

  const handleProfileImage = (e) => {
    const form = new FormData();

    form.append("img", image);

    dispatch(updateImage(form));
    e.preventDefault();
    setShow(false);
  };

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.6)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#000",
      padding: 50,
      borderRadius: 20,
    },
  };

  // const imageLoader = ({ src, width, quality }) => {
  //   return `${profileImg}?w=${width}&q=${quality || 75}`;
  // };

  return (
    <div className="w-full flex flex-col gap-6">
      {/* PROFILE INFO */}
      <div className="h-[246px] bg_sec rounded-[24px] lg:flex sm:hidden flex-col justify-center items-center">
        <div className="relative" onClick={() => setShow(true)}>
          <Image
            unoptimized={true}
            src={profileImg}
            height={112}
            width={112}
            className="rounded-full h-[112px] w-[112px] z-0 cursor-pointer"
            alt={userData?.firstName + "profile picture"}
          />
        </div>

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

        <div
          className="flex gap-3 p-4 cursor-pointer"
          onClick={() => dispatch(signout())}
        >
          {logout} <p className="prim_text_lg_reg">Logout</p>
        </div>
      </div>
      <ReactModal
        isOpen={show}
        style={customStyles}
        onRequestClose={() => setShow(false)}
      >
        <form>
          <div
            style={{
              margin: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {previw && <img src={previw} style={{ height: 300, width: 300 }} />}
          </div>
          <input
            id="profileImage"
            type="file"
            name="img"
            className="file-input w-full max-w-[480px]"
            // className={formInputCss}
            onChange={(e) => {
              setImage(e.target.files[0]), handleImage(e);
            }}
          />
          <div className="font-sora flex justify-between items-center mt-4">
            <button
              type="submit"
              className="mt-4 normal-case btn flex justify-center items-center bg-primary w-full  rounded-xl text-[14px] font-semibold font-sora text-white"
              onClick={handleProfileImage}
            >
              Confirm Update
            </button>
          </div>
        </form>
      </ReactModal>
    </div>
  );
};

export default ClientDashboardNav;
