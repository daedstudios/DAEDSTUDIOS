import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";

const HomeBlogSection = ({ posts }: any) => {
  const featuredPosts = [
    posts.find((blog: any) => blog.slug === "rec"), // Your project
    posts.find((blog: any) => blog.slug === "rouge"),
    posts.find((blog: any) => blog.slug === "narastay"),
  ].filter(Boolean); // Remove any undefined values
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
          <p className="lg:m-w-[50%] mb-4 ml-5 mr-8 font-mono text-base font-medium text-black dark:text-white sm:text-left sm:leading-[1.44]">
            A selection of client work and projects
          </p>
        </div>
        <div className="mb-[3rem] mt-[3rem] flex flex-wrap">
          {/* {posts.slice(0, 3).map((blog: any, i: number) => (
            <div key={i} className="w-full px-4 md:w-1/2 lg:w-1/3">
              <SingleBlog blog={blog} />
            </div>
          ))} */}
          {featuredPosts.map((post) => (
            <div key={post.slug} className="w-full px-4 md:w-1/2 lg:w-1/3">
              <SingleBlog blog={post} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeBlogSection;
