import Button from "react-bootstrap/Button";
import style from "@/public/css/ButtonProvider.module.css";

export default function ButtonProvider(props: any) {
  const { name, icon, signInProvider } = props;

  return (
    <Button
      type="button"
      className={`${style.btn_provider}`}
      onClick={() => signInProvider(name)}
    >
      {icon}
    </Button>
  );
}
