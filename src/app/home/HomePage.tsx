import React from "react";
import Image from "next/image";
import Link from "next/link";
import LogoDivmacDark from "@/components/Icons/Logo-Divmac-Dark";
import LogoDivmacLight from "@/components/Icons/Logo-Divmac-Light";
import LinkedinIcon from "@/components/Icons/LinkedinIcon";

const Home: React.FC = () => {
  return (
    <div className="bg-white px-4 dark:bg-boxdark-2 sm:px-6">
      <div className="flex h-screen flex-col overflow-hidden">
        <div className="flex flex-wrap items-center">
          <div className="no-scrollbar h-screen w-full overflow-y-auto border-stroke dark:border-strokedark lg:flex lg:w-1/2 lg:items-center lg:justify-center lg:border-r">
            <div className="px-4 py-20 xl:px-0">
              <div>
                <h1 className="mb-2.5 text-center text-xl font-black text-black dark:text-white lg:text-4xl xl:text-[50px] xl:leading-[60px]">
                  QR-Catalog Web App
                </h1>

                <p className="text-center font-medium">
                  This website was created by Divmac to provide users with a
                  simple and efficient way to scan QR codes and access product
                  details.
                </p>
              </div>

              {/* <!-- social link start --> */}
              <div className="mt-10">
                <p className="mb-5 text-center font-medium text-black dark:text-white">
                  Follow Us On
                </p>

                <div className="flex items-center justify-center gap-4">
                  <Link
                    href="#"
                    className="flex size-10 items-center justify-center rounded-full border border-[#DFE4EA] hover:border-primary hover:bg-primary hover:text-white dark:border-strokedark dark:hover:border-primary"
                  >
                    <svg
                      className="fill-current"
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.3492 6.45H10.9492H10.4492V5.95V4.4V3.9H10.9492H11.9992C12.2742 3.9 12.4992 3.7 12.4992 3.4V0.75C12.4992 0.475 12.2992 0.25 11.9992 0.25H10.1742C8.19922 0.25 6.82422 1.65 6.82422 3.725V5.9V6.4H6.32422H4.62422C4.27422 6.4 3.94922 6.675 3.94922 7.075V8.875C3.94922 9.225 4.22422 9.55 4.62422 9.55H6.27422H6.77422V10.05V15.075C6.77422 15.425 7.04922 15.75 7.44922 15.75H9.79922C9.94922 15.75 10.0742 15.675 10.1742 15.575C10.2742 15.475 10.3492 15.3 10.3492 15.15V10.075V9.575H10.8742H11.9992C12.3242 9.575 12.5742 9.375 12.6242 9.075V9.05V9.025L12.9742 7.3C12.9992 7.125 12.9742 6.925 12.8242 6.725C12.7742 6.6 12.5492 6.475 12.3492 6.45Z"
                        fill=""
                      />
                    </svg>
                  </Link>

                  <Link
                    href="#"
                    className="flex size-10 items-center justify-center rounded-full border border-[#DFE4EA] hover:border-primary hover:bg-primary hover:text-white dark:border-strokedark dark:hover:border-primary"
                  >
                    <svg
                      className="fill-current"
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_1878_14093)">
                        <path
                          d="M14.525 3.825L15.475 2.625C15.75 2.3 15.825 2.05 15.85 1.925C15.1 2.375 14.4 2.525 13.95 2.525H13.775L13.675 2.425C13.075 1.9 12.325 1.625 11.525 1.625C9.775 1.625 8.4 3.075 8.4 4.75C8.4 4.85 8.4 5 8.425 5.1L8.5 5.6L7.975 5.575C4.775 5.475 2.15 2.725 1.725 2.25C1.025 3.5 1.425 4.7 1.85 5.45L2.7 6.85L1.35 6.1C1.375 7.15 1.775 7.975 2.55 8.575L3.225 9.075L2.55 9.35C2.975 10.625 3.925 11.15 4.625 11.35L5.55 11.6L4.675 12.2C3.275 13.2 1.525 13.125 0.75 13.05C2.325 14.15 4.2 14.4 5.5 14.4C6.475 14.4 7.2 14.3 7.375 14.225C14.375 12.575 14.7 6.325 14.7 5.075V4.9L14.85 4.8C15.7 4 16.05 3.575 16.25 3.325C16.175 3.35 16.075 3.4 15.975 3.425L14.525 3.825Z"
                          fill=""
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1878_14093">
                          <rect
                            width="16"
                            height="16"
                            fill="white"
                            transform="translate(0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </Link>

                  <Link
                    href="#"
                    className="flex size-10 items-center justify-center rounded-full border border-[#DFE4EA] hover:border-primary hover:bg-primary hover:text-white dark:border-strokedark dark:hover:border-primary"
                  >
                    <svg
                      className="fill-current"
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_1878_14091)">
                        <path
                          d="M15.925 4.27495C15.75 3.59995 15.225 3.07495 14.55 2.89995C13.35 2.57495 8.5 2.57495 8.5 2.57495C8.5 2.57495 3.65 2.57495 2.45 2.89995C1.775 3.07495 1.25 3.59995 1.075 4.27495C0.75 5.49995 0.75 7.99995 0.75 7.99995C0.75 7.99995 0.75 10.525 1.075 11.7249C1.25 12.4 1.775 12.925 2.45 13.0999C3.65 13.425 8.5 13.4249 8.5 13.4249C8.5 13.4249 13.35 13.425 14.55 13.0999C15.225 12.925 15.75 12.4 15.925 11.7249C16.25 10.525 16.25 7.99995 16.25 7.99995C16.25 7.99995 16.25 5.49995 15.925 4.27495ZM6.95 10.325V5.67495L10.975 7.99995L6.95 10.325Z"
                          fill=""
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1878_14091">
                          <rect
                            width="16"
                            height="16"
                            fill="white"
                            transform="translate(0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </Link>

                  <Link
                    href="#"
                    className="flex size-10 items-center justify-center rounded-full border border-[#DFE4EA] hover:border-primary hover:bg-primary hover:text-white dark:border-strokedark dark:hover:border-primary"
                  >
                    <LinkedinIcon />
                  </Link>
                </div>
              </div>
              {/* <!-- social link end --> */}
            </div>
          </div>

          <div className="hidden w-full lg:block lg:w-1/2">
            <div className="text-center">
              <span className="inline-block">
                <Image
                  width={562}
                  height={562}
                  src={"/images/illustration/illustration-04.svg"}
                  alt="illustration"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
