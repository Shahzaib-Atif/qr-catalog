"use client";
import React, { useState } from "react";
import SideLayout from "../signup/components/SideLayout";
// import { getUser, signIn } from "@/lib/actions/authActions";
import { signIn } from "@/lib/actions/actions.client.auth";
import SignInForm from "./SignInForm";
import { redirect } from "next/navigation";

const SignIn: React.FC = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (formdata: FormData) => {
    // get form data
    const email = formdata.get("email") as string;
    const password = formdata.get("password") as string;

    // start loading
    let loginFailed = false;
    setError("");
    setLoading(true);

    try {
      const actionResponse = await signIn(email, password);
      if (actionResponse.error) {
        throw(actionResponse.error);
      }
    } catch (error: any) {
      setError(error.message || error.toString());
      loginFailed = true;
    } finally {
      setLoading(false);
      if (!loginFailed) redirect("/");
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
