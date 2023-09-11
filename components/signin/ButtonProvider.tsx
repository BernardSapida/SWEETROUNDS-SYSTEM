import Link from "next/link";
import style from "@/public/css/ButtonProvider.module.css";

export default function ButtonProvider(props: any) {
  const { name, icon, signInProvider } = props;

  return (
    <Link
      href=""
      className={`${style.btn_provider}`}
      onClick={() => signInProvider(name)}
    >
      {icon}
    </Link>
  );
}
