import React from "react";

const formDivCss =
  "form-control bg-info px-6 py-2 rounded-[16px] w-full max-width-className";
const formInputCss =
  "p-1 focus:outline-none bg-transparent sec_text_xl text-white w-full max-width-className";
const formInputWarningCss = "sec_text_sm text-red-500";
const formInputLabelCss = "prim_text_sm_reg text-white";

const persoalDetails = () => {
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
            />
            <label className="label">
              <span className={formInputWarningCss}></span>
            </label>
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
            />
            <label className="label">
              <span className={formInputWarningCss}></span>
            </label>
          </div>
          <div className={formDivCss}>
            <label className="label">
              <span className={formInputLabelCss}>Nationality</span>
            </label>
            <input
              type="text"
              placeholder="Your Nationality"
              className={formInputCss}
              name="nationality"
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
            />
            <label className="label">
              <span className={formInputWarningCss}></span>
            </label>
          </div>

          <input
            type="submit"
            name="update"
            value="Update"
            className="btn_gray"
          />
        </form>
      </div>
    </div>
  );
};

export default persoalDetails;
