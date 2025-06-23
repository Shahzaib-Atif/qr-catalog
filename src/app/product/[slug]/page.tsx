import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { ProductsPage } from "@/app/product/[slug]/ProductsPage";
import { cache } from "react";
import { metadataObj } from "@/utils/metadataObj";
import { getProductBySlug, getImageUrl } from "@/lib/actions/actions.server.product";

export const metadata = metadataObj;

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Ensure the slug is valid
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  if (!isValidAlphanumeric(slug)) {
    throw new Error(`The parameter '${slug}' does not seem valid!`);
  }

  const { product, signedUrl } = await getProductData(slug);

  return (
    <DefaultLayout>
      <ProductsPage
        name={product?.name}
        description={product?.description}
        imageSrc={signedUrl || undefined}
      />
    </DefaultLayout>
  );
}

// Function to validate alphanumeric string with a minimum length
function isValidAlphanumeric(str: string, minLength: number = 6): boolean {
  const alphanumericRegex = /^[a-zA-Z0-9]+$/;
  return str.length >= minLength && alphanumericRegex.test(str);
}

// Function to fetch product data by slug with caching
const getProductData = cache(async (slug: string) => {
  // try {
  //   const user = await getUser();
  //   console.log("user: ", user);
  // } catch (error) {
  //   console.error("Error fetching user:", error);
  // }

  const product = await getProductBySlug(slug);
  if (!product) {
    throw new Error(`No product found with the name '${slug}'!`);
  }

  const signedUrl = product ? await getImageUrl(product.image_url) : "";
  return { product, signedUrl };
});
