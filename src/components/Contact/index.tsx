import MyFancyButton from "../MyFancyButton/MyFancyButton";

const Contact = () => {
  return (
    <section
      id="contact"
      className=" relative mx-1 border-y-[0.5px] border-dark-5 "
    >
      <div className="absolute left-0 top-0 -z-[1] h-full w-full dark:bg-black"></div>
      <div className="absolute left-0 top-0 -z-[1] h-1/2 w-full bg-white dark:bg-black lg:h-[45%] xl:h-1/2"></div>
      <div className=" px-4">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div className="ud-contact-content-wrapper">
              <div className="ud-contact-title mb-12 lg:mb-[150px]">
                <p className="py-4 font-mono">.contact</p>
                <h2 className="max-w-[260px] text-[35px] font-normal leading-[1.14] text-dark dark:text-white">
                  LET&#39;S TALK ABOUT YOUR PROBLEM
                </h2>
              </div>
              <div className="mb-12 flex flex-wrap justify-between lg:mb-0">
                <div className="mb-8 flex w-[330px] max-w-full">
                  <div>
                    <h3 className="mb-[18px] text-lg text-dark dark:text-white">
                      OUR LOCATION
                    </h3>
                    <p className="font-mono text-base text-body-color dark:text-dark-6">
                      Kirchenplatz 1, 94032 Passau, Germany
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex w-[330px] max-w-full">
                  <div>
                    <h3 className="mb-[18px] text-lg font-normal text-dark dark:text-white">
                      LET US HELP
                    </h3>
                    <p className="font-mono text-base text-body-color dark:text-dark-6">
                      daedstudios@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-5/12  lg:border-l-[0.5px] lg:border-dark-5 xl:w-4/12">
            <div
              className="wow fadeInUp rounded-lg bg-white px-3 py-10  dark:bg-black dark:shadow-none  sm:py-12  lg:py-12 lg:pl-0 "
              data-wow-delay=".2s
              "
            >
              <form>
                <div className="mb-[22px] px-1">
                  <label
                    htmlFor="fullName"
                    className="mb-4 block font-mono text-sm text-black dark:text-white"
                  >
                    Full Name*
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Max"
                    className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 font-mono text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-dark-3"
                  />
                </div>
                <div className="mb-[22px] px-1">
                  <label
                    htmlFor="email"
                    className="mb-4 block font-mono text-sm text-black dark:text-white"
                  >
                    Email*
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="example@yourmail.com"
                    className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 font-mono text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                  />
                </div>
                <div className="mb-[22px] px-1">
                  <label
                    htmlFor="phone"
                    className="mb-4 block font-mono text-sm text-black dark:text-white"
                  >
                    Phone*
                  </label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="+885 1254 5211 552"
                    className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 font-mono text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                  />
                </div>
                <div className="mb-[30px] px-1">
                  <label
                    htmlFor="message"
                    className="mb-4 block font-mono text-sm text-black dark:text-white"
                  >
                    Message*
                  </label>
                  <textarea
                    name="message"
                    rows={1}
                    placeholder="type your message here"
                    className="w-full resize-none border-0 border-b border-[#f1f1f1] bg-transparent pb-3 font-mono text-dark placeholder:text-body-color focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                  ></textarea>
                </div>
                <div className="h-16 w-full border-y-[0.5px] border-dark-5">
                  <MyFancyButton
                    mainContent="send"
                    slideUpContent="send"
                    className=""
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
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
