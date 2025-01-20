import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <section className="max-w-screen overflow-x-clip dark:bg-primary">
      <p className="p-4 font-mono">.services</p>
      <h1 className="w-full animate-slideRightToLeft whitespace-nowrap border-b-[0.5px] border-dark-5 pb-4 text-6xl md:text-9xl lg:text-9xl">
        CRAFTING DIGITAL EXPERIENCE.
      </h1>
      <div className="  overflow-hidde">
        <div className="mx-4 mb-[9rem] mt-[3rem] flex flex-wrap items-center">
          {featuresData.map((feature, i) => (
            <SingleFeature key={i} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
