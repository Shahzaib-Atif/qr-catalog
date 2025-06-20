"use client";
import React, { useState } from "react";
import { ProductItemProps } from "@/types/ProductItem";
import AccordionComponent from "./AccordionComponent";
import { ImageWithSkeleton } from "./ImageWithSkeleton";
import { useLogin } from "@/hooks/useLogin";

export function CardsItem({ name, description, imageSrc }: ProductItemProps) {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div className="mx-auto flex max-w-xl flex-col items-center rounded-lg border border-stroke bg-white text-center shadow-default dark:border-strokedark dark:bg-boxdark">
      {/* Name & Description */}
      <div className="p-5">
        <h4 className="mb-2 text-xl font-semibold text-black underline dark:text-white">
          {name}{" "}
        </h4>
        <p className="text-black dark:text-white">{description}</p>
      </div>

      {/* Image */}
      <ImageWithSkeleton
        imgLoaded={imgLoaded}
        setImgLoaded={setImgLoaded}
        imageSrc={imageSrc}
      />

      {/* Accordion Component */}
      {imgLoaded && (
        <div className="mb-3 mt-3 w-full max-w-[450px] p-3">
          <AccordionComponent />
        </div>
      )}
    </div>
  );
}
