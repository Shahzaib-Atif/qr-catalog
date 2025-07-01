import React from "react";
import HomePage from "./HomePage";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { metadataObj } from "@/utils/common/metadataObj";

export const metadata = metadataObj;

export default function ServerHomePage() {
  return (
    <DefaultLayout>
      <HomePage />
    </DefaultLayout>
  );
}
