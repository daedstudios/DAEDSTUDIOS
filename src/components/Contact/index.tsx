import MyFancyButton from "../MyFancyButton/MyFancyButton";
import MyFancyForm from "./form";

const Contact = () => {
  return (
    <section
      id="contact"
      className=" relative mx-1 border-y-[0.5px] border-dark-5 "
    >
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
          <MyFancyForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
