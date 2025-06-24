import { Product } from "@/types/product";
import Image from "next/image";

type Props = { username: string; products: Product[] | null };

const TableComponent = ({ username, products }: Props) => {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="px-4 py-6 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          All Products ({username})
        </h4>
      </div>

      {/* header */}
      <div className="grid grid-cols-8 rounded-sm border-t border-stroke bg-gray-2 px-4 py-4.5 dark:border-strokedark dark:bg-meta-4 md:px-6 2xl:px-7.5">
        <div className="col-span-3 flex items-center">
          <p className="font-medium underline">PRODUCT</p>
        </div>
        <div className="col-span-3 flex items-center">
          <p className="font-medium underline">DESCRIPTION</p>
        </div>
      </div>

      {/* rows */}
      {products?.map((product, key) => (
        <div
          className="grid grid-cols-8 border-t border-stroke px-4 py-4.5 dark:border-strokedark md:px-6 2xl:px-7.5"
          key={key}
        >
          <div className="col-span-3 flex items-center">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              {/* <div className="h-12.5 w-15 rounded-md">
                <Image
                  src={`/${product.image_url}`}
                  width={60}
                  height={50}
                  alt="Product"
                />
              </div> */}
              <p className="text-sm text-black dark:text-white">
                {product.name}
              </p>
            </div>
          </div>
          <div className="col-span-3 flex items-center">
            <p className="text-sm text-black dark:text-white">
              {product.description}
            </p>
          </div>
          <a
            className="col-span-2 flex items-center"
            href={`/product/${product.slug}`}
            target="_blank"
          >
            <p className="text-sm text-black dark:text-white">
              view details ...
            </p>
          </a>
        </div>
      ))}
    </div>
  );
};

export default TableComponent;
