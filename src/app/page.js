import FocusingPrizeWithProduct from "@components/landing-page/Section1/FocusingPrizeWithProduct";
import WinnerPrizeDisplay from "@components/landing-page/Section1/WinnerPrizeDisplay";

const Home = () => {
  return (
    <div className="p-6 w-full max-w-[1920px] mx-auto">
      <div className="w-full rounded-[16px]">
        {/* 1st Section */}
        <section>
          <div className="flex lg:flex-row sm:flex-col justify-between items-start gap-6">
            {/* BIG POSTER PRIZE + PRODUCT */}
            <div className="lg:max-w-[1040px] sm:w-full">
              <FocusingPrizeWithProduct />
            </div>
            {/* BIG POSTER PRIZE + PRODUCT */}
            <div className="lg:max-w-[783px] sm:w-full flex flex-col gap-6">
              {/* WINNER PRIZE DISPLAY */}
              <div>
                <WinnerPrizeDisplay />
              </div>
              {/* PRODUCTS */}
              <div></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
