import { notFound } from "next/navigation";
import { SupabaseProductRepository } from "@/lib/repositories/products/supabase-product-repository";
import { IProductRepository } from "@/lib/repositories/interfaces";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { CardsItem } from "@/components/CardsItem";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  if(!isValidAlphanumeric(slug)) {
    throw new Error(`The parameter '${slug}' does not seem valid!`);
  }
  
  const repo: IProductRepository = new SupabaseProductRepository();
  const product = await repo.getProductBySlug(slug);
  if (!product) {
    throw new Error(`No product found with the name '${slug}'!`);
  }

  const signedUrl = (await repo.getImageUrl(product.image_url)) || "";
  // // If product is not found, we return a default image
  // const signedUrl = product
  //   ? await repo.getImageUrl(product?.image_url)
  //   : "/images/image-not-found.jpg";

  return (
    <DefaultLayout>
      <CardsItem
        name={product?.name}
        // description={product?.description || "Some problem occurred. Contact admin."}
        description={product?.description}
        imageSrc={signedUrl}
      />
    </DefaultLayout>
  );
}

// Function to validate alphanumeric string with a minimum length
function isValidAlphanumeric(str: string, minLength: number = 6): boolean {
  const alphanumericRegex = /^[a-zA-Z0-9]+$/;
  return str.length >= minLength && alphanumericRegex.test(str);
}