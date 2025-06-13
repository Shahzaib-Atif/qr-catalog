import DefaultLayout from "@/components/Layouts/DefaultLayout";
import HomePage from "@/components/HomePage";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "QR-Catalog Web App | Powered by Divmac",
  description: "This is made with Nextjs and Tailwind",
};

export default function Home() {
  return (
    <DefaultLayout>
      <HomePage />
    </DefaultLayout>
  );
}
