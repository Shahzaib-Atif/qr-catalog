import React, { useRef, useState } from "react";
import ListComponent from "./ListComponent";

const AccordionComponent = () => {
  const [active, setActive] = useState<boolean>(false);

  const handleToggle = () => {
    if (active === false) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  return (
    <div className="w-full rounded-md border border-stroke p-4 shadow-9 dark:border-strokedark dark:shadow-none sm:p-6">
      <button
        type="button"
        className="active flex w-full items-center gap-1.5 sm:gap-3 xl:gap-6"
        onClick={() => handleToggle()}
      >
        {/* Icon */}
        <div className="flex h-9 max-h-10.5 w-9 max-w-10.5 items-center justify-center rounded-md bg-[#F3F5FC] dark:bg-meta-4">
          <svg
            className={`fill-primary stroke-primary duration-200 ease-in-out dark:fill-white dark:stroke-white ${
              active ? "rotate-180" : ""
            }`}
            width="14"
            height="8"
            viewBox="0 0 18 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.28882 8.43257L8.28874 8.43265L8.29692 8.43985C8.62771 8.73124 9.02659 8.86001 9.41667 8.86001C9.83287 8.86001 10.2257 8.69083 10.5364 8.41713L10.5365 8.41721L10.5438 8.41052L16.765 2.70784L16.771 2.70231L16.7769 2.69659C17.1001 2.38028 17.2005 1.80579 16.8001 1.41393C16.4822 1.1028 15.9186 1.00854 15.5268 1.38489L9.41667 7.00806L3.3019 1.38063L3.29346 1.37286L3.28467 1.36548C2.93287 1.07036 2.38665 1.06804 2.03324 1.41393L2.0195 1.42738L2.00683 1.44184C1.69882 1.79355 1.69773 2.34549 2.05646 2.69659L2.06195 2.70196L2.0676 2.70717L8.28882 8.43257Z"
              fill=""
              stroke=""
            />
          </svg>
        </div>

        {/* Header */}
        <div className="ml-1 text-left text-lg font-medium text-black dark:text-white">
          <h4> Technical documents </h4>
        </div>
      </button>

      {/* Content */}
      <div
        className={`ml-1 mt-2 duration-200 ease-in-out ${
          active ? "block" : "hidden"
        }`}
      >
        <ListComponent />
      </div>
    </div>
  );
};

export default AccordionComponent;
