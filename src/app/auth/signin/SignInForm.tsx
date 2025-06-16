import ErrorAlert from "@/components/ErrorAlert";
import EmailIcon from "@/components/Icons/EmailIcon";
import PasswordIcon from "@/components/Icons/PasswordIcon";
import SpinnerOne from "@/components/Spinners/SpinnerOne";
import Link from "next/link";

export default function SignInForm(props: {
  handleSubmit: (event: any) => Promise<void>;
  loading: boolean;
  error: string;
}) {
  const { handleSubmit, loading, error } = props;

  return (
    <form onSubmit={handleSubmit}>
      {/* Username or Email */}
      <div className="mb-4">
        <label className="mb-2.5 block font-medium text-black dark:text-white">
          Email
        </label>
        <div className="relative">
          <input
            type="text"
            name="email"
            required
            autoComplete="username"
            placeholder="Enter your email"
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
            type="password"
            name="password"
            required
            autoComplete="current-password"
            placeholder="6+ Characters, 1 Capital letter"
            className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
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
            value="Sign In"
            className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
          />
        </div>
      </div>

      {/* dont have an account? */}
      <div className="mb-6 mt-4 text-center">
        <p>
          Don’t have any account?{" "}
          <Link href="/auth/signup" className="text-primary">
            Sign Up
          </Link>
        </p>
      </div>

      {loading && <SpinnerOne />}
      {error && <ErrorAlert error={error} />}
    </form>
  );
}
