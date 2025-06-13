import React from "react";
import SignInPage from "@/app/auth/signin/Signin";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

const Signin = () => {
  return (
    <DefaultLayout>
      <SignInPage />
    </DefaultLayout>
  );
};

export default Signin;
