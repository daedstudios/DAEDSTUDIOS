import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <section className="max-w-screen overflow-x-clip border-b-[0.5px] border-dark-5 dark:bg-primary">
      <p className="z-100 mx-1 p-4 font-mono">.services</p>
      <h1 className="w-full animate-slideRightToLeft  whitespace-nowrap text-6xl md:text-9xl lg:text-9xl">
        CRAFTING DIGITAL EXPERIENCE.
      </h1>
      <div className="mx-1 mb-[6rem] flex flex-wrap items-start border-t-[0.5px]  border-dark-5 pt-[3rem]">
        {featuresData.map((feature, i) => (
          <SingleFeature key={i} feature={feature} />
        ))}
      </div>
    </section>
  );
};

export default Features;
