import React from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { metadataObj } from "@/utils/common/metadataObj";
import { GenerateLinkPage } from "./GenerateLinkPage";
import { getUser } from "@/lib/actions/actions.server.auth";

export const metadata = metadataObj;

export default function GenerateLink() {
  return (
    <DefaultLayout>
      <GenerateLinkPage />
    </DefaultLayout>
  );
}
