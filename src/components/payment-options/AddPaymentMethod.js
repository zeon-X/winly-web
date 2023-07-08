"use client";
import React, { useState } from "react";
import { modalCloseBtn } from "../../../public/assets/Icons";
const formDivCss =
  "mb-4 form-control bg-transparent border border-[#444444] px-6 py-2 rounded-[16px] w-full font-sora ";
const formInputCss =
  "p-1 focus:outline-none bg-transparent sec_text_xl text-white w-full";
const formInputWarningCss = "sec_text_sm text-red-500";
const formInputLabelCss = "prim_text_sm_reg text-white ";

const AddPaymentMethod = () => {
  //min-h-[692px]
  return (
    <div className="modal">
      <div className="modal-box bg_modal max-w-[670px]  rounded-3xl">
        <div className="p-4 font-sora">
          <div className="flex justify-between items-center">
            <p className="text-[24px]">Add Payment Method</p>
            <div className="modal-action mt-0">
              <label
                htmlFor="add_payment_method"
                className="cursor-pointer rounded-full"
              >
                {modalCloseBtn}
              </label>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-1">
            <div className={formDivCss}>
              <label className="label">
                <span className={formInputLabelCss}>Card Number</span>
              </label>
              <input
                type="text"
                placeholder="---- ---- ---- ----"
                name="cn"
                className={formInputCss}
              />
              <label className="label">
                <span className={formInputWarningCss}></span>
              </label>
            </div>
            <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-6">
              <div className={formDivCss}>
                <label className="label">
                  <span className={formInputLabelCss}>Expiry Date</span>
                </label>
                <input
                  type="text"
                  placeholder="-- --"
                  name="ed"
                  className={formInputCss}
                />
                <label className="label">
                  <span className={formInputWarningCss}></span>
                </label>
              </div>
              <div className={formDivCss}>
                <label className="label">
                  <span className={formInputLabelCss}>Security Code</span>
                </label>
                <input
                  type="text"
                  placeholder="-- --"
                  name="cvv"
                  className={formInputCss}
                />
                <label className="label">
                  <span className={formInputWarningCss}></span>
                </label>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="text-white  bg-primary font-sora rounded-2xl  py-6 w-full "
            // onClick={() => handleVerification()}
          >
            Add Payment Method
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPaymentMethod;
