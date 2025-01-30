import { Services } from "@/types/services";
import Link from "next/link";

const SingleService = ({ service }: { service: Services }) => {
  const { title, paragraph, btn, btnLink } = service;
  return (
    <div className="h-full px-4">
      <div className="wow fadeInUp group mb-12 mt-12" data-wow-delay=".15s">
        <h3 className="mb-3  text-xl font-normal text-black dark:text-white">
          {title}
        </h3>
        <p className="mb-3 font-mono text-dark-4 dark:text-dark-6 lg:mb-12">
          {paragraph.map((item, index) => (
            <span key={index}>
              {item} <br />
            </span>
          ))}
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

export default SingleService;
