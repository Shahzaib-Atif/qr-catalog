"use client";
import ArrowUpRight from "@/components/Icons/ArrowUpRight";
import { ImageWithSkeleton } from "@/components/ImageWithSkeleton";
import { ProductItemProps2 } from "@/types/ProductItem";
import { useState } from "react";

export function ProductsPage({
  prodId,
  ownRef,
  clientRef,
  imageSrc,
  folderUrl,
}: ProductItemProps2) {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div className="mx-auto flex grid max-w-2xl grid-cols-1 flex-col items-center gap-9">
      {/* <!-- Contact Form --> */}
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
            Product Details
          </h3>
        </div>
        <form>
          <div className="px-6.5 py-4.5 sm:py-6.5">
            <div className="mb-4.5 flex flex-col gap-4 xsm:flex-row xsm:gap-6">
              <div className="w-full xl:w-1/2">
                <label className="mb-2 block text-sm font-medium text-black dark:text-white xsm:mb-3 xsm:text-base">
                  Product ID
                </label>
                <input
                  readOnly
                  value={prodId}
                  type="text"
                  className="w-full rounded border-[1.5px] border-stroke bg-bodydark1 px-3 py-2 text-base text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary xsm:px-5 xsm:py-3 xsm:text-lg"
                />
              </div>

              <div className="w-full xl:w-1/2">
                <label className="mb-2 block text-sm font-medium text-black dark:text-white xsm:mb-3 xsm:text-base">
                  Ref
                </label>
                <input
                  readOnly
                  value={ownRef}
                  type="text"
                  className="w-full rounded border-[1.5px] border-stroke bg-bodydark1 px-3 py-2 text-base text-black outline-none transition focus:border-primary 
                  active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input 
                  dark:text-white dark:focus:border-primary xsm:px-5 xsm:py-3 xsm:text-lg"
                />
              </div>
            </div>

            <div className="mb-5.5 xsm:mb-8.5">
              <label className="mb-2 block text-sm font-medium text-black dark:text-white xsm:mb-3 xsm:text-base">
                Client Ref
              </label>
              <input
                readOnly
                value={clientRef}
                type="email"
                className="w-full rounded border-[1.5px] border-stroke bg-bodydark1 px-3 py-2 text-base text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary xsm:px-5 xsm:py-3 xsm:text-lg"
              />
            </div>

            <div className="mb-4.5 xsm:mb-2.5">
              {/* Image */}
              <ImageWithSkeleton
                imgLoaded={imgLoaded}
                setImgLoaded={setImgLoaded}
                imageSrc={imageSrc}
              />
            </div>

            <a
              href={
                folderUrl?.startsWith("https://")
                  ? folderUrl
                  : `https://${folderUrl}`
              }
              rel="noopener noreferrer"
              target="_blank"
              className="font-small flex flex-row items-center justify-center gap-2 text-sm text-black dark:text-white xsm:text-lg xsm:font-medium"
            >
              <ArrowUpRight width={10} height={8} />
              <h4 className={!folderUrl ? 'line-through' : 'no-underline'}> Open Technical documents </h4>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
