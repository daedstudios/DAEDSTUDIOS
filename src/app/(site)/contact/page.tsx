import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import SectionTitle from "@/components/Common/SectionTitle";

export const metadata: Metadata = {
  title: "Contact | DAED STUDIOS Contact Us",
  description: "Contact Us",
};

const ContactPage = () => {
  return (
    <>
      <div className="flex w-full flex-wrap items-end justify-between ">
        <div className="mx-1 mt-48 flex min-w-[320px] pl-4 md:mt-48 lg:mt-64">
          <SectionTitle
            paragraph=""
            subtitle=""
            title="WE ARE DAED STUDIOS"
            width="640px"
          />
        </div>
        <p className="mb-4 ml-5 mr-8 font-mono text-base font-medium text-black dark:text-white sm:text-left  sm:leading-[1.44] lg:max-w-[50%]">
          Crafting custom websolutions designed to build engaging brands.
        </p>
      </div>

      <div className=" w-full px-4">
        {" "}
        <img src="/images/team/EliasAkshat.png" alt="" />{" "}
      </div>

      <Contact />
    </>
  );
};

export default ContactPage;
