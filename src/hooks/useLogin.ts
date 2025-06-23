import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getUser } from "@/lib/actions/actions.client.auth";
import { GetUserDTO, GetUserSchema } from "@/lib/dtos/user.dto";

export function useLogin() {
  const router = useRouter();

  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, SetUser] = useState<GetUserDTO>();

  useEffect(() => {
    const handleLogin = async () => {
      try {
        const user = await getUser();
        if (user) {
          // Validate with Zod
          const parsedUser = GetUserSchema.safeParse({name: user.user.user_metadata.display_name, email: user.user.email});
          // console.log("user:", parsedUser);
          if(parsedUser.success) {
            SetUser(parsedUser.data);
          }
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

  return { loggedIn, user, loading };
}
