"use client";
import { login } from "@app/redux/actions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PasswordInput from "./PasswordInput";
const formDivCss =
  "mb-4 form-control bg-transparent border-4 px-6 py-2 rounded-[16px] w-full ";
const formInputCss =
  "p-1 focus:outline-none bg-transparent sec_text_xl text-white w-full";
const formInputWarningCss = "sec_text_sm text-red-500";
const formInputLabelCss = "prim_text_sm_reg text-white";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleLogin = (e) => {
    const user = {
      email,
      password,
    };
    dispatch(login(user));
    e.preventDefault();
  };

  const auth = useSelector((state) => state.auth);

  return (
    <div>
      <form onSubmit={handleLogin}>
        {/* <input
          type="text"
          placeholder="Email"
          className="input input-primary bg-transparent  border-[3px] border-[#1A1A1A] text-white rounded-2xl py-9 font-sora font-semibold w-full"
        />
        <input
          type="text"
          placeholder="Password"
          className="input input-primary bg-transparent  border-[3px] border-[#1A1A1A] text-white rounded-2xl py-9 font-sora font-semibold w-full"
        /> */}

        <div className={formDivCss}>
          <label className="label">
            <span className={formInputLabelCss}>Email</span>
          </label>
          <input
            type="email"
            placeholder="Your Email"
            name="email"
            className={formInputCss}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="label">
            <span className={formInputWarningCss}></span>
          </label>
        </div>

        <PasswordInput
          name={"password"}
          placeholder={"Your Password"}
          labelText={"Password"}
          errorText={""}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="font-sora flex justify-between items-center mt-4">
          <a href="" className="text-primary font-semibold">
            Forget Password?
          </a>
          <button
            type="submit"
            className="text-white rounded-2xl bg_prim py-6 w-4/12 "
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
