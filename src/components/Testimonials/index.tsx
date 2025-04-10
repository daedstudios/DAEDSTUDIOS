import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Sabo Masties",
    designation: "Creative Director @ rouge amsterdam",
    content:
      "We loved working with DAED studios, they were precise and easy to work with. What convinced us was their experience in our industry, which other agencies were lacking in early conversations. We especially loved how they had already an existing system for event ticket selling, that saved us a lot of money and time for our project. All in all great work, will definetly work with them again!",
    image: "/images/testimonials/author-01.png",
    star: 5,
  },
  {
    id: 2,
    name: "Margin Gesmu",
    designation: "Founder @ Planted",
    content:
      "Best experience with an agency so far. We initially tried developing our e-commerce site for Planted ourselves using no-code and shopify and ended up just dealing with really slow loading times. We are really grateful for how it turned out and excited to see when it goes live. Thanks!",
    image: "/images/testimonials/author-02.png",
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="max-w-screen w-screen overflow-x-hidden  bg-white dark:bg-black">
      {/* <p className="mx-1 p-4 font-mono">.services</p>
      <h1 className="animate-slideLeftToRight w-full whitespace-nowrap text-6xl md:text-9xl lg:text-9xl">
        CRAFTING DIGITAL EXPERIENCE...!
      </h1> */}
      <div className="flex w-full flex-wrap items-end justify-between border-y-[0.5px] border-dark-5">
        <div className="mx-1 mt-12 flex min-w-[320px] pl-4 lg:mt-36">
          <SectionTitle
            paragraph=""
            subtitle=".client"
            title="OPINIONS"
            width="640px"
          />
        </div>

        <p className="lg-1/3 mb-4 ml-5 mr-8 font-mono text-base font-medium text-black dark:text-white sm:text-left  sm:leading-[1.44] lg:max-w-[50%] lg:overflow-hidden">
          At DAED STUDIOS, our success is defined by the impact we create for
          our clients. From innovative SaaS solutions to seamless web
          experiences, every project reflects our commitment to excellence. But
          dont just take our word for it—heres what our clients have to say
          about working with us.
        </p>
      </div>
      <div className="flex w-screen -translate-x-1 flex-wrap border-t-[0.5px] border-dark-5 py-[3rem]">
        {testimonialData.map((testimonial, i) => {
          if (i === 1) {
            return (
              <SingleTestimonial
                key={i}
                testimonial={testimonial}
                border_x={true}
              />
            );
          } else {
            return (
              <SingleTestimonial
                key={i}
                testimonial={testimonial}
                border_x={false}
              />
            );
          }
        })}
      </div>
    </section>
  );
};

export default Testimonials;
