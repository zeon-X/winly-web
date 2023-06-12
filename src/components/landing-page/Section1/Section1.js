import FocusingPrizeWithProduct from "@components/landing-page/Section1/FocusingPrizeWithProduct";
import SellingFastProducts from "@components/landing-page/Section1/SellingFastProducts";
import WinnerPrizeDisplay from "@components/landing-page/Section1/WinnerPrizeDisplay";

const Section1 = () => {
  return (
    <section>
      <div
        // flex lg:flex-row sm:flex-col
        className="h-full grid lg:grid-cols-LS1 md:grid-cols-1 sm:grid-cols-1 justify-between items-start gap-4"
      >
        {/* BIG POSTER PRIZE + PRODUCT */}
        <div className="sm:w-full h-full">
          <FocusingPrizeWithProduct />
        </div>
        {/* BIG POSTER PRIZE + PRODUCT */}
        <div className=" sm:w-full flex flex-col gap-4 ">
          {/* WINNER PRIZE DISPLAY */}
          <div className="">
            <WinnerPrizeDisplay />
          </div>
          {/* PRODUCTS */}
          <div>
            <SellingFastProducts />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
