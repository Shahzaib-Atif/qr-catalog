"use client";
import React from "react";
import { useSessionVerification } from "@/hooks/useSessionVerification";
import Loader from "./common/Loader";

type Props = {};

export default function HomePage({}: Props) {
  // const { loggedIn, loading: sessionLoading } = useSessionVerification();
    const { loggedIn, loading: sessionLoading } = {loggedIn: true, loading: false}


  return (
    <>
      {sessionLoading && <Loader />}
      {!sessionLoading && loggedIn && (
        <div className="flex min-w-80 flex-col gap-7.5">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-4 py-4 dark:border-strokedark sm:px-6 xl:px-9">
              <h3 className="text-xl font-medium text-black dark:text-white	">
                Home Page
              </h3>
            </div>

            <div className="p-4 sm:p-6 xl:p-9">
              This is the home page
            </div>
          </div>
        </div>
      )}{" "}
    </>
  );
}
