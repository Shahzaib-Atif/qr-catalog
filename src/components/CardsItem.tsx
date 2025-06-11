"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ProductItemProps } from "@/types/ProductItem";

export function CardsItem({
  name,
  description,
  imageSrc = "/images/image-not-found.jpg",
}: ProductItemProps) {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div className="mx-auto flex max-w-xl flex-col items-center rounded-lg border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="p-6">
        <h4 className="mb-2 text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
          <Link href="#">{name}</Link>
        </h4>
        <p>{description}</p>
      </div>

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
            placeholder="empty"
            priority={true}
            className={`h-auto w-full transition-opacity duration-300 ${
              imgLoaded ? "opacity-100" : "opacity-0"
            }`}
            sizes="(max-width: 640px) 100vw, 450px"
          />
        )}
      </div>
    </div>
  );
}
