import { metadataObj } from "@/utils/common/metadataObj";
import { redirect } from "next/navigation";

export const metadata = metadataObj;

// Main component for the home page
export default async function Home() {
  redirect("/home");
}
