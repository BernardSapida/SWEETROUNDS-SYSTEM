import SigninForm from "@/components/signin/Form";

import Link from "next/link";

export default function Signin() {
  return (
    <div className="mx-auto" style={{ maxWidth: 800, width: "100%" }}>
      <div>
        <h1 className="text-center">
          <strong>Welcome back!</strong>
        </h1>
        <p className="text-center">
          Do not have an account yet? <Link href="/signup">Create account</Link>
        </p>
      </div>
      <div className="bg-white my-4 rounded">
        <SigninForm />
      </div>
    </div>
  );
}
