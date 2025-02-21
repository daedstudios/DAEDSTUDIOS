"use client";
import React, { FormEventHandler, useEffect } from "react";
import MyFancyButton from "../MyFancyButton/MyFancyButton";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

const MyFancyForm = () => {
  const [valid, setValid] = React.useState(false);
  const [info, setInfo] = React.useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const submittedRef = React.useRef(null);

  const handleSubmission = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (info.email === "") return;
    console.log(info);
    try {
      const response = await fetch("/api/formquery", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(info),
      });

      console.log("response:", response);
      if (!response.ok) {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
    gsap.to(submittedRef.current, {
      duration: 1,
      height: "100%",
      ease: "power2",
    });
  };

  const changeHandler = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    setInfo({
      fullName: (formData.get("fullName") as string) || "",
      email: (formData.get("email") as string) || "",
      phone: (formData.get("phone") as string) || "",
      message: (formData.get("message") as string) || "",
    });
  };

  return (
    <>
      <div className="relative w-full lg:w-5/12  lg:border-l-[0.5px] lg:border-dark-5 xl:w-4/12">
        <div
          className="wow fadeInUp rounded-lg bg-white px-3 py-10  dark:bg-black dark:shadow-none sm:py-12  lg:py-12 lg:pl-0 "
          data-wow-delay=".2s
              "
        >
          <form onSubmit={handleSubmission} onChange={changeHandler}>
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
            <button
              type="submit"
              className="h-16 w-full border-y-[0.5px] border-dark-5"
            >
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
            </button>
          </form>
        </div>
        <div
          className="absolute right-0 top-0 flex h-0 w-full items-center justify-center overflow-hidden bg-white dark:bg-black"
          ref={submittedRef}
        >
          We will contact you soon
        </div>
      </div>
    </>
  );
};

export default MyFancyForm;
