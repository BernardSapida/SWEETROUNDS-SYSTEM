import SigninForm from "@/components/signin/Form";

import Link from "next/link";

export default function Signin() {
  return (
    <div
      className="mx-auto bg-white p-4 rounded"
      style={{ maxWidth: 800, width: "100%" }}
    >
      <div>
        <h1 className="text-center mb-2">
          <strong>Welcome back!</strong>
        </h1>
        <p className="text-center">
          {"Don't"} have an account yet?{" "}
          <Link href="/signup">Create account</Link>
        </p>
      </div>
      <div className="my-4">
        <SigninForm />
      </div>
    </div>
  );
}
