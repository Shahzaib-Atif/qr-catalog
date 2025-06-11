import React from "react";
import SignInPage from "@/app/auth/signin/Signin";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { metadataObj } from "@/js/constants";

export const metadata: Metadata = {
  ...metadataObj,
};

const Signin = () => {
  return (
    <DefaultLayout>
      <SignInPage />
    </DefaultLayout>
  );
};

export default Signin;
