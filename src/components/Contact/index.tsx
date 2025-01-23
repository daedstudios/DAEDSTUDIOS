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
              {/* <div className="mr-6 text-[32px] text-white">
                <svg
                  width="29"
                  height="35"
                  viewBox="0 0 29 35"
                  className="fill-current"
                >
                  <path d="M14.5 0.710938C6.89844 0.710938 0.664062 6.72656 0.664062 14.0547C0.664062 19.9062 9.03125 29.5859 12.6406 33.5234C13.1328 34.0703 13.7891 34.3437 14.5 34.3437C15.2109 34.3437 15.8672 34.0703 16.3594 33.5234C19.9688 29.6406 28.3359 19.9062 28.3359 14.0547C28.3359 6.67188 22.1016 0.710938 14.5 0.710938ZM14.9375 32.2109C14.6641 32.4844 14.2812 32.4844 14.0625 32.2109C11.3828 29.3125 2.57812 19.3594 2.57812 14.0547C2.57812 7.71094 7.9375 2.625 14.5 2.625C21.0625 2.625 26.4219 7.76562 26.4219 14.0547C26.4219 19.3594 17.6172 29.2578 14.9375 32.2109Z" />
                  <path d="M14.5 8.58594C11.2734 8.58594 8.59375 11.2109 8.59375 14.4922C8.59375 17.7188 11.2187 20.3984 14.5 20.3984C17.7812 20.3984 20.4062 17.7734 20.4062 14.4922C20.4062 11.2109 17.7266 8.58594 14.5 8.58594ZM14.5 18.4297C12.3125 18.4297 10.5078 16.625 10.5078 14.4375C10.5078 12.25 12.3125 10.4453 14.5 10.4453C16.6875 10.4453 18.4922 12.25 18.4922 14.4375C18.4922 16.625 16.6875 18.4297 14.5 18.4297Z" />
                </svg>
              </div> */}
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
                  {/* <div className="mr-6 text-[32px] text-white">
                    <svg
                      width="34"
                      height="25"
                      viewBox="0 0 34 25"
                      className="fill-current"
                    >
                      <path d="M30.5156 0.960938H3.17188C1.42188 0.960938 0 2.38281 0 4.13281V20.9219C0 22.6719 1.42188 24.0938 3.17188 24.0938H30.5156C32.2656 24.0938 33.6875 22.6719 33.6875 20.9219V4.13281C33.6875 2.38281 32.2656 0.960938 30.5156 0.960938ZM30.5156 2.875C30.7891 2.875 31.0078 2.92969 31.2266 3.09375L17.6094 11.3516C17.1172 11.625 16.5703 11.625 16.0781 11.3516L2.46094 3.09375C2.67969 2.98438 2.89844 2.875 3.17188 2.875H30.5156ZM30.5156 22.125H3.17188C2.51562 22.125 1.91406 21.5781 1.91406 20.8672V5.00781L15.0391 12.9922C15.5859 13.3203 16.1875 13.4844 16.7891 13.4844C17.3906 13.4844 17.9922 13.3203 18.5391 12.9922L31.6641 5.00781V20.8672C31.7734 21.5781 31.1719 22.125 30.5156 22.125Z" />
                    </svg>
                  </div> */}
                  <div>
                    <h3 className="mb-[18px] text-lg font-normal text-dark dark:text-white">
                      LET US HELP
                    </h3>
                    <p className="font-mono text-base text-body-color dark:text-dark-6">
                      Elias.aestudio@gmail.com
                    </p>
                    <p className="mt-1 font-mono text-base text-body-color dark:text-dark-6">
                      Akshat.aestudio@gmail.com
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
