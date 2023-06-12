import SigninForm from "@/components/signup/Form";

import Link from "next/link";

export default function Signup() {
  return (
    <div
      className="mx-auto bg-white p-4 rounded"
      style={{ maxWidth: 800, width: "100%" }}
    >
      <div>
        <h1 className="text-center mb-2">
          <strong>Create an account!</strong>
        </h1>
        <p className="text-center">
          Already have an account? <Link href="/auth/signin">Sign in</Link>
        </p>
      </div>
      <div className="my-4">
        <SigninForm />
      </div>
    </div>
  );
}
