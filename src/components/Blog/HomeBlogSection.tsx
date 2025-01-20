import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";

const HomeBlogSection = ({ posts }: any) => {
  return (
    <section className="border-b-[0.5px]  border-dark-5  bg-white dark:bg-black">
      <div className=" mx-auto">
        <div className="mt-4 border-b-[0.5px] border-dark-5">
          <SectionTitle
            subtitle=".work"
            classNameparagraph=""
            title="OUR PROJECTS"
            width="640px"
          />
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
