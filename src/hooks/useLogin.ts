import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getUser } from "@/lib/actions/authActions";

export function useLogin() {
  const router = useRouter();

  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLogin = async () => {
      try {
        const user = await getUser();
        console.log("user:", user);
        if (user) {
          setLoggedIn(true);
        } else {
          console.log("User not authenticated");
          setLoggedIn(false);
          // Redirect to login page if user is not authenticated
          router.push("/auth/signin");
        }
      } catch (error) {
        console.error("Error verifying session:", error);
        router.push("/auth/signin");
      } finally {
        setLoading(false);
      }
    };

    handleLogin();

    return () => {
      // cleanup function
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { loggedIn, loading };
}
