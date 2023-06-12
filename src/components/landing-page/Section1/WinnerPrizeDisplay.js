"use client";

import { useState } from "react";
import { LWinnerPrize1 } from "../../../../public/assets/images";
import Image from "next/image";

const WinnerPrizeDisplay = () => {
  const [data, setData] = useState({
    image: LWinnerPrize1,
  });
  return (
    <div>
      <Image
        src={data?.image}
        height={440}
        width={783}
        alt="total prize winners"
        className="rounded-[24px] opacity-0 transition-opacity duration-1000"
        onLoadingComplete={(img) => img.classList.remove("opacity-0")}
      />
    </div>
  );
};

export default WinnerPrizeDisplay;
