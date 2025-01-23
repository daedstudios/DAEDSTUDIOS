import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";

const HomeBlogSection = ({ posts }: any) => {
  return (
    <section className="border-b-[0.5px]  border-dark-5  bg-white dark:bg-black">
      <div className="mx-auto">
        {/* <div className=" mt-36 flex w-full items-start  justify-between">
          <div className="ml-4 border-y-[0.5px] border-dark-5">
            <SectionTitle
              paragraph=""
              subtitle=".work"
              title="OUR PROJECTS"
              width="640px"
            />
            <p className="mr-4 font-mono font-medium text-black dark:text-white">
              hhjhjhkhkhk
            </p>
          </div>
        </div> */}
        <div className="flex w-full flex-wrap items-end justify-between border-y-[0.5px] border-dark-5">
          <div className="mx-1 mt-12 flex min-w-[320px] pl-4 lg:mt-36">
            <SectionTitle
              paragraph=""
              subtitle=".work"
              title="PROJECTS"
              width="640px"
            />
          </div>
          <p className="mb-4 ml-5 mr-8 w-[345px] font-mono text-base font-medium text-black dark:text-white sm:text-left sm:text-lg sm:leading-[1.44]">
            Crafting solid Web- and Software-Solutions designed to build
            engaging brands.
          </p>
        </div>
        <div className="mb-[9rem] mt-[3rem] flex flex-wrap">
          {posts.slice(0, 3).map((blog: any, i: number) => (
            <div key={i} className="w-full px-4 md:w-1/2 lg:w-1/3">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeBlogSection;
