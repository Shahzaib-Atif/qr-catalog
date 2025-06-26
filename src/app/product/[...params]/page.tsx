// app/product/[...params]/page.tsx

import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { ProductsPage } from "@/app/product/[...params]/ProductsPageNew";
import { Suspense } from "react";
import { metadataObj } from "@/utils/metadataObj";
import {
  getProductBySlug,
  getImageUrl,
} from "@/lib/actions/actions.server.product";
import Loader from "@/components/common/Loader";

// Optional
export const metadata = metadataObj;

type Props = {
  params: { params?: string[] };
};

// Server-side component receives `params` automatically
export default async function ProductPage({ params }: Props) {
  await params;
  const [prodId, ownRef, clientRef, folder] = params?.params ?? [];
  console.log(clientRef, folder);

  return (
    <DefaultLayout>
      <Suspense fallback={<Loader />}>
        <ServerProductsPage
          prodId={prodId}
          ownRef={ownRef}
          clientRef={clientRef}
          folder={folder}
        />
      </Suspense>
    </DefaultLayout>
  );
}

type ServerProductsPageProps = {
  prodId?: string;
  ownRef?: string;
  clientRef?: string;
  folder?: string;
};

async function ServerProductsPage({
  prodId,
  ownRef,
  clientRef,
  folder,
}: ServerProductsPageProps) {
  if (!prodId || prodId.length != 6) {
    throw new Error("Missing product ID in URL");
  }

  const product = await getProductBySlug(prodId);
  if (!product) {
    throw new Error(`No product found with the name '${prodId}'`);
  }

  const signedUrl = product.image_url
    ? await getImageUrl(product.image_url)
    : "";

  return (
    <ProductsPage
      prodId={product.name}
      ownRef={ownRef || product.description}
      clientRef={clientRef || ""}
      imageSrc={signedUrl || undefined}
    />
  );
}
