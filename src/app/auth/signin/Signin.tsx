"use client";
import React, { useEffect, useRef, useState, useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import SideLayout from "../signup/components/SideLayout";
import SignInForm from "./SignInForm";
import { signIn } from "@/lib/services/user.service";

const SignIn: React.FC = () => {
  const [error, setError] = useState("");
  const [, setSuccess] = useState("");
  const [isPending, startTransition] = useTransition();

  const router = useRouter()
  const searchParams = useSearchParams();
  const redirectPath = searchParams.get("redirect") || "/";
  const errorParams = searchParams.get("error");
  const hasShownErrorToast = useRef<boolean>(false);

  useEffect(() => {
    if (errorParams === "unauthorized") {
      toast.error("Only admin can access this route!", {
        duration: 2500,
        removeDelay: 0
      });
      hasShownErrorToast.current = true

      // Remove "error" from current URL
      const params = new URLSearchParams(window.location.search);
      params.delete("error");
      const newQuery = params.toString();
      const newPath = `${window.location.pathname}${newQuery ? `?${newQuery}` : ""}`;
      router.replace(newPath);
    }
  }, [errorParams, router]);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setSuccess("");
    setError("");

    // get form data
    const data = new FormData(event.currentTarget);
    const email = data.get("email") as string;
    const password = data.get("password") as string;

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: email, password }),
      })

      const result = await res.json();

      if (!res.ok || result.success === false) {
        setError(result.message || "Something went wrong");
        return;
      }

      router.push(redirectPath);
    } catch (error: any) {
      console.log("error: ", error);
    }
  };

  return (
    <>
      <Toaster position="top-center" />
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
                loading={isPending}
                error={error}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
