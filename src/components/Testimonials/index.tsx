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
    <section className="max-w-screen overflow-x-hidden border-y-[0.5px] border-dark-5 bg-white dark:bg-black ">
      <p className="p-4 font-mono">.services</p>
      <h1 className="w-full whitespace-nowrap border-b-[0.5px] border-dark-5 pb-4 text-6xl md:text-9xl lg:text-9xl">
        CRAFTING DIGITAL EXPERIENCE.
      </h1>
      <div className="overflow-hidden">
        <div className="mb-[180px] mt-[60px] flex flex-wrap gap-y-8 lg:mt-[4rem]">
          {testimonialData.map((testimonial, i) => (
            <SingleTestimonial key={i} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
