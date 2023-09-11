import { FaFacebookF, FaGithub } from "react-icons/fa";
import { AiOutlineGoogle } from "react-icons/ai";

import { signIn } from "next-auth/react";

import ButtonProvider from "@/components/signin/ButtonProvider";

export default function SignInProviders(props: any) {
  const signInProvider = async (providerName: string) => {
    const res = await signIn(providerName, {
      callbackUrl: `https://sweetrounds.vercel.app/menu`,
    });
  };

  return (
    <div className="d-flex align-items-center gap-2 mx-auto">
      <ButtonProvider
        name="google"
        signInProvider={signInProvider}
        icon={<AiOutlineGoogle style={{ fontSize: 20, placeSelf: "center" }} />}
      />
      <ButtonProvider
        name="facebook"
        signInProvider={signInProvider}
        icon={<FaFacebookF style={{ fontSize: 20, placeSelf: "center" }} />}
      />
      <ButtonProvider
        name="github"
        signInProvider={signInProvider}
        icon={<FaGithub style={{ fontSize: 20, placeSelf: "center" }} />}
      />
    </div>
  );
}
