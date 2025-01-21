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
    <section className="max-w-screen w-screen overflow-x-hidden border border-y-[5px]  border-black bg-white dark:bg-black">
      <p className="mx-1 p-4 font-mono">.services</p>
      <h1 className="animate-slideLeftToRight w-full whitespace-nowrap text-6xl md:text-9xl lg:text-9xl">
        CRAFTING DIGITAL EXPERIENCE...!
      </h1>
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
