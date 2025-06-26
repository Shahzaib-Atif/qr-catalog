"use client";
import { ImageWithSkeleton } from "@/components/ImageWithSkeleton";
import { ProductItemProps, ProductItemProps2 } from "@/types/ProductItem";
import { useState } from "react";

export function ProductsPage({
  prodId,
  ownRef,
  clientRef,
  imageSrc,
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
          <div className="p-6.5">
            <div className="mb-4.5 flex flex-col gap-6 sm:flex-row">
              <div className="w-full xl:w-1/2">
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Product ID
                </label>
                <input
                  readOnly
                  value={prodId}
                  type="text"
                  className="w-full rounded border-[1.5px] border-stroke bg-bodydark1 px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>

              <div className="w-full xl:w-1/2">
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Ref
                </label>
                <input
                  readOnly
                  value={ownRef}
                  type="text"
                  className="w-full rounded border-[1.5px] border-stroke bg-bodydark1 px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>
            </div>

            <div className="mb-8.5">
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                Client Ref
              </label>
              <input
                readOnly
                value={clientRef}
                type="email"
                className="w-full rounded border-[1.5px] border-stroke bg-bodydark1 px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>

            <div className="mb-4.5">
              {/* Image */}
              <ImageWithSkeleton
                imgLoaded={imgLoaded}
                setImgLoaded={setImgLoaded}
                imageSrc={imageSrc}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
