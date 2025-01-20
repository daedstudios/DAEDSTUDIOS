import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <section className="py-[3rem] dark:bg-primary lg:py-[8rem]">
      <h1 className="animate-slideLeftToRight whitespace-nowrap pb-16 text-9xl">
        CRAFTING DIGITAL EXPERIENCE.
      </h1>
      <div className="container overflow-hidden">
        <div className="-mx-4 mt-12 flex flex-wrap items-center lg:mt-4">
          {featuresData.map((feature, i) => (
            <SingleFeature key={i} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
