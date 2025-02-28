"use client";
import InputPassword from "@/components/ui/InputPassword";
import InputText from "@/components/ui/InputText";
import Link from "next/link";

type FormValues = {
  email: string;
  password: string;
};

const Login = () => {
  return (
    <div className="my-auto">
      <h2 className="text-3xl font-bold text-accent mb-5">Welcome Back.</h2>

      <form className="space-y-4">
        <InputText name="email" label="Email" placeholder="Enter your email" />

        <InputPassword
          name="password"
          label="Password"
          placeholder="Enter your password"
        />

        <Link
          href="reset-password-request"
          className="text-primary text-sm hover:underline block text-end"
        >
          Forgot Password ?
        </Link>

        <button type="submit" className="btn btn-accent block w-full">
          Log in
        </button>
      </form>
    </div>
  );
};

export default Login;
