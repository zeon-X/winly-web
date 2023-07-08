"use client";
import React, { useEffect, useState } from "react";

const formDivCss =
  "form-control bg-info px-6 py-2 rounded-[16px] w-full max-width-className";
const formInputCss =
  "p-1 focus:outline-none bg-transparent sec_text_xl text-white w-full max-width-className";
const formInputWarningCss = "sec_text_sm text-red-500";
const formInputLabelCss = "prim_text_sm_reg text-white";

const PersoalDetails = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  console.log(user);

  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);
  const [email, setEmail] = useState(user?.email);
  const [gender, setGender] = useState(user?.gender);
  const [country, setCountry] = useState(user?.country);
  const [dob, setDob] = useState(user?.dob);
  const [phone, setPhone] = useState(user?.phone);

  const [disableUpdateBtn, setDisableUpdateBtn] = useState(true);

  useEffect(() => {
    if (
      user?.firstName != firstName ||
      user?.lastName != lastName ||
      user?.phone != phone
    )
      setDisableUpdateBtn((state) => {
        !state;
      });
  }, [firstName, lastName, phone]);

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
              disabled
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
              <input type="text" placeholder="+880" className={formInputCss} />
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
            <input
              type="text"
              placeholder="Select Gender"
              className={formInputCss}
              name="gender"
              value={gender}
              disabled
            />
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
              placeholder="Your Country"
              className={formInputCss}
              name="country"
              value={country}
              disabled
            />
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
          />
        </form>
      </div>
    </div>
  );
};

export default PersoalDetails;
