"use client";
import React from "react";
import Loader from "./common/Loader";
import { useLogin } from "@/hooks/useLogin";
import { GetUserDTO } from "@/lib/dtos/user.dto";
import ListComponent from "./ListComponent";
import { Product } from "@/lib/domain/models";
import TableComponent from "./TableComponent";

type Props = { user: GetUserDTO; products: Product[] | null };

export default function HomePage({ user, products }: Props) {
  // const { loggedIn, user, loading: sessionLoading } = useLogin();

  return (
    <div className="flex min-w-80 flex-col gap-2 text-black dark:text-white">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-title-md2 font-semibold text-black dark:text-white">
          Home Page
        </h2>
      </div>

      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <TableComponent username={user?.name} products={products} />
      </div>
    </div>
  );
}
