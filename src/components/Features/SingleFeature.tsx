import { Feature } from "@/types/feature";
import Link from "next/link";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph, btn, btnLink } = feature;
  return (
    <div className="h-full w-full px-4 md:w-1/2 lg:w-1/3">
      <div className="wow fadeInUp group mb-12 mt-12" data-wow-delay=".15s">
        <div className="relative z-10 mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-black group-hover:rotate-90 dark:bg-primary">
          {/* <span className="absolute left-0 top-0 z-[-1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-2xl bg-black dark:bg-primary duration-300 group-hover:rotate-45"></span> */}
          <span className="duration-100 group-hover:rotate-180">{icon} </span>
        </div>
        <h3 className="mb-3 text-xl font-normal text-black dark:text-white">
          {title}
        </h3>
        <p className="mb-3 font-mono text-dark-4 dark:text-dark-6 lg:mb-12">
          {paragraph}
        </p>
        <Link
          href={btnLink}
          className="font-mono text-base font-medium text-dark hover:text-primary dark:text-white dark:hover:text-white"
        >
          {btn}
        </Link>
      </div>
    </div>
  );
};

export default SingleFeature;
