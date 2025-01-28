import SingleBlog from "@/components/Blog/SingleBlog";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { getAllPosts } from "@/utils/markdown";
import { Metadata } from "next";
import SectionTitle from "@/components/Common/SectionTitle";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Blog Grids | Play SaaS Starter Kit and Boilerplate for Next.js",
  description: "Blog grids page description",
};

const Blog = () => {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

  return (
    <>
      <div className="flex w-full flex-wrap items-end justify-between">
        <div className="mx-1 mt-48 flex min-w-[320px] pl-4 md:mt-48 lg:mt-64">
          <SectionTitle
            paragraph=""
            subtitle=""
            title="WE ARE DAED STUDIOS"
            width="640px"
          />
        </div>
        <p className="mb-4 ml-5 mr-8 font-mono text-base font-medium text-black dark:text-white sm:text-left  sm:leading-[1.44] lg:lg:max-w-[50%]">
          DAED STUDIOS exists to transform ambitious ideas into reality. By
          prioritizing strategic thinking and modern design, we build impactful
          tools that connect brands with their audiences. Every line of code and
          every pixel serves a purpose.
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
