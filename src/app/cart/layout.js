"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const layout = ({ children }) => {
  const auth = useSelector((state) => state.auth);

  const router = useRouter();

  // useEffect(() => {
  //   console.log("auth");
  //   console.log(auth);
  //   if (!auth.authenticate) {
  //     router.push("/login");
  //     console.log("redirect");
  //   }
  // }, [auth]);

  if (!auth.authenticate) {
    router.push("/login");
    console.log("redirect");
  }
  return (
    <section className="max-w-[1920px] w-full mx-auto p-6">{children}</section>
  );
};

export default layout;
