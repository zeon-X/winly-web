import Section1 from "@components/landing-page/Section1/Section1";
import Section2 from "@components/landing-page/Section2/Section2";

const Home = () => {
  return (
    <div className="lg:px-6 lg:py-4 md:py-0 sm:p-4  w-full max-w-[1920px] mx-auto">
      <div className="w-full rounded-[16px]">
        {/* SECTION 1 */}
        <Section1 />

        <div className="py-[51px]" />
        {/* SECTION 2 */}
        <Section2 />
      </div>
    </div>
  );
};

export default Home;
