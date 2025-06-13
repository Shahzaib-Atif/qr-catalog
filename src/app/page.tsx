import DefaultLayout from "@/components/Layouts/DefaultLayout";
import HomePage from "@/components/HomePage";
import { metadataObj } from "@/utils/metadataObj";

export const metadata = metadataObj;

export default function Home() {
  return (
    <DefaultLayout>
      <HomePage />
    </DefaultLayout>
  );
}
