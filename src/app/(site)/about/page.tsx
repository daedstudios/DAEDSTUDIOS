import About from "@/components/About";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Team from "@/components/Team";
import { Metadata } from "next";
import SectionTitle from "@/components/Common/SectionTitle";
import Contact from "@/components/Contact";
import Services from "@/components/Services";

export const metadata: Metadata = {
  title: "about",
  description: "This is About page description",
};

const AboutPage = () => {
  return (
    <main>
      <div className="flex w-full flex-wrap items-end justify-between">
        <div className="mx-1 mt-48 flex min-w-[320px] pl-4 md:mt-48 lg:mt-64">
          <SectionTitle
            paragraph=""
            subtitle=""
            title="WE ARE DAED STUDIOS"
            width="640px"
          />
        </div>
        <p className="mb-4 ml-5 mr-8 mt-4 font-mono text-base font-medium text-black dark:text-white sm:text-left  sm:leading-[1.44] lg:max-w-[50%]">
          At DAED STUDIOS, we turn complexity into simplicity through purposeful
          design and technology. Every project is a reflection of our client’s
          unique vision, executed to leave a lasting impact. Our ethos:
          Simplify. Create. Elevate.
        </p>
      </div>
      {/* <Breadcrumb pageName="About Us Page" /> */}
      {/* <About /> */}
      <Team />
      <Services />
      <Contact />
    </main>
  );
};

export default AboutPage;
