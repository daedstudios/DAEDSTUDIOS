import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Sabo Masties",
    designation: "Founder @ Rolex",
    content:
      "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
    image: "/images/testimonials/author-01.png",
    star: 5,
  },
  {
    id: 2,
    name: "Margin Gesmu",
    designation: "Founder @ UI Hunter",
    content:
      "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
    image: "/images/testimonials/author-02.png",
    star: 5,
  },
  {
    id: 3,
    name: "William Smith",
    designation: "Founder @ Trorex",
    content:
      "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
    image: "/images/testimonials/author-03.png",
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

        <p className="lg-1/3 mb-4 ml-5 mr-8 font-mono text-base font-medium text-black dark:text-white sm:text-left sm:text-lg sm:leading-[1.44] lg:max-w-[50%] lg:overflow-hidden">

          At AE STUDIOS, our success is defined by the impact we create for our
          clients. From innovative SaaS solutions to seamless web experiences,
          every project reflects our commitment to excellence. But dont just
          take our word for it—heres what our clients have to say about working
          with us.
        </p>
      </div>
      <div className="flex w-screen -translate-x-1 flex-wrap border-t-[0.5px] border-dark-5">
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
