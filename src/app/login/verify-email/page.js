"use client";
import { requestCode, verifyCode } from "@app/redux/actions";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const formDivCss =
  "mb-4 form-control bg-transparent border-4 px-6 py-2 rounded-[16px] w-full ";
const formInputCss =
  "p-1 focus:outline-none bg-transparent sec_text_xl text-white w-full";
const formInputWarningCss = "sec_text_sm text-red-500";
const formInputLabelCss = "prim_text_sm_reg text-white";

const LoginRegister = () => {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);
  console.log(auth);

  const [vc, setVC] = useState("");

  const data = { email: auth.user.email };

  useEffect(() => {
    dispatch(requestCode(data));
  }, []);

  const handleVerification = () => {
    const data = {
      code: vc,
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
            placeholder="XX XX XX XX"
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
          onClick={() => handleVerification}
        >
          Verify Email
        </button>
      </div>
    </section>
  );
};

export default LoginRegister;
