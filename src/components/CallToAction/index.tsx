import Link from "next/link";
import Image from "next/image";

const CallToAction = () => {
  return (
    <section className="relative z-10 overflow-hidden  px-5 py-20 lg:py-[115px]">
      <div className=" w-[70%] text-4xl md:text-5xl lg:max-w-[50%] lg:text-7xl">
        {" "}
        THE OVERLAP OF DESIGN AND SOFTWARE
      </div>
      <div className="flex flex-row flex-wrap items-center justify-between gap-4 py-20">
        <div className="w-full lg:w-[50%]">
          <Image
            src="/images/blog/carrousell.png"
            alt="carrousell"
            width={800}
            height={100}
          />
        </div>
        <div className="flex w-full  max-w-[36rem] flex-col gap-4  ">
          <p className=" items-center justify-center font-mono lg:text-2xl">
            our projects range from data visualisation applications for
            companies in the energy space to web-solutions for brands and small
            companies
          </p>
          <button className="flex w-[10rem] flex-row items-center justify-between rounded-[8rem] bg-primary px-4 py-2 font-mono text-white hover:bg-zinc-400 dark:bg-white dark:text-primary lg:text-2xl">
            {" "}
            let's talk
            <Image
              className="text-black"
              src="/images/arrow_outward.svg"
              alt="arrow"
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
