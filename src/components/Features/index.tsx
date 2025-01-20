import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <section className="pb-[3rem] dark:bg-primary lg:pb-[3rem] max-w-screen overflow-x-clip">
      <h1 className="animate-slideLeftToRight text-6xl whitespace-nowrap md:text-9xl lg:text-9xl w-full">
        CRAFTING DIGITAL EXPERIENCE.
      </h1>
      <div className="container overflow-hidden">
        <div className="-mx-4 mt-16 flex flex-wrap items-center lg:mt-4">
          {featuresData.map((feature, i) => (
            <SingleFeature key={i} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
