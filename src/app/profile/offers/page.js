"use client";
import React, { useState } from "react";

const page = () => {
  const [offers, setOffers] = useState([]);

  return (
    <div>
      <div>
        <p className="prim_text_2xl mb-8">Offers</p>
        {offers.length === 0 && (
          <div className="max-w-[640px] min-h-[183px] p-6 bg-white rounded-xl flex flex-col justify-center items-center">
            <p className="prim_text_lg_reg mb-3">
              Start Shopping to avail offers
            </p>
            <button className="btn_primary w-full lg:min-w-[300px]">
              Start Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
