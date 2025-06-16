"use client";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

import Loader from "@/components/common/Loader";
import ListComponent from "@/components/ListComponent";
import { useEffect } from "react";
import { getCurrentUser } from "@/lib/actions/clientAuthActions";
import { getUser } from "@/lib/actions/authActions";

const Profile = () => {
  // const { loggedIn, loading: sessionLoading } = useSessionVerification();
  const { loggedIn, loading: sessionLoading } = {
    loggedIn: true,
    loading: false,
  }; // Mocking session verification for now

  useEffect(() => {
    getCurrentUser().then((res) => {
      console.log("client side user:", res.data);
    });

    getUser().then((res) => {
      console.log("server side user:", res.data);
    });
  }, []);

  return (
    <DefaultLayout>
      {sessionLoading && <Loader />}
      {!sessionLoading && loggedIn && <ListComponent></ListComponent>}
    </DefaultLayout>
  );
};

export default Profile;
