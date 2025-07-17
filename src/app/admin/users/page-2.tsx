import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { metadataObj } from "@/utils/common/metadataObj";
import { Suspense } from "react";
import Loader from "@/components/common/Loader";
import UsersPage from "./UsersPage";
import { get } from "http";
import { getAllUsers } from "@/lib/actions/actions.server.auth";
import { generateJwtToken } from "@/utils/common/generateJwtToken";

export const metadata = metadataObj;

// Main component for the home page
export default async function Users() {
  return (
    <DefaultLayout>
      <Suspense fallback={<Loader />}>
        <ServerUsersPage />
      </Suspense>
    </DefaultLayout>
  );
}

async function ServerUsersPage() {
  const users = await getAllUsers();
  return <UsersPage users={users} />;
}
