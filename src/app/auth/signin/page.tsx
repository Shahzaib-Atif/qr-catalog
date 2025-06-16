import React from "react";
import SignInPage from "@/app/auth/signin/Signin";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { metadataObj } from "@/utils/metadataObj";

export const metadata = metadataObj;

const Signin = () => {
  return (
    <DefaultLayout>
      <SignInPage />
    </DefaultLayout>
  );
};

export default Signin;
