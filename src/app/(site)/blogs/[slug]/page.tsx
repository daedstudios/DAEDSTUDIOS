import Newsletter from "@/components/Blog/Newsletter";
import PopularArticle from "@/components/Blog/PopularArticle";
import SingleBlog from "@/components/Blog/SingleBlog";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { getAllPosts, getPostBySlug } from "@/utils/markdown";
import markdownToHtml from "@/utils/markdownToHtml";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props) {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);
  const post = getPostBySlug(params.slug, [
    "title",
    "author",
    "content",
    "metadata",
  ]);

  const siteName = process.env.SITE_NAME || "Your Site Name";
  const authorName = process.env.AUTHOR_NAME || "Your Author Name";

  if (post) {
    const metadata = {
      title: `${post.title || "Single Post Page"} | ${siteName}`,
      author: authorName,
      robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: false,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
    };

    return metadata;
  } else {
    return {
      title: "Not Found",
      description: "No blog article has been found",
      author: authorName,
      robots: {
        index: false,
        follow: false,
        nocache: false,
        googleBot: {
          index: false,
          follow: false,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
    };
  }
}

export default async function Post({ params }: Props) {
  const posts = getAllPosts([
    "title",
    "date",
    "excerpt",
    "coverImage",
    "slug",
    "",
  ]);
  const post = getPostBySlug(params.slug, [
    "title",
    "author",
    "authorImage",
    "content",
    "coverImage",
    "date",
    "authorImage",
    "deliverables",
    "industry",
    "client",
  ]);

  const content = await markdownToHtml(post.content || "");

  return (
    <>
      <div className="w-[100vw] overflow-x-hidden">
        <Breadcrumb pageName={post.author} />

        <section className="pb-10 pt-20 dark:bg-black lg:pb-20 lg:pt-[0px]">
          <div className="">
            <div className="-mx-4 flex flex-wrap justify-center">
              <div className="w-full px-4">
                <div
                  className="wow fadeInUp relative z-20 mb-10 h-[300px] overflow-hidden rounded md:h-[400px] lg:h-[500px]"
                  data-wow-delay=".1s"
                >
                  <Image
                    src={post.coverImage}
                    alt="image"
                    width={1288}
                    height={500}
                    className="h-full w-full object-cover object-center px-4"
                  />
                </div>

                <div className="mx-4 flex flex-wrap border-t-[0.5px] border-dark-5">
                  <div className="w-full lg:w-8/12">
                    <div className="flex w-full flex-wrap border-b-[0.5px] border-dark-5 px-1 py-4">
                      <div className="w-full pb-8 text-4xl font-normal">
                        CASE STUDY
                      </div>
                      <div className="w-[50%] lg:w-[32%]">
                        <p>CLIENT</p>
                        <p className="font-mono">{post.client}</p>
                      </div>
                      <div className="w-[50%] lg:w-[32%]">
                        <p>INDUSTRY</p>
                        <p className="font-mono">{post.industry}</p>
                      </div>
                      <div className="w-[100%] pt-8 lg:w-[32%] lg:pt-0">
                        <p>DELIVERABLES</p>
                        <ul className="font-mono">
                          {post.deliverables.map((i: string) => {
                            return <li key={i}>{i}</li>;
                          })}
                        </ul>
                      </div>
                    </div>
                    <div className="blog-details  px-1 py-3 font-mono">
                      <div dangerouslySetInnerHTML={{ __html: content }}></div>
                    </div>
                  </div>
                  <div className="w-full  border-dark-5 px-0 lg:w-4/12 lg:border-l-[0.5px]">
                    <div>
                      <div className="mb-8 ml-0 flex flex-wrap">
                        <div className=" w-full px-1">
                          <h2
                            className="wow fadeInUp relative pt-5 text-4xl font-normal text-dark dark:text-white"
                            data-wow-delay=".1s"
                          >
                            OTHER PROJECTS
                          </h2>
                          <span className="mb-10 inline-block h-[2px] w-20 bg-primary"></span>
                        </div>
                        {posts
                          .filter((blog) => blog.slug !== params.slug)
                          .slice(0, 3)
                          .map((blog, i) => (
                            <PopularArticle
                              key={i}
                              image={blog?.coverImage}
                              title={blog?.title}
                              name={blog?.author}
                              slug={blog?.slug}
                            />
                          ))}
                      </div>

                      {/* <Image
                      src={post.coverImage}
                      alt="image"
                      className="w-full translate-x-1 scale-[1.03] object-cover object-center"
                      width={408}
                      height={254}
                    /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mx-0 flex flex-wrap border-y-[0.5px] border-dark-5">
              <div
                className="wow fadeInUp mt-14 w-full px-0"
                data-wow-delay=".2s"
              >
                <h2 className="relative pb-3 pl-5 text-2xl font-normal text-dark dark:text-white sm:text-[28px]">
                  RELATED PROJETS
                </h2>
              </div>
              {posts
                .filter((blog) => blog.slug !== params.slug)
                .slice(0, 3)
                .map((blog: any, i: number) => (
                  <div key={i} className="w-full px-4 md:w-1/2 lg:w-1/3">
                    <SingleBlog blog={blog} />
                  </div>
                ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
