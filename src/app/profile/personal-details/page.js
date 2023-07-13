"use client";
import { updateProfile } from "@app/redux/actions";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import ReactModal from "react-modal";
import PasswordInput from "@components/auth/PasswordInput";

const formDivCss =
  "form-control bg-info px-6 py-2 rounded-[16px] w-full max-width-className";
const formInputCss =
  "p-1 focus:outline-none bg-transparent sec_text_xl text-white w-full max-width-className";
const formInputWarningCss = "sec_text_sm text-red-500";
const formInputLabelCss = "prim_text_sm_reg text-white";

const countryData = require("../../../../public/CountryCodes.json");

const PersoalDetails = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);
  const [email, setEmail] = useState(user?.email);
  const [gender, setGender] = useState(user?.gender);
  const [country, setCountry] = useState(user?.country);
  const [dob, setDob] = useState(user?.dob);
  const [phone, setPhone] = useState(user?.phone);
  const [dialCode, setDialCode] = useState(user?.dialCode);
  const [password, setPassword] = useState("faysal124");
  const [show, setShow] = useState(false);

  const [disableUpdateBtn, setDisableUpdateBtn] = useState(true);

  const handleProfileUpdate = (e) => {
    const data = {
      firstName,
      lastName,
      gender,
      country,
      dob,
      phone,
      dialCode,
      password,
    };
    dispatch(updateProfile(data));
    e.preventDefault();
    setShow(false);
  };

  useEffect(() => {
    if (
      user?.firstName !== firstName ||
      user?.lastName !== lastName ||
      user?.phone !== phone ||
      user?.gender !== gender ||
      user?.country !== country ||
      user?.dob !== dob ||
      user?.dialCode !== dialCode
    )
      setDisableUpdateBtn((state) => {
        !state;
      });
  }, [firstName, lastName, gender, country, dob, phone, dialCode]);

  if (auth.loading === true) {
    Swal.showLoading();
  }

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.6)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#000",
      padding: 50,
      borderRadius: 20,
    },
  };

  return (
    <div>
      <div>
        <p className="prim_text_2xl mb-8">Personal Details</p>

        <form className=" grid lg:grid-cols-2 sm:grid-cols-1 gap-6 ">
          <div className={formDivCss}>
            <label className="label">
              <span className={formInputLabelCss}>First Name</span>
            </label>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
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
              name="lastName"
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
              "bg-info px-6 py-2 rounded-[16px] w-full max-width-className flex gap-4"
            }
          >
            <div className="w-1/4">
              <label className="label">
                <span className={formInputLabelCss}>Country code</span>
              </label>
              <select
                type="select"
                className={formInputCss}
                value={dialCode}
                onChange={(e) => setDialCode(e.target.value)}
              >
                {countryData.map((country) => (
                  <option value={country.dial_code}>{country.dial_code}</option>
                ))}
              </select>
              <label className="label">
                <span className={formInputWarningCss}></span>
              </label>
            </div>

            <div className="w-3/4 border-l pl-3 h-full border-slate-200">
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
            <select
              type="select"
              className={formInputCss}
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              {countryData.map((country) => (
                <option value={country.name}>{country.name}</option>
              ))}
            </select>
            <label className="label">
              <span className={formInputWarningCss}></span>
            </label>
          </div>

          <input
            type="submit"
            name="update"
            value="Update"
            className="btn_gray btn "
            disabled={disableUpdateBtn}
            onClick={(e) => {
              setShow(true), e.preventDefault();
            }}
          />
        </form>
      </div>
      <ReactModal
        isOpen={show}
        style={customStyles}
        onRequestClose={() => setShow(false)}
      >
        <form>
          <PasswordInput
            name={"password"}
            placeholder={"Your Password"}
            labelText={"Password"}
            errorText={""}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="font-sora flex justify-between items-center mt-4">
            <button
              type="submit"
              className="mt-4 normal-case btn flex justify-center items-center bg-primary w-full  rounded-xl text-[14px] font-semibold font-sora text-white"
              onClick={handleProfileUpdate}
            >
              Confirm Update
            </button>
          </div>
        </form>
      </ReactModal>
    </div>
  );
};

export default PersoalDetails;
