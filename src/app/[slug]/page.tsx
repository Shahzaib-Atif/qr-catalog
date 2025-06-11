import { notFound } from "next/navigation";
import { ProductDetails } from "@/components/ProductDetails";
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
  const repo: IProductRepository = new SupabaseProductRepository();

  const product = await repo.getProductBySlug(resolvedParams.slug);
  if (!product) return notFound();
  
  const signedUrl = await repo.getImageUrl(product?.image_url || "");

  return (
    <DefaultLayout>
      <CardsItem
        name={product.name}
        description={product.description}
        imageSrc={signedUrl || ""}
      />
    </DefaultLayout>
  );
}
