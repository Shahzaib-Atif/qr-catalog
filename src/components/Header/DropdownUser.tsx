import { useEffect, useRef, useState, useTransition } from "react";
import Link from "next/link";
import LogoutIcon from "@/components/Icons/Logout";
import LinkIcon from "@/components/Icons/LinkIcon";
import UserCircleIcon from "../Icons/UserCircle";
import { signOut } from "@/lib/services/user.service";
import { useRouter } from "next/navigation";

const DropdownUser = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [, startTransition] = useTransition();

  const trigger = useRef<any>(null);
  const dropdown = useRef<any>(null);
  const router = useRouter()

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  // call signout from user.service and redirect to login page
  const handleLogout = async () => {
    try {
      startTransition(() => {
        signOut().then(() => {
          router.push('/auth/signin')
        })
      });
    } catch (error: any) {
      console.log("error: ", error);
    }
  };

  return (
    <div className="relative">
      <Link
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4"
        href="#"
      >
        <span className="my-auto rounded-full">
          <UserCircleIcon />
        </span>
      </Link>

      {/* <!-- Dropdown Start --> */}
      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute right-0 mt-5 flex w-50 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark ${dropdownOpen === true ? "block" : "hidden"
          }`}
      >
        <ul className="flex flex-col gap-5 border-b border-stroke px-6 py-5 dark:border-strokedark">
          {/* generate link */}
          <li>
            <Link
              href="/admin/generate-link"
              className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
            >
              <LinkIcon />
              Generate link
            </Link>
          </li>
          {/* Logout */}
          <li>
            <Link
              // href="/auth/signin"
              href="#"
              onClick={handleLogout}
              className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
            >
              <LogoutIcon />
              Log out
            </Link>
          </li>
        </ul>
      </div>
      {/* <!-- Dropdown End --> */}
    </div>
  );
};

export default DropdownUser;
