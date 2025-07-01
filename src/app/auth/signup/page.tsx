import React, { useState } from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { metadataObj } from "@/utils/common/metadataObj";
import SignInPage from "./components/Signup";

export const metadata = metadataObj;

const SignUp: React.FC = () => {
  return (
    <DefaultLayout>
      <SignInPage />
    </DefaultLayout>
  );
};

export default SignUp;
