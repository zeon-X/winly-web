"use client";
import LoginRegister from "@app/login/page";
import React from "react";
import { useSelector } from "react-redux";

const layout = ({ children }) => {
  const auth = useSelector((state) => state.auth);

  console.log(auth);

  if (!auth.authenticate) {
    return <LoginRegister />;
  } else {
    return (
      <section className="max-w-[1920px] w-full mx-auto p-6">
        {children}
      </section>
    );
  }
};

export default layout;
