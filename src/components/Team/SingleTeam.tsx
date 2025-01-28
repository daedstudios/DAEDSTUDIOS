import { TeamType } from "@/types/team";
import Image from "next/image";

const SingleTeam = ({ team }: { team: TeamType }) => {
  const { image, name, designation, facebookLink, twitterLink, instagramLink } =
    team;
  return (
    <div className="w-full px-8 lg:w-1/2 xl:w-1/2">
      <div className="relative z-10  mb-5">
        <img src={image} alt="" />
        <h1 className=" z-20 mx-1 mt-4 text-2xl text-black dark:text-white">
          {name}
        </h1>
        <h1 className="bottom-1 right-1 z-20 mx-1 mt-4 font-mono  text-hover dark:text-hover">
          {designation}
        </h1>

        <div className="items-left flex gap-5 pl-1 pt-4">
          <a
            aria-label="social link"
            href={facebookLink}
            className=" hover:scale-125 hover:text-hover"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="fill-current"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_2005_10818)">
                <path d="M12 0.674805C5.625 0.674805 0.375 5.8498 0.375 12.2998C0.375 17.3998 3.7125 21.7498 8.3625 23.3248C8.9625 23.4373 9.15 23.0623 9.15 22.7998C9.15 22.5373 9.15 21.7873 9.1125 20.7748C5.8875 21.5248 5.2125 19.1998 5.2125 19.1998C4.6875 17.8873 3.9 17.5123 3.9 17.5123C2.85 16.7623 3.9375 16.7623 3.9375 16.7623C5.1 16.7998 5.7375 17.9623 5.7375 17.9623C6.75 19.7623 8.475 19.2373 9.1125 18.8998C9.225 18.1498 9.525 17.6248 9.8625 17.3248C7.3125 17.0623 4.575 16.0498 4.575 11.6248C4.575 10.3498 5.0625 9.3373 5.775 8.5498C5.6625 8.2873 5.25 7.0873 5.8875 5.4748C5.8875 5.4748 6.9 5.1748 9.1125 6.6748C10.05 6.4123 11.025 6.2623 12.0375 6.2623C13.05 6.2623 14.0625 6.3748 14.9625 6.6748C17.175 5.2123 18.15 5.4748 18.15 5.4748C18.7875 7.0498 18.4125 8.2873 18.2625 8.5498C19.0125 9.3373 19.4625 10.3873 19.4625 11.6248C19.4625 16.0498 16.725 17.0623 14.175 17.3248C14.5875 17.6998 14.9625 18.4498 14.9625 19.4998C14.9625 21.0748 14.925 22.3123 14.925 22.6873C14.925 22.9873 15.15 23.3248 15.7125 23.2123C20.2875 21.6748 23.625 17.3623 23.625 12.2248C23.5875 5.8498 18.375 0.674805 12 0.674805Z" />
              </g>
              <defs>
                <clipPath id="clip0_2005_10818">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleTeam;
