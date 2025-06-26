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

  // const url =
  //   "https://pintobrasilsgps.sharepoint.com/sites/AreadeClienteDivmac/Documentos%20Partilhados/Forms/AllItems.aspx?id=%2Fsites%2FAreadeClienteDivmac%2FDocumentos%20Partilhados%2FBosch%20Chassis%20Systems%20India&viewid=e4ef741d%2De31b%2D47d6%2Da553%2D7105f160bc7a";
  // const encodedFolderUrl = encodeURIComponent(btoa(url));
  const decodedclientRef = atob(decodeURIComponent(clientRef || ""));
  const decodedFolderUrl = atob(decodeURIComponent(folderUrl || ""));

  // console.log("Original Folder URL:", url);
  // console.log("Encoded Folder URL:", encodedFolderUrl);
  // console.log("Decoded Folder URL:", decodedFolderUrl);

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
      clientRef={decodedclientRef || ""}
      imageSrc={signedUrl || undefined}
      folderUrl={decodedFolderUrl}
    />
  );
}
