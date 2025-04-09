import { Link } from "next-transition-router";
import MyFancyButton from "../MyFancyButton/MyFancyButton";
import MyFancyForm from "./form";

const Contact = () => {
  return (
    <section id="contact" className=" relative border-y-[0.5px] border-dark-5 ">
      <div className="flex flex-row justify-between border-b-[0.5px] border-dark-5 text-[2rem]">
        <a
          href="https://www.instagram.com/daedstudios"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-5 font-mono"
        >
          instagram
        </a>
        <a
          href="https://www.linkedin.com/in/daedstudios"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono"
        >
          linkedIn
        </a>
        <a
          href="https://github.com/daedstudios"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-5 font-mono"
        >
          github
        </a>
      </div>
      <div className="flex flex-row flex-wrap items-end justify-between gap-[4rem] py-[4rem]">
        <h2 className="ml-4 text-[9rem]  font-normal leading-[1.0] text-black dark:text-white md:text-[12rem] lg:text-[20rem]">
          FOOTER
        </h2>
        <div className="my-5 flex flex-col gap-0 text-[2rem] text-black dark:text-white">
          <p className="mx-5 font-mono">daed studios</p>
          <p className="mx-5 font-mono">Kirchenplatz 1, 94032 Germany</p>
          <p className="mx-5 font-mono">Verantwortlich gemäß §5 TMG:</p>
          <p className="mx-5 font-mono">Elias Heininger</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
