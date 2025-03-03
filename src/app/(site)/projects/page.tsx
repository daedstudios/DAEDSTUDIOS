import SingleBlog from "@/components/Blog/SingleBlog";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { getAllPosts } from "@/utils/markdown";
import { Metadata } from "next";
import SectionTitle from "@/components/Common/SectionTitle";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Projects | DAED STUDIOS Selection of Works",
  description: "Projects",
};

const Blog = () => {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

  return (
    <>
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
          A selection of our client work and projects.
        </p>
      </div>
      {/* <Breadcrumb pageName="Blog Grids" /> */}

      <section className="pb-10 pt-20 lg:pb-20 lg:pt-[120px]">
        <div className="">
          <div className=" justify-left flex flex-wrap">
            {posts.map((blog, i) => (
              <div key={i} className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3">
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Contact />
    </>
  );
};

export default Blog;
