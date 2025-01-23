import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import SectionTitle from "@/components/Common/SectionTitle";

export const metadata: Metadata = {
  title: "Contact Page | Play SaaS Starter Kit and Boilerplate for Next.js",
  description: "This is contact page description",
};

const ContactPage = () => {
  return (
    <>
      <div className="flex w-full flex-wrap items-end justify-between ">

        <div className="mx-1 mt-48 flex min-w-[320px] pl-4 md:mt-48 lg:mt-64">

          <SectionTitle
            paragraph=""
            subtitle=""
            title="WE ARE AE STUDIOS"
            width="640px"
          />
        </div>
        <p className="mb-4 ml-5 mr-8 max-w-[240px] font-mono text-base font-medium text-black dark:text-white sm:text-left sm:text-lg sm:leading-[1.44]">
          Crafting solid Web- and Software-Solutions designed to build engaging
          brands.
        </p>
      </div>

      <Contact />
    </>
  );
};

export default ContactPage;
