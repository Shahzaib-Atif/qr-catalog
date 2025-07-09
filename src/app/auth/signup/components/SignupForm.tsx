import Link from "next/link";
import ErrorAlert from "@/components/ErrorAlert";
import EmailIcon from "@/components/Icons/EmailIcon";
import PasswordIcon from "@/components/Icons/PasswordIcon";
import UserIcon from "@/components/Icons/UserIcon";
import SpinnerOne from "@/components/Spinners/SpinnerOne";
import SuccessAlert from "@/components/SuccessAlert";

export default function SignupForm(props: {
  handleSubmit: (event: any) => Promise<void>;
  loading: boolean;
  success: string;
  error: string;
}) {
  const { handleSubmit, loading, success, error } = props;

  return (
    <form onSubmit={handleSubmit}>
      {/* Name */}
      <div className="mb-4">
        <label className="mb-2.5 block font-medium text-black dark:text-white">
          Username
        </label>
        <div className="relative">
          <input
            type="text"
            name="username"
            required
            placeholder="Enter name"
            autoComplete="username"
            className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />

          <span className="absolute right-4 top-4">
            <UserIcon />
          </span>
        </div>
      </div>

      {/* Email */}
      <div className="mb-4">
        <label className="mb-2.5 block font-medium text-black dark:text-white">
          Email
        </label>
        <div className="relative">
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email"
            autoComplete="email"
            className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />

          <span className="absolute right-4 top-4">
            <EmailIcon />
          </span>
        </div>
      </div>

      {/* Password */}
      <div className="mb-4">
        <label className="mb-2.5 block font-medium text-black dark:text-white">
          Password
        </label>
        <div className="relative">
          <input
            type="password"
            name="password"
            required
            autoComplete="current-password"
            placeholder="Enter your password"
            className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />

          <span className="absolute right-4 top-4">
            <PasswordIcon />
          </span>
        </div>
      </div>

      {/* Submit button */}
      <div className="mb-10 mt-10">
        <div className="mb-5">
          <input
            type="submit"
            value="Create account"
            className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
          />
        </div>
      </div>

      {/* already have an account? */}
      <div className="mb-6 mt-4 text-center">
        <p>
          Already have an account?{" "}
          <Link href="/auth/signin" className="text-primary">
            Sign in
          </Link>
        </p>
      </div>

      {loading ? (
        <SpinnerOne />
      ) : error ? (
        <ErrorAlert error={error} />
      ) : success ? (
        <SuccessAlert msg={success} />
      ) : null}
    </form>
  );
}
