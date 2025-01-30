import Image from "next/image";
import Link from "next/link";
import MyFancyButton from "../MyFancyButton/MyFancyButton";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative overflow-hidden pt-[120px] dark:bg-primary md:pt-[130px] lg:pt-[160px]"
      >
        <div className="items-left flex flex-wrap  ">
          <div className="w-full">
            <div className="row-auto flex flex-wrap items-end justify-between border-b-[0.5px] border-dark-5   pl-4">
              <h1 className=" mx-1 min-w-[1000px] max-w-[650px] text-8xl leading-snug dark:text-white sm:leading-snug lg:text-9xl lg:leading-[1.2]">
                WE ARE
              </h1>
              <h1 className=" mx-1 max-w-[700px] text-8xl leading-snug text-hover sm:leading-snug lg:text-9xl lg:leading-[1.2]">
                DAED STUDIOS
              </h1>
              <p className=" mb-3 ml-5 mr-8 hidden w-[345px] items-start font-mono text-base font-medium text-black dark:text-white sm:text-left lg:flex">
                the place where creativity meets cutting edge tech.
              </p>
            </div>

            <ul className="items-left justify-left flex h-[4rem] flex-wrap px-4">
              <li className="w-80">
                <Link href={"/contact"}>
                  <MyFancyButton
                    mainContent="contact us"
                    slideUpContent="contact us"
                    className="border-r-[0.5px] border-dark-5"
                  >
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="mask0_64_89"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="25"
                        height="25"
                      >
                        <rect
                          x="0.5"
                          y="0.5"
                          width="24"
                          height="24"
                          fill="#D9D9D9"
                        />
                      </mask>
                      <g mask="url(#mask0_64_89)">
                        <path
                          d="M6.9 18.5L5.5 17.1L15.1 7.5H6.5V5.5H18.5V17.5H16.5V8.9L6.9 18.5Z"
                          className="fill-black dark:fill-white"
                        />
                      </g>
                    </svg>
                  </MyFancyButton>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
