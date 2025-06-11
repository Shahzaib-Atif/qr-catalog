import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ProductItemProps } from "@/types/ProductItem";

export function CardsItem({
  name,
  description,
  imageSrc = "/images/image-not-found.jpg",
}: ProductItemProps) {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center rounded-lg border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="p-6">
        <h4 className="mb-2 text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
          <Link href="#">{name}</Link>
        </h4>
        <p>{description}</p>
      </div>

      <div className="block w-full max-w-[450px] p-3">
        <Image
          width={400}
          height={300}
          src={imageSrc}
          alt="Cards"
          className="h-auto w-full"
          sizes="(max-width: 640px) 100vw, 450px"
        />
      </div>
    </div>
  );
}
