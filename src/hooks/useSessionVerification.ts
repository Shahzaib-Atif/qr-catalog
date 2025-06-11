import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export function useSessionVerification() {
  const router = useRouter();

  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleSessionVerification = async () => {
      try {
        const response = await fetch("/api/auth/verifySession");
        if (response.ok) {
          const data = await response.json();
          setLoggedIn(true);
        } else {
          console.log("User not authenticated");
          setLoggedIn(false);
          // Redirect to login page if user is not authenticated
          router.push("/auth/signin");
        }
      } catch (error) {
        console.error("Error verifying session:", error);
      } finally {
        setLoading(false);
      }
    };

    handleSessionVerification();

    return () => {
      // cleanup function
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { loggedIn, loading };
}
