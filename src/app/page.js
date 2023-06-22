import Section1 from "@components/landing-page/Section1/Section1";
import Section2 from "@components/landing-page/Section2/Section2";
import Section3 from "@components/landing-page/Section3/Section3";
import Section4 from "@components/landing-page/Section4/Section4";

const Home = () => {
  //className="max-w-[1920px] mx-auto"
  return (
    <div className=" lg:py-4 md:py-0   w-full ">
      <div className="w-full rounded-[16px] ">
        {/* SECTION 1 */}
        <Section1 />

        <div className="lg:py-[51px] sm:py-[30px]" />
        {/* SECTION 2 */}
        <Section2 />

        <div className="lg:py-[51px] sm:py-[30px]" />
        <Section3 />

        <div className="lg:py-[51px] sm:py-[30px]" />
        <Section4 />
      </div>
    </div>
  );
};

export default Home;
