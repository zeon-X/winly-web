import Link from "next/link";
import React from "react";

const PrimaryLinks = () => {
  return (
    <>
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
    </>
  );
};

export default PrimaryLinks;
