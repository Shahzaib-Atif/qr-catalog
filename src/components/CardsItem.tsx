"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ProductItemProps } from "@/types/ProductItem";
import AccordionComponent from "./AccordionComponent";

export function CardsItem({ name, description, imageSrc }: ProductItemProps) {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div className="mx-auto flex max-w-xl flex-col items-center rounded-lg border border-stroke bg-white text-center shadow-default dark:border-strokedark dark:bg-boxdark">
      {/* Name & Description */}
      <div className="p-6">
        <h4 className="mb-2 text-xl font-semibold text-black underline dark:text-white">
          {name}{" "}
        </h4>
        <p className="text-black dark:text-white">{description}</p>
      </div>

      {/* Image */}
      <div className="block w-full max-w-[450px] p-3">
        {!imgLoaded && (
          <div className="bg-gray-300 absolute inset-0 animate-pulse rounded" />
        )}
        {imageSrc && (
          <Image
            width={400}
            height={300}
            src={imageSrc}
            onLoad={() => setImgLoaded(true)}
            alt="Image"
            priority={true}
            className={`h-auto w-full transition-opacity duration-300 ${
              imgLoaded ? "opacity-100" : "opacity-0"
            }`}
            sizes="(max-width: 640px) 100vw, 450px"
          />
        )}
      </div>

      {/* Button */}
      {/* {imgLoaded && (
        <button className="my-4 inline-flex rounded-md bg-primary px-4.5 py-1.5 font-medium text-white">
          See more info
        </button>
      )} */}

      {/* Accordion Component */}
      {imgLoaded && (
        <div className="mb-3 mt-3 w-full max-w-[450px] p-3">
          <AccordionComponent />
        </div>
      )}
    </div>
  );
}
