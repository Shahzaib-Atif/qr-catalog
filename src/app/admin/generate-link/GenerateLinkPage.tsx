"use client";

import Check from "@/components/Icons/Check";
import Copy from "@/components/Icons/Copy";
import Refresh from "@/components/Icons/Refresh";
import { useReducer, useState } from "react";

const initialState = {
  productId: "",
  ownRef: "",
  clientRef: "",
}

type formDataStateType = typeof initialState;
type formDataActionType = { name: string; value: string; }

function formReducer(state: formDataStateType, action: formDataActionType) {
  return {
    ...state,
    [action.name]: action.value
  }
}

export function GenerateLinkPage() {
  const [formData, dispatch] = useReducer(formReducer, initialState);
  const [finalUrl, setFinalUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(finalUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "clientRef") {
      const encodedValue = encodeURIComponent(btoa(value));
      dispatch({ name, value: encodedValue }) // use encoded value
    } else {
      dispatch({ name, value }) // use normal value
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // prevents form reset
    setLoading(true); // Show loader

    setTimeout(() => {
      setLoading(false); // Hide loader after 0.5 second
    }, 500);

    const { productId, ownRef, clientRef } = formData;
    setFinalUrl(
      `${window.location.origin}/product/${productId}/${ownRef}/${clientRef}`,
    );
  };

  return (
    <div className="mx-auto flex grid max-w-2xl grid-cols-1 flex-col items-center gap-9">
      {/* {loading && <Loader />} */}
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
            Product Details
          </h3>
        </div>
        {/* <!-- Form --> */}
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-5 p-6.5">
            {/* Product Id */}
            <div>
              <label className="mb-2 block text-sm font-medium text-black dark:text-white xsm:mb-3">
                Product ID
              </label>
              <input
                name="productId"
                type="text"
                onChange={handleChange}
                className="w-full rounded border-[1.5px] border-stroke bg-bodydark1 px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>

            {/* Ref */}
            <div>
              <label className="mb-2 block text-sm font-medium text-black dark:text-white xsm:mb-3">
                Ref
              </label>
              <input
                name="ownRef"
                type="text"
                onChange={handleChange}
                className="w-full rounded border-[1.5px] border-stroke bg-bodydark1 px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>

            {/* Client Ref */}
            <div>
              <label className="mb-2 block text-sm font-medium text-black dark:text-white xsm:mb-3">
                Client Ref
              </label>
              <input
                name="clientRef"
                type="text"
                onChange={handleChange}
                className="w-full rounded border-[1.5px] border-stroke bg-bodydark1 px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>

            {/* Sharepoint folder Url */}
            {/* <div>
              <label className="mb-2 block text-sm font-medium text-black dark:text-white xsm:mb-3">
                Sharepoint folder Url
              </label>
              <input
                name="sharepointUrl"
                type="text"
                onChange={handleChange}
                className="w-full rounded border-[1.5px] border-stroke bg-bodydark1 px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div> */}

            {/* Show generated Link */}
            <div>
              <label className="font-small text-xsm mb-2 block text-black dark:text-white xsm:mb-3">
                Generated Link
              </label>
              <div className="relative">
                <textarea
                  rows={3}
                  disabled
                  value={finalUrl}
                  className="w-full overflow-hidden rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 pr-12 text-black opacity-75 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary dark:disabled:bg-black"
                />
                <button
                  onClick={handleCopy}
                  className="text-gray-500 absolute right-3 top-3 hover:text-primary"
                  type="button"
                >
                  {!copied && <Copy size={24} />}
                  {copied && <Check />}
                </button>
              </div>
              <div className="mt-1 text-sm text-green-500"></div>
            </div>

            {/* Button to generate link */}
            <div className={loading ? 'opacity-30' : 'opacity-100'}>
              <button
                disabled={loading}
                type="submit"
                value="Generate New Link"
                className="flex w-full cursor-pointer flex-row justify-center gap-2 rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
              >
                Generate New Link
                <Refresh />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
