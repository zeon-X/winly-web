import FocusingPrizeWithProduct from "@components/landing-page/Section1/FocusingPrizeWithProduct";
import SellingFastProducts from "@components/landing-page/Section1/SellingFastProducts";
import WinnerPrizeDisplay from "@components/landing-page/Section1/WinnerPrizeDisplay";

const Home = () => {
  return (
    <div className="lg:p-6 sm:p-4  w-full max-w-[1920px] mx-auto">
      <div className="w-full rounded-[16px]">
        {/* SECTION 1 */}
        <section>
          <div className="flex lg:flex-row sm:flex-col justify-between items-start gap-4">
            {/* BIG POSTER PRIZE + PRODUCT */}
            <div className="lg:max-w-[1040px] sm:w-full">
              <FocusingPrizeWithProduct />
            </div>
            {/* BIG POSTER PRIZE + PRODUCT */}
            <div className="lg:max-w-[783px] sm:w-full flex flex-col gap-4">
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

        {/* SECTION 2 */}
      </div>
    </div>
  );
};

export default Home;
