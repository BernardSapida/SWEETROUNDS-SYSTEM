import SigninForm from "@/components/signup/Form";

import Link from "next/link";

export default function Signup() {
  return (
    <div className="mx-auto" style={{ maxWidth: 800, width: "100%" }}>
      <div>
        <h1 className="text-center">
          <strong>Create an account!</strong>
        </h1>
        <p className="text-center">
          Already have an account? <Link href="/signup">Sign in</Link>
        </p>
      </div>
      <div className="bg-white my-4 rounded">
        <SigninForm />
      </div>
    </div>
  );
}
