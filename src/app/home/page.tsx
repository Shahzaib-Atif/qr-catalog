import DefaultLayout from "@/components/Layouts/DefaultLayout";
import HomePage from "@/app/home/HomePage";
import { metadataObj } from "@/utils/metadataObj";
import { Suspense } from "react";
import Loader from "@/components/common/Loader";

export const metadata = metadataObj;

// Main component for the home page
export default async function Home() {
  return (
    <DefaultLayout>
      <Suspense fallback={<Loader />}>
        <HomePage />
      </Suspense>
    </DefaultLayout>
  );
}
