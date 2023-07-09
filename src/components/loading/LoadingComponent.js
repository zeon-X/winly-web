import React from "react";
import { loadingAnimation } from "../../../public/assets/images";
import Image from "next/image";

const LoadingComponent = () => {
  // Ripple
  return (
    <div className="flex flex-col gap-4 justify-center items-center py-8 max-w-[400px]  rounded-2xl shadow-xl">
      <Image src={loadingAnimation} alt="Winly logo" height={43} width={110} />
      <div className="">
        <div class="lds-ripple">
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
  // Ellipisis
  return (
    <div className="flex flex-col gap-4 justify-center items-center py-8 max-w-[400px]  rounded-2xl shadow-xl">
      <Image src={loadingAnimation} alt="Winly logo" height={43} width={110} />
      <div className="">
        <div class="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
  //facebook
  return (
    <div className="flex flex-col gap-4 justify-center items-center py-8 max-w-[400px]  rounded-2xl shadow-xl">
      <Image src={loadingAnimation} alt="Winly logo" height={43} width={110} />
      <div className="">
        <div class="lds-facebook">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingComponent;
