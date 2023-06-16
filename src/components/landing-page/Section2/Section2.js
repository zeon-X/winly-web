import React from "react";
import ItemDisplay from "./ItemDisplay";

const Section2 = () => {
  return (
    <section>
      <div className="max-w-[1407px] mx-auto">
        {/* HEADING */}

        <div className="grid lg:grid-cols-2 sm:grid-cols-1 justify-between items-center lg:gap-20 sm:gap-4">
          <p className="lg:text-[48px] sm:text-[16px] font-bold">
            Explore campaigns
          </p>
          <p className="lg:text-[18px] sm:text-[12px]">
            Explore this exclusive campaigns that will make your dream true by
            shopping with us. Happy Shopping
          </p>
        </div>
        <div className="w-full border border-b-[#E3E1E5] lg:my-[64px] sm:my-8 " />

        <div className="max-w-[1400px] mx-auto">
          <ItemDisplay />
        </div>
      </div>
    </section>
  );
};

export default Section2;
