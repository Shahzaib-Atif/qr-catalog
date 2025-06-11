import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { metadataObj } from "@/js/constants";
import HomePage from "@/components/HomePage";

export const metadata: Metadata = metadataObj;

export default function Home() {
  return (
    <DefaultLayout>
      <HomePage />
    </DefaultLayout>
  );
}
