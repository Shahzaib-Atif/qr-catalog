import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ProductItemProps } from "@/types/ProductItem";

export function CardsItem({
  name,
  description,
  imageSrc = "/images/user/user-11.png",
}: ProductItemProps) {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      
      <div className="p-6">
        <h4 className="mb-2 text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
          <Link href="#">{name}</Link>
        </h4>
        <p>{description}</p>
      </div>

      <div className="block p-6">
        <Image width={432} height={238} src={imageSrc} alt="Cards" />
      </div>
    </div>
  );
}
