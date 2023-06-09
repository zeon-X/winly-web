import "@styles/globals.css";
import Image from "next/image";
import logo from "../../public/assets/logo/Winly Logo 1.png";
import Link from "next/link";
import { fb, insta, li, tw } from "../../public/assets/socialSvg";

const Footer = () => {
  const quickLinks = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Products",
      link: "/products",
    },
    {
      name: "Active Tickets",
      link: "/profile/active-tickets",
    },
    {
      name: "My Account",
      link: "/profile",
    },
    {
      name: "Winners",
      link: "/winners",
    },
  ];

  const quickService = [
    {
      name: "Contact Us",
      link: "/contact-us",
    },
    {
      name: "FAQs",
      link: "/FAQs",
    },
    {
      name: "How it Workds",
      link: "/how-it-works",
    },
  ];

  const socialLinks = [
    {
      icon: fb,
      name: "facebook",
      link: "",
    },
    {
      icon: insta,
      name: "Instagram",
      link: "",
    },
    {
      icon: li,
      name: "LinkedIn",
      link: "",
    },
    {
      icon: tw,
      name: "twitter",
      link: "",
    },
  ];

  const legacy = [
    {
      name: "Privacy Policy",
      link: "privacy-policy",
    },
    {
      name: "Terms of Use",
      link: "terms-of-use",
    },
    {
      name: "Sales and Refunds",
      link: "sales-and-refunds",
    },
    {
      name: "Legal",
      link: "legal",
    },
  ];
  return (
    <div className="flex flex-col lg:gap-[22px] sm:gap-1 py-6 lg:px-6 sm:px-4 mt-16">
      {/* 1ST PART */}
      <div className="relative flex justify-center items-center p-10 bg_sec rounded-[16px]">
        <div className="w-full grid lg:grid-cols-4 sm:grid-cols-1 justify-between items-start gap-8">
          <Image
            className="lg:h-[55px] lg:w-[141px] sm:h-[24px] sm:w-[61px] mb-2"
            src={logo}
            alt="Picture of the lgoo"
          />

          <div className="flex flex-col gap-6">
            <p className="prim_text_xl">Quick Links</p>
            <div className="flex lg:flex-row sm:flex-col gap-3">
              {quickLinks?.map((x, index) => {
                return (
                  <Link key={index} className="prim_text_md_reg" href={x?.link}>
                    {x?.name}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <p className="prim_text_xl">Customer service</p>
            <div className="flex lg:flex-row sm:flex-col gap-3">
              {quickService?.map((x, index) => {
                return (
                  <Link key={index} className="prim_text_md_reg" href={x?.link}>
                    {x?.name}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex gap-6">
              {socialLinks?.map((x, index) => {
                return (
                  <a
                    key={index}
                    href={x?.link}
                    target="_blank"
                    className="h-[42px] w-[42px] rounded-full bg-black flex justify-center items-center "
                  >
                    {x?.icon}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="p-2 bg_sec absolute  lg:w-11/12 sm:w-full  rounded-[6px] lg:bottom-[-10px] sm:bottom-0"></div>
      </div>

      {/* 2nd PART */}

      <div className="relative w-full flex justify-center items-center p-10 bg_sec rounded-[16px]">
        <div className="p-2 bg_sec absolute  lg:w-11/12 sm:w-full  rounded-[6px] lg:top-[-10px] sm:top-0"></div>
        <div className=" w-full flex lg:justify-center sm:justify-start items-center ">
          <div className="flex lg:flex-row sm:flex-col gap-3">
            {legacy?.map((x, index) => {
              return (
                <Link key={index} className="prim_text_md_reg" href={x?.link}>
                  {x?.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
