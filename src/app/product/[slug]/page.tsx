import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { ProductsPage } from "@/app/product/[slug]/ProductsPageNew";
import { Suspense } from "react";
import { metadataObj } from "@/utils/metadataObj";
import {
  getProductBySlug,
  getImageUrl,
} from "@/lib/actions/actions.server.product";
import Loader from "@/components/common/Loader";

export const metadata = metadataObj;
type Props = {
  params: Promise<{ slug: string }>;
};

// Main component for the product page
export default async function ProductPage({ params }: Props) {
  return (
    <DefaultLayout>
      <Suspense fallback={<Loader />}>
        <ServerProductsPage params={params} />
      </Suspense>
    </DefaultLayout>
  );
}

// Function to fetch product by slug and render the ProductsPage component
async function ServerProductsPage(props: {
  params: Promise<{ slug: string }>;
}) {
  // Ensure the slug is valid
  const resolvedParams = await props.params;
  const slug = resolvedParams.slug;
  if (!isValidAlphanumeric(slug)) {
    throw new Error(`The parameter '${slug}' does not seem valid!`);
  }

  // Fetch the product by slug
  const product = await getProductBySlug(slug);
  if (!product) {
    throw new Error(`No product found with the name '${slug}'!`);
  }

  // Fetch the signed URL for the product image
  const signedUrl = product ? await getImageUrl(product.image_url) : "";

  return (
    <ProductsPage
      name={product?.name}
      description={product?.description}
      imageSrc={signedUrl || undefined}
    />
  );
}

// Function to validate alphanumeric string with a minimum length
function isValidAlphanumeric(str: string, minLength: number = 6): boolean {
  const alphanumericRegex = /^[a-zA-Z0-9]+$/;
  return str.length >= minLength && alphanumericRegex.test(str);
}
