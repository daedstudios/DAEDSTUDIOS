import { Testimonial } from "@/types/testimonial";
import Image from "next/image";
const starIcon = (
  <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
    <path d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z" />
  </svg>
);

const SingleTestimonial = ({
  testimonial,
  border_x,
}: {
  testimonial: Testimonial;
  border_x: Boolean;
}) => {
  const { star, name, image, content, designation } = testimonial;

  let ratingIcons = [];
  for (let index = 0; index < star; index++) {
    ratingIcons.push(
      <span key={index} className="text-white">
        {starIcon}
      </span>,
    );
  }

  return (
    <div
      className={`h-full w-full px-1 pb-[3rem] pt-[3rem] md:w-1/2 lg:w-1/3 
    `}
    >
      <div
        className="rounded-xl bg-white py-[3rem] pl-5 pr-8 dark:bg-black"
        data-wow-delay=".1s"
      >
        <div className="mb-[18px] flex items-center gap-[2px]">
          {ratingIcons}
        </div>

        <p className="mb-6 ml-0 font-mono text-base text-dark-4 dark:text-dark-6">
          {content}
        </p>

        {/* <div className="h-[50px] w-[50px] overflow-hidden rounded-full">
            <Image src={image} alt={name} width={50} height={50} />
          </div> */}

        <div>
          <h3 className="font-mono text-sm font-normal text-dark dark:text-white">
            {name}
          </h3>
          <p className="text-body-secondary font-mono text-xs">{designation}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;
