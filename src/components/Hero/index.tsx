import Image from "next/image";
import Link from "next/link";
import MyFancyButton from "../MyFancyButton/MyFancyButton";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative overflow-hidden pt-[10rem] dark:bg-primary lg:pt-[12rem]"
      >
        <div className="items-left flex flex-wrap">
          <div className="w-full">
            <div className="flex border-b-[0.5px] border-dark-5 px-4">
              <h1 className=" mx-1 text-5xl md:text-7xl lg:text-9xl">
                CREATIVE STUDIO FOR SOFTWARE SOLUTIONS
              </h1>
            </div>

            {/* <ul className="items-left justify-left flex h-[4rem] flex-wrap px-4">
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
            </ul> */}
            <div>
              <video
                src="/images/blog/DAEDSTUDIOS2.mov"
                autoPlay
                muted
                loop
                className="w-full px-4"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
