import ErrorAlert from "@/components/ErrorAlert";
import EmailIcon from "@/components/Icons/EmailIcon";
import EyeIcon from "@/components/Icons/EyeIcon";
import EyeSlashIcon from "@/components/Icons/EyeSlashIcon";
import PasswordIcon from "@/components/Icons/PasswordIcon";
import SpinnerOne from "@/components/Spinners/SpinnerOne";
import Link from "next/link";
import { useState } from "react";

export default function SignInForm(props: {
  handleSubmit: (event: any) => Promise<void>;
  loading: boolean;
  error: string;
}) {
  const { handleSubmit, loading, error } = props;
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form onSubmit={handleSubmit}>
      {/* Username or Email */}
      <div className="mb-4">
        <label className="mb-2.5 block font-medium text-black dark:text-white">
          Username / Email
        </label>
        <div className="relative">
          <input
            type="text"
            name="email"
            required
            autoComplete="username"
            placeholder="Enter your username or email"
            className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />

          <span className="absolute right-4 top-4">
            <EmailIcon />
          </span>
        </div>
      </div>

      {/* Password */}
      <div className="mb-6">
        <label className="mb-2.5 block font-medium text-black dark:text-white">
          Password
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            required
            autoComplete="current-password"
            placeholder="Enter your password"
            className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            {showPassword ? (
              <EyeSlashIcon />
            ) : (
              <EyeIcon />
            )}
          </button>
        </div>
      </div>

      {/* Submit button */}
      <div className="mb-10 mt-10">
        <div className="mb-5">
          <input
            type="submit"
            value="Sign In"
            className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
          />
        </div>
      </div>

      {/* dont have an account? */}
      {/* <div className="mb-6 mt-4 text-center">
        <p>
          Don’t have any account?{" "}
          <Link href="/auth/signup" className="text-primary">
            Sign Up
          </Link>
        </p>
      </div> */}

      {loading ? <SpinnerOne /> : error ? <ErrorAlert error={error} /> : null}
    </form>
  );
}
