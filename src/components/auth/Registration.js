"use client";
import { signUp } from "@app/redux/actions";
import { useState } from "react";
import { useDispatch } from "react-redux";
import PasswordInput from "./PasswordInput";
const formDivCss =
  "mb-4 form-control bg-transparent border-4 px-6 py-2 rounded-[16px] w-full ";
const formInputCss =
  "p-1 focus:outline-none bg-transparent sec_text_xl text-white w-full";
const formInputWarningCss = "sec_text_sm text-red-500";
const formInputLabelCss = "prim_text_sm_reg text-white";

const Registration = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Male");
  const [country, setCountry] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleRegistration = (e) => {
    const data = {
      firstName,
      lastName,
      email,
      gender,
      country,
      dob,
      phone,
      password,
    };
    dispatch(signUp(data));
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleRegistration}>
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
            <span className={formInputLabelCss}>First Name</span>
          </label>
          <input
            type="text"
            placeholder="First Name"
            name="first_name"
            className={formInputCss}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label className="label">
            <span className={formInputWarningCss}></span>
          </label>
        </div>
        <div className={formDivCss}>
          <label className="label">
            <span className={formInputLabelCss}>Last Name</span>
          </label>
          <input
            type="text"
            placeholder="Last Name"
            name="last_name"
            className={formInputCss}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <label className="label">
            <span className={formInputWarningCss}></span>
          </label>
        </div>

        <div className={formDivCss}>
          <label className="label">
            <span className={formInputLabelCss}>Gender</span>
          </label>
          <select
            type="select"
            className={formInputCss}
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value={"Male"}>Male</option>
            <option value={"Female"}>Female</option>
            <option value={"Others"}>Others</option>
          </select>

          <label className="label">
            <span className={formInputWarningCss}></span>
          </label>
        </div>

        <div className={formDivCss}>
          <label className="label">
            <span className={formInputLabelCss}>Country</span>
          </label>
          <input
            type="text"
            placeholder="Country"
            className={formInputCss}
            name="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          <label className="label">
            <span className={formInputWarningCss}></span>
          </label>
        </div>

        <div className={formDivCss}>
          <label className="label">
            <span className={formInputLabelCss}>Birth of Date</span>
          </label>
          <input
            type="text"
            placeholder="DD/MM/YYYY"
            className={formInputCss}
            name="dob"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
          <label className="label">
            <span className={formInputWarningCss}></span>
          </label>
        </div>
        <div
          className={
            "border-4 px-6 py-2 rounded-[16px] w-full max-width-className flex gap-4 mb-4"
          }
        >
          <div className="w-1/4">
            <label className="label">
              <span className={formInputLabelCss}>Country code</span>
            </label>
            <input type="text" placeholder="+880" className={formInputCss} />
            <label className="label">
              <span className={formInputWarningCss}></span>
            </label>
          </div>

          <div className="w-3/4 border-l pl-3 h-full border-slate-200 ">
            <label className="label">
              <span className={formInputLabelCss}>Phone Number</span>
            </label>
            <input
              type="text"
              placeholder="********"
              className={formInputCss}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <label className="label">
              <span className={formInputWarningCss}></span>
            </label>
          </div>
        </div>

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
          <div></div>
          <button
            type="submit"
            className="text-white rounded-2xl bg_prim py-6 w-4/12 "
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default Registration;
