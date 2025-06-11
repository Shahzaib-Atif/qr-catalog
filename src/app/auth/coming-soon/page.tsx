import React from "react";
import Link from "next/link";

const ComingSoon: React.FC = () => {
  return (
    <div className="relative z-10 overflow-hidden bg-white px-4 dark:bg-boxdark-2 sm:px-8">
      <div className="flex h-screen flex-col items-center justify-center overflow-hidden">
        <div className="no-scrollbar overflow-y-auto py-20">
          <div className="mx-auto w-full max-w-[600px]">
            <div className="text-center">
              <h1 className="mb-2.5 text-2xl font-black text-black dark:text-white lg:text-4xl xl:text-[50px] xl:leading-[60px]">
                Coming Soon
              </h1>

              <p className="font-large text-lg">
                This page is currently under construction.
              </p>
            </div>

            <div className="flex items-center justify-center">
              <Link
                href="/"
                className="mt-10 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-medium text-white hover:bg-opacity-90"
              >
                <svg
                  className="fill-current"
                  width="16"
                  height="14"
                  viewBox="0 0 16 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.7492 6.38125H2.73984L7.52109 1.51562C7.77422 1.2625 7.77422 0.86875 7.52109 0.615625C7.26797 0.3625 6.87422 0.3625 6.62109 0.615625L0.799219 6.52187C0.546094 6.775 0.546094 7.16875 0.799219 7.42188L6.62109 13.3281C6.73359 13.4406 6.90234 13.525 7.07109 13.525C7.23984 13.525 7.38047 13.4687 7.52109 13.3562C7.77422 13.1031 7.77422 12.7094 7.52109 12.4563L2.76797 7.64687H14.7492C15.0867 7.64687 15.368 7.36562 15.368 7.02812C15.368 6.6625 15.0867 6.38125 14.7492 6.38125Z"
                    fill=""
                  />
                </svg>
                <span>Back to Home</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute left-0 top-0 -z-10 flex h-screen w-full items-center justify-around">
        <div className="flex h-full gap-20">
          <span className="block h-full w-0.5 animate-line1">
            <span className="block h-55 w-0.5 bg-bodydark1 dark:bg-strokedark"></span>
          </span>
          <span className="block h-full w-0.5 animate-line2">
            <span className="block h-36 w-0.5 bg-bodydark1 dark:bg-strokedark"></span>
          </span>
          <span className="ml-10 block h-full w-0.5 animate-line3">
            <span className="block h-40 w-0.5 bg-bodydark1 dark:bg-strokedark"></span>
          </span>
        </div>

        <div className="flex h-full gap-20">
          <span className="mr-10 block h-full w-0.5 animate-line1">
            <span className="block h-55 w-0.5 bg-bodydark1 dark:bg-strokedark"></span>
          </span>
          <span className="block h-full w-0.5 animate-line2">
            <span className="block h-36 w-0.5 bg-bodydark1 dark:bg-strokedark"></span>
          </span>
          <span className="block h-full w-0.5 animate-line3">
            <span className="block h-40 w-0.5 bg-bodydark1 dark:bg-strokedark"></span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
