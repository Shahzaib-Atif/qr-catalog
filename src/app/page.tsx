import DefaultLayout from "@/components/Layouts/DefaultLayout";
import HomePage from "@/components/HomePage";
import { metadataObj } from "@/utils/metadataObj";
import { getUser } from "@/lib/actions/actions.server.auth";
import { Suspense } from "react";
import Loader from "@/components/common/Loader";
import { getAllProducts } from "@/lib/actions/actions.server.product";

export const metadata = metadataObj;

export default async function Home() {
  return (
    <DefaultLayout>
      <Suspense fallback={<Loader />}>
        <ServerHomePage />
      </Suspense>
    </DefaultLayout>
  );
}

async function ServerHomePage() {
  const user = await getUser();
  const products = await getAllProducts();
  return <HomePage user={user} products={products} />;
}
