"use client";
import React from "react";

import ProfileInputDiv from "@components/ProfileInputDiv";

const page = () => {
  return (
    <div>
      <div>
        <p className="prim_text_2xl mb-8">Settings</p>

        <form className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4">
          <ProfileInputDiv
            name={"current_password"}
            placeholder={""}
            value={"sxbas43"}
            labelText={"Current Password"}
            errorText={""}
          />
          <div></div>
          <ProfileInputDiv
            name={"new_password"}
            placeholder={"Set New Password"}
            labelText={"New Password"}
            errorText={""}
          />
          <div></div>
          <ProfileInputDiv
            name={"confirm_password"}
            placeholder={"Set Confirm Password"}
            labelText={"Confirm Password"}
            errorText={""}
          />
          <div></div>

          <input
            type="submit"
            name="update"
            value="Update"
            className="btn_gray w-full"
          />
        </form>
      </div>
    </div>
  );
};

export default page;
