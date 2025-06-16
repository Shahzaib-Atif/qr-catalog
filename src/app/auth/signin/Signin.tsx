"use client";
import React, { useState } from "react";
import SideLayout from "../signup/components/SideLayout";
// import { getUser, signIn } from "@/lib/actions/authActions";
import { signIn } from "@/lib/actions/clientAuthActions";
import SignInForm from "./SignInForm";

const SignIn: React.FC = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    // get form data
    const data = new FormData(event.currentTarget);
    const email = data.get("email") as string;
    const password = data.get("password") as string;

    // start loading
    setError("");
    setLoading(true);

    try {
      const actionResponse = await signIn(email, password);
      console.log("actionResponse: ", actionResponse);
      if (actionResponse.error) {
        setError(actionResponse.error);
      }
    } catch (error: any) {
      setError(error.message || "unknown error");
    } finally {
      setLoading(false);
      window.location.href = '/datasheet'
    }
  };

  return (
    <div className="rounded-sm border border-stroke bg-white py-6 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex flex-wrap items-center">
        {/* side layout graphics */}
        <SideLayout />

        <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
          <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
            <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
              Sign In to Divmac App
            </h2>

            <SignInForm
              handleSubmit={handleSubmit}
              loading={loading}
              error={error}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
