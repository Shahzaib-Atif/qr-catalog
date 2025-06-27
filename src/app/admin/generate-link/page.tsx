import React from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { metadataObj } from "@/utils/metadataObj";
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
  try {
    const user = await getUser();
    if (!user || !user.isAdmin) {
      return redirect("/auth/signin");
    }
    return <GenerateLinkPage />;
  } catch (error) {
    console.error("Error fetching user:", error);
    return redirect("/auth/signin");
  }
}
