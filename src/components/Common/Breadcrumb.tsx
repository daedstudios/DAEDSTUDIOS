import Link from "next/link";

const Breadcrumb = ({
  pageName,
  pageDescription,
}: {
  pageName: string;
  pageDescription?: string;
}) => {
  return (
    <>
      <div className="relative z-10 overflow-hidden pb-[60px] pt-[120px] dark:bg-black md:pt-[130px] lg:pt-[160px]">
        <div className="absolute bottom-0 left-0 h-px w-full border-b-[0.5px]  border-dark-5"></div>
        <div className="">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4">
              <div className="text-center">
                <h1 className="mb-4 text-3xl font-normal text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
                  {pageName}
                </h1>
                <p className="mb-5 text-base  text-body-color dark:text-dark-6">
                  {pageDescription}
                </p>

                <ul className="flex items-center justify-center gap-[10px]">
                  <li>
                    <Link
                      href="/"
                      className="flex items-center gap-[10px] font-mono text-dark dark:text-white"
                    >
                      home
                    </Link>
                  </li>
                  <li>
                    <p className="flex items-center gap-[10px] font-mono text-base font-normal  text-body-color">
                      <span className=" text-body-color dark:text-dark-6">
                        {" "}
                        /{" "}
                      </span>
                      projects
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Breadcrumb;
