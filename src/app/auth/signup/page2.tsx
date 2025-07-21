import React from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { metadataObj } from "@/utils/common/metadataObj";
import SignUpPage from "./components/Signup";

export const metadata = metadataObj;

const SignUp: React.FC = () => {
  return (
    <DefaultLayout>
      <SignUpPage />
    </DefaultLayout>
  );
};

export default SignUp;
