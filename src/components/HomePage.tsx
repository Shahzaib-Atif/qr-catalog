"use client";
import React from "react";
import Loader from "./common/Loader";
import { useLogin } from "@/hooks/useLogin";
import { GetUserDTO } from "@/lib/dtos/user.dto";
import ListComponent from "./ListComponent";
import { Product } from "@/lib/domain/models";
import TableComponent from "./TableComponent";

type Props = { user: GetUserDTO, products: Product[] | null };

export default function HomePage({ user, products }: Props) {
  // const { loggedIn, user, loading: sessionLoading } = useLogin();

  return (
    <div className="flex min-w-80 flex-col gap-7.5 text-black dark:text-white">
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke px-4 py-4 dark:border-strokedark sm:px-6 xl:px-9">
          <h3 className="text-xl font-medium">Home Page ({user.name?.toUpperCase()})</h3>
        </div>

        <TableComponent products={products} />
      </div>
    </div>
  );
}
