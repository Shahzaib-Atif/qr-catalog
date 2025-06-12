"use client";
import Image from "next/image";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { useSessionVerification } from "@/hooks/useSessionVerification";

import Loader from "@/components/common/Loader";
import ListComponent from "@/components/ListComponent";

const Profile = () => {
  // const { loggedIn, loading: sessionLoading } = useSessionVerification();
  const { loggedIn, loading: sessionLoading } = {loggedIn: true, loading: false}; // Mocking session verification for now


  return (
    <DefaultLayout>
      {sessionLoading && <Loader />}
      {!sessionLoading && loggedIn && (
        <ListComponent></ListComponent>
      )}
    </DefaultLayout>
  );
};

export default Profile;
