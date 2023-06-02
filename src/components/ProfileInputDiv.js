"use client";
import React, { useState } from "react";
import { eyeSvg } from "../../public/assets/Icons";

const formDivCss =
  "form-control bg-[#EEEEEE] px-6 py-2 rounded-2xl w-full max-width-className ";
const formInputCss =
  "p-1 focus:outline-none bg-transparent sec_text_xl w-full max-width-className";
const formInputWarningCss = "sec_text_sm text-red-500";
const formInputLabelCss = "text-[12px] text-[#2E2C34] font-[Sora]";
const ProfileInputDiv = ({
  name,
  placeholder,
  value,
  labelText,
  errorText,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={formDivCss}>
      <label className="label relative">
        <span className={formInputLabelCss}>{labelText}</span>
        <span
          onClick={() => {
            setIsOpen((current) => !current);
          }}
          className="cursor-pointer absolute  right-0 top-10"
        >
          {eyeSvg}
        </span>
      </label>
      <input
        type={isOpen ? "text" : "password"}
        placeholder={placeholder}
        name={name}
        value={value}
        className={formInputCss}
      />
      <label className="label">
        <span className={formInputWarningCss}>{errorText}</span>
      </label>
    </div>
  );
};
export default ProfileInputDiv;
