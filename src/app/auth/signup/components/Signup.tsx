"use client"
import { signUp } from "@/lib/actions/actions.client.auth";
import { useState } from "react";
import SideLayout from "./SideLayout";
import SignupForm from "./SignupForm";

export default function Signup() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    
    // get form data 
    const data = new FormData(event.currentTarget);
    const username = data.get("username") as string;
    const email = data.get("email") as string;
    const password = data.get("password") as string;

    setError("");
    setLoading(true);
    try {
      const actionResponse = await signUp(email, username, password);
      console.log("actionResponse: ", actionResponse);
      if (actionResponse.error) {
        setError(actionResponse.error);
      }
    } catch (error: any) {
      setError(error.message || "unknown error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex flex-wrap items-center">
        {/* side layout graphics */}
        <SideLayout />

        {/* signup form */}
        <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
          <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
            <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
              Sign Up to Divmac Web App
            </h2>
            <SignupForm handleSubmit={handleSubmit} loading={loading} error={error} />
          </div>
        </div>
      </div>
    </div>
  );
}
