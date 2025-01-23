import About from "@/components/About";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Team from "@/components/Team";
import { Metadata } from "next";
import SectionTitle from "@/components/Common/SectionTitle";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "About Us | Play SaaS Starter Kit and Boilerplate for Next.js",
  description: "This is About page description",
};

const AboutPage = () => {
  return (
    <main>
      <div className="flex w-full flex-wrap items-end justify-between border-y-[0.5px] border-dark-5">
        <div className="mx-1 mt-40 flex min-w-[320px] pl-4">
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
      {/* <Breadcrumb pageName="About Us Page" /> */}
      {/* <About /> */}
      <Team />
      <Contact />
    </main>
  );
};

export default AboutPage;
