"use client";
import Login from "@components/auth/Login";
import Registration from "@components/auth/Registration";
import React, { useState } from "react";

const LoginRegister = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <section className="max-w-[1920px] mx-auto lg:px-6 sm:p-4">
      <div className="max-w-[760px] mx-auto bg_sec rounded-3xl shadow-xl py-10 lg:px-20 sm:px-6">
        <div className="flex rounded-3xl bg_prim w-full mb-6 font-sora">
          <button
            onClick={() => {
              setIsLogin(true);
            }}
            className={
              isLogin
                ? "text-white bg_sec rounded-3xl box-shadow py-8 w-1/2"
                : "text-white  rounded-3xl py-8 w-1/2"
            }
          >
            Login
          </button>

          <button
            onClick={() => {
              setIsLogin(false);
            }}
            className={
              !isLogin
                ? "text-white bg_sec rounded-3xl box-shadow py-8 w-1/2"
                : "text-white  rounded-3xl py-8 w-1/2"
            }
          >
            Register
          </button>
        </div>

        {isLogin ? <Login /> : <Registration />}
      </div>
    </section>
  );
};

export default LoginRegister;
