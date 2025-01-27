import { Blog } from "@/types/blog";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, coverImage, excerpt, date, slug } = blog;

  return (
    <div className="wow fadeInUp group mb-10" data-wow-delay=".1s">
      <div className="mb-8 overflow-hidden">
        <Link href={`/blogs/${slug}`} aria-label="blog cover" className="block">
          <Image
            src={coverImage!}
            alt="image"
            className="w-full transition group-hover:scale-125"
            width={408}
            height={272}
          />
        </Link>
      </div>
      <div>
        {/* <span className="mb-5 inline-block rounded bg-primary px-4 py-1 text-center text-xs font-normal leading-loose text-white">
          {format(new Date(date), "dd MMM yyyy")}
        </span> */}
        <h3>
          {/* <Link
            href={`/blogs/${slug}`}
            className="mb-4 inline-block text-xl font-normal text-dark hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
          >
            {title}
          </Link> */}
        </h3>
        <p className="mx-1 font-mono text-base font-medium text-dark-4 dark:text-dark-6">
          {excerpt}
        </p>
      </div>
    </div>
  );
};

export default SingleBlog;
