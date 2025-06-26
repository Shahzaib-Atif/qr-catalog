import React from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { metadataObj } from "@/utils/metadataObj";
import { GenerateLinkPage } from "./GenerateLinkPage";

export const metadata = metadataObj;

const Signin = () => {
  return (
    <DefaultLayout>
      <GenerateLinkPage />
    </DefaultLayout>
  );
};

export default Signin;
