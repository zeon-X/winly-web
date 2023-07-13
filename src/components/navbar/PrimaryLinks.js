import Link from "next/link";
import React from "react";

const PrimaryLinks = () => {
  return (
    <>
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"/contact"}>Neel Help? Contact us</Link>
      </li>
    </>
  );
};

export default PrimaryLinks;
