import ButtonProvider from "@/components/signin/ButtonProvider";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

export default function SignInProviders(props: any) {
  const router = useRouter();

  const signInProvider = async (providerName: string) => {
    props.open();
    const res = await signIn(providerName, {
      callbackUrl: `https://sweetrounds.vercel.app/menu`,
    });
    props.close();
  };

  return (
    <>
      <ButtonProvider
        type="button"
        title="Sign In with Google"
        variant="default"
        name="google"
        signInProvider={signInProvider}
      />
      <ButtonProvider
        type="button"
        title="Sign In with Facebook"
        variant="gradient"
        name="facebook"
        from={["blue", "blue"]}
        signInProvider={signInProvider}
      />
      <ButtonProvider
        type="button"
        title="Sign In with Github"
        variant="gradient"
        name="github"
        from={["black", "black"]}
        signInProvider={signInProvider}
      />
    </>
  );
}
