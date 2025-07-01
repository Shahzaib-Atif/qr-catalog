import React from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { metadataObj } from "@/utils/common/metadataObj";
import { GenerateLinkPage } from "./GenerateLinkPage";
import { getUser } from "@/lib/actions/actions.server.auth";
import { redirect } from "next/navigation";

export const metadata = metadataObj;

export default function GenerateLink() {
  return (
    <DefaultLayout>
      <ServerGenerateLinkPage />
    </DefaultLayout>
  );
}

async function ServerGenerateLinkPage() {
  const user = await getUser();
  if (!user || !user.isAdmin) {
    throw new Error(
      "Only an admin can access this page. Please contact the website administrator.",
    );
  }
  return <GenerateLinkPage />;
}
