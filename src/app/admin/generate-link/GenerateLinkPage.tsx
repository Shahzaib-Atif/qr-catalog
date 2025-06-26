"use client";
import { useState } from "react";

export function GenerateLinkPage() {
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
            <div className="mb-8.5">
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                Product ID
              </label>
              <input
                type="text"
                className="w-full rounded border-[1.5px] border-stroke bg-bodydark1 px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>

            <div className="mb-8.5">
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                Ref
              </label>
              <input
                type="text"
                className="w-full rounded border-[1.5px] border-stroke bg-bodydark1 px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>

            <div className="mb-8.5">
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                Client Ref
              </label>
              <input
                type="text"
                className="w-full rounded border-[1.5px] border-stroke bg-bodydark1 px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>

            <div className="mb-8.5">
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                Sharepoint folder Url
              </label>
              <input
                type="text"
                className="w-full rounded border-[1.5px] border-stroke bg-bodydark1 px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>

            <div className="mb-8.5">
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                Generated Link
              </label>
              <textarea
                rows={3}
                disabled
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary dark:disabled:bg-black"
              ></textarea>
            </div>

            {/* <div>
              <div className="mb-3 block flex flex-row gap-2 text-sm font-medium text-black dark:text-white">
                <label>Generated Link</label>
                <button
                  type="button"
                  className="border-gray-200 text-gray-700 dark:border-gray-800 dark:text-gray-400 inline-flex cursor-pointer items-center gap-1 pl-3.5 pr-3 text-sm font-medium"
                >
                  <svg
                    className="fill-current"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.58822 4.58398C6.58822 4.30784 6.81207 4.08398 7.08822 4.08398H15.4154C15.6915 4.08398 15.9154 4.30784 15.9154 4.58398L15.9154 12.9128C15.9154 13.189 15.6916 13.4128 15.4154 13.4128H7.08821C6.81207 13.4128 6.58822 13.189 6.58822 12.9128V4.58398ZM7.08822 2.58398C5.98365 2.58398 5.08822 3.47942 5.08822 4.58398V5.09416H4.58496C3.48039 5.09416 2.58496 5.98959 2.58496 7.09416V15.4161C2.58496 16.5207 3.48039 17.4161 4.58496 17.4161H12.9069C14.0115 17.4161 14.9069 16.5207 14.9069 15.4161L14.9069 14.9128H15.4154C16.52 14.9128 17.4154 14.0174 17.4154 12.9128L17.4154 4.58398C17.4154 3.47941 16.52 2.58398 15.4154 2.58398H7.08822ZM13.4069 14.9128H7.08821C5.98364 14.9128 5.08822 14.0174 5.08822 12.9128V6.59416H4.58496C4.30882 6.59416 4.08496 6.81801 4.08496 7.09416V15.4161C4.08496 15.6922 4.30882 15.9161 4.58496 15.9161H12.9069C13.183 15.9161 13.4069 15.6922 13.4069 15.4161L13.4069 14.9128Z"
                      fill=""
                    ></path>
                  </svg>
                  <div>Copy</div>
                </button>
              </div>
              <div className="flex items-center gap-2">
                <input
                  style={{ overflow: "hidden !important" }}
                  readOnly
                  className="overflow-hidden-important w-full rounded border-[1.5px] border-stroke bg-bodydark1 px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  type="text"
                  value={
                    "www.tailadmin.comasdssssssssssssssssssssssssadasdsadcomasdssssssssssssssssssssssssadasdsad"
                  }
                />
              </div>
            </div> */}

            <div className="mb-8.5">
              <div className="mb-5">
                <input
                  type="button"
                  value="Generate New Link"
                  className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
