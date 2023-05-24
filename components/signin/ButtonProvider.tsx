import Button from "react-bootstrap/Button";

export default function ButtonProvider(props: any) {
  return (
    <>
      <Button
        variant={props.variant}
        onClick={() => props.signInProvider(props.name)}
      >
        {props.title}
      </Button>
    </>
  );
}
