import React from "react";

const page = () => {
  return (
    <div>
      <div>
        <p className="prim_text_2xl mb-8">Notification preferences</p>
        <div className="lg:w-[520px] sm:w-auto rounded-xl bg_sec">
          <div className="p-6">
            <p className="prim_text_xl">Promotional Emails</p>
            <p className="prim_text_md_reg ">
              Includes campaign, launch, offers and newsletter
            </p>
          </div>
          {/* BORDER */}
          <div className="border-b border-b-neutral w-full" />

          <div className="p-6 flex flex-col gap-6">
            <div className="flex justify-between items-center">
              <p className="prim_text_lg_reg">Email</p>
              <input type="checkbox" className="toggle toggle-green" />
            </div>
            <div className="flex justify-between items-center">
              <p className="prim_text_lg_reg">SMS</p>
              <input type="checkbox" className="toggle toggle-green" />
            </div>
            <div className="flex justify-between items-center">
              <p className="prim_text_lg_reg">Whatsapp</p>
              <input type="checkbox" className="toggle toggle-green" />
            </div>
            <div className="flex justify-between items-center">
              <p className="prim_text_lg_reg">Push Notifications</p>
              <input type="checkbox" className="toggle toggle-green" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
