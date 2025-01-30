import servicesData from "./servicesData";
import SingleService from "./SingleService";
import SectionTitle from "../Common/SectionTitle";

const Services = () => {
  return (
    <section className="max-w-screen overflow-x-clip border-b-[0.5px] border-dark-5 dark:bg-primary">
      <div className="flex w-full flex-wrap items-end  border-y-[0.5px] border-dark-5">
        <div className="mx-1 mt-24 flex min-w-[320px] pl-4 ">
          <SectionTitle
            paragraph=""
            subtitle=".offers"
            title="SERVICES"
            width="640px"
          />
        </div>
      </div>

      <div className="mx-1 mb-[3rem] mr-4 flex flex-wrap items-center justify-between gap-4 border-t-[0.5px]  border-dark-5 pt-[3rem]">
        {servicesData.slice(0, 4).map((services, i) => (
          <SingleService key={i} service={services} />
        ))}
      </div>
    </section>
  );
};

export default Services;
