"use client";

import { requestCode, verifyCode } from "@app/redux/actions";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useSearchParams, useRouter } from "next/navigation";

const formDivCss =
  "mb-4 form-control bg-transparent border-4 px-6 py-2 rounded-[16px] w-full font-sora";
const formInputCss =
  "p-1 focus:outline-none bg-transparent sec_text_xl text-white w-full";
const formInputWarningCss = "sec_text_sm text-red-500";
const formInputLabelCss = "prim_text_sm_reg text-white";

const VerifyEmail = () => {
  const [vc, setVC] = useState("");
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");

  useEffect(() => {
    const email = searchParams.get("email");
    dispatch(requestCode({ email: email }));
    setEmail(email);
  }, [searchParams]);

  const dispatch = useDispatch();

  const handleVerification = () => {
    const data = {
      code: parseInt(vc),
      email: email,
    };
    dispatch(verifyCode(data));
  };

  return (
    <section className="max-w-[1920px] mx-auto lg:px-6 sm:p-4">
      <div className="max-w-[760px] mx-auto bg_sec rounded-3xl shadow-xl py-10 lg:px-20 sm:px-6">
        <p className="mb-8 text-[24px] font-sora font-bold">
          Email Verification
        </p>
        <div className={formDivCss}>
          <label className="label">
            <span className={formInputLabelCss}>Verification Code</span>
          </label>
          <input
            type="text"
            placeholder="XXXX"
            name="vc"
            className={formInputCss}
            value={vc}
            onChange={(e) => setVC(e.target.value)}
          />
          <label className="label">
            <span className={formInputWarningCss}></span>
          </label>
        </div>

        <button
          type="submit"
          className="text-white bg-primary font-sora rounded-2xl  py-6 w-full "
          onClick={() => handleVerification()}
        >
          Verify Email
        </button>

        <div className="font-sora text-white font-medium flex justify-start items-center mt-8">
          <span>Didn't recieve verification code?</span>
          <a href="" className="text-primary">
            Resend Verification Code
          </a>
        </div>
      </div>
    </section>
  );
};

export default VerifyEmail;
