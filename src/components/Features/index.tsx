import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <section className="pb-20 pt-4 dark:bg-primary lg:pb-[120px] lg:pt-[120px]">
      <div className="container overflow-hidden">
        <h1 className="text-9xl animate-slideLeftToRight whitespace-nowrap pb-16">
          CRAFTING DIGITAL EXPERIENCE.
        </h1>
        {/* <h1 className="text-9xl animate-slideRightToLeft whitespace-nowrap">
          CRAFTING DIGITAL EXPERIENCE.
        </h1> */}
        {/* <SectionTitle
          title="CRAFTING DIGITAL EXPERIENCE."
          paragraph=""
        /> */}

        <div className="-mx-4 mt-12 flex flex-wrap lg:mt-4 items-center">
          {featuresData.map((feature, i) => (
            <SingleFeature key={i} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
