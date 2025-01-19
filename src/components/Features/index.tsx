import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <section className="pb-20 pt-4 bg-primary lg:pb-[120px] lg:pt-[120px]">
      <div className="container">
        <SectionTitle
          title="CRAFTING DIGITAL EXPERIENCE."
          paragraph=""
        />

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
