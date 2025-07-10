// app/product/[...params]/page.tsx

import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { ProductsPage } from "@/app/product/[...params]/ProductsPageNew";
import { Suspense } from "react";
import { metadataObj } from "@/utils/common/metadataObj";
import Loader from "@/components/common/Loader";
import { generateJwtToken } from "@/utils/common/generateJwtToken";

// Optional
export const metadata = metadataObj;

type Props = {
  params?: Promise<any>;
};

// Server-side component receives `params` automatically
export default async function ProductPage({ params }: Props) {
  const resolvedParams = await params;
  const [prodId, ownRef, clientRef] = resolvedParams?.params ?? [];

  return (
    <DefaultLayout>
      <Suspense fallback={<Loader />}>
        <ServerProductsPage
          prodId={prodId}
          ownRef={ownRef}
          clientRef={clientRef}
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

async function ServerProductsPage(props: ServerProductsPageProps) {
  // Destructure the props
  const { prodId, ownRef, clientRef } = props;

  const folderUrl = await getSharepointUrl();

  // Validate the required parameters
  if (!prodId || prodId.length != 6) {
    throw new Error("Missing product ID in URL");
  }
  if (!ownRef) {
    throw new Error("Missing Ref in URL");
  }

  // Decode clientRef and folderUrl
  const decodedclientRef = decodeParams(clientRef || "");

  // Validate ownRef
  const imageUrl = getImageUrl(ownRef);

  return (
    <ProductsPage
      prodId={prodId}
      ownRef={ownRef}
      clientRef={decodedclientRef || ""}
      imageSrc={imageUrl}
      folderUrl={folderUrl}
    />
  );
}

function decodeParams(originalVal: string) {
  // Encoding example => const encodedFolderUrl = encodeURIComponent(btoa(url));

  // declare clientRef and folderUrl
  let decodedValue = originalVal;

  // Decode clientRef
  try {
    decodedValue = atob(decodeURIComponent(originalVal || ""));
  } catch (e) {
    console.error(`Error decoding value '${originalVal}'. `);
  }

  return decodedValue;
}

// Function to get the image URL based on codivmacId
function getImageUrl(ownRef: string) {
  const codivmacId = ownRef?.slice(0, 6)?.toUpperCase(); // get first 6 characters

  // Validate that the first six characters are alphanumeric
  if (!/^[a-z0-9]+$/i.test(codivmacId)) {
    throw new Error(
      `Invalid codivmacId '${codivmacId}'. It should be 6 alphanumeric characters.`,
    );
  }

  const jwtToken = generateJwtToken("anyvalue");
  const imageUrl =
    process.env.NEXT_PUBLIC_LOCAL_SOURCE +
    "/images" +
    `/${codivmacId}` +
    `?token=${jwtToken}`;
  return imageUrl;
}

async function getSharepointUrl(entidade = '00045') {
  const res = await fetch(
    process.env.NEXT_PUBLIC_LOCAL_SOURCE +
    "/localdb/data" +
    `/${entidade}` +
    `?token=${generateJwtToken("any")}`,
  );
  const result = await res.json();
  return result as string
}
