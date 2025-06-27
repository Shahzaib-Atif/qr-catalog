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
  params?: Promise<any>;
};

// Server-side component receives `params` automatically
export default async function ProductPage({ params }: Props) {
  const resolvedParams = await params;
  const [prodId, ownRef, clientRef, folderUrl] = resolvedParams?.params ?? [];

  return (
    <DefaultLayout>
      <Suspense fallback={<Loader />}>
        <ServerProductsPage
          prodId={prodId}
          ownRef={ownRef}
          clientRef={clientRef}
          folderUrl={folderUrl}
        />
      </Suspense>
    </DefaultLayout>
  );
}

type ServerProductsPageProps = {
  prodId?: string;
  ownRef?: string;
  clientRef?: string;
  folderUrl?: string;
};

async function ServerProductsPage({
  prodId,
  ownRef,
  clientRef,
  folderUrl,
}: ServerProductsPageProps) {
  if (!prodId || prodId.length != 6) {
    throw new Error("Missing product ID in URL");
  }

  if (!ownRef) {
    throw new Error("Missing Ref in URL");
  }

  const { decodedclientRef, decodedFolderUrl } = decodeParams(
    clientRef || "undefined",
    folderUrl || "undefined",
  );

  const imageUrl = process.env.NEXT_PUBLIC_IMAGE_SOURCE + `/${prodId}`;
  console.log("NEXT_PUBLIC_IMAGE_URL: ", process.env.NEXT_PUBLIC_IMAGE_SOURCE);

  return (
    <ProductsPage
      prodId={prodId}
      ownRef={ownRef}
      clientRef={decodedclientRef || ""}
      imageSrc={imageUrl}
      folderUrl={decodedFolderUrl}
    />
  );
}

function decodeParams(clientRef: string, folderUrl: string) {
  // Encoding example => const encodedFolderUrl = encodeURIComponent(btoa(url));

  // declare clientRef and folderUrl
  let decodedclientRef = clientRef;
  let decodedFolderUrl = folderUrl;

  // Decode clientRef
  try {
    decodedclientRef = atob(decodeURIComponent(clientRef || ""));
  } catch (e) {
    console.error(`Error decoding clientRef '${clientRef}'. `, e);
  }

  // Decode folderUrl
  try {
    decodedFolderUrl = atob(decodeURIComponent(folderUrl || ""));
  } catch (e) {
    console.error(`Error decoding folderUrl '${folderUrl}'. `, e);
  }

  return { decodedclientRef, decodedFolderUrl };
}
