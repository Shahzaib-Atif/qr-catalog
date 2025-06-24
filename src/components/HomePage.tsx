import TableComponent from "./TableComponent";
import { getUser } from "@/lib/actions/actions.server.auth";
import { getAllProducts } from "@/lib/actions/actions.server.product";
import { redirect } from "next/navigation";

export default async function HomePage() {
  try {
    const user = await getUser();
    const products = await getAllProducts();
    return (
      <div className="flex min-w-80 flex-col gap-2 text-black dark:text-white">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-title-md2 font-semibold text-black dark:text-white">
            Home Page
          </h2>
        </div>

        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <TableComponent username={user?.name} products={products} />
        </div>
      </div>
    );
  } catch (error) {
    console.error(error);
    redirect("/auth/signin");
  }
}
