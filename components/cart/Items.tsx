import { Dispatch, SetStateAction, useState } from "react";

import Button from "react-bootstrap/Button";
import Table from "./Table";

import Modal from "@/components/cart/Modal";

import { Cart } from "@/types/Cart";

export default function Items({
  cart_items,
  setItems,
  note,
  setNote,
}: {
  cart_items: Cart[];
  setItems: Dispatch<SetStateAction<Cart[]>>;
  setNote: Dispatch<SetStateAction<string>>;
  note: string;
}) {
  const [modalShow, setModalShow] = useState<boolean>(false);

  return (
    <>
      <Modal
        show={modalShow}
        setModalShow={setModalShow}
        note={note}
        setNote={setNote}
      />
      <div style={{ width: "100%" }}>
        <div className="d-flex justify-content-between">
          <h1 className="text-primary fs-2">
            Cart{" "}
            <span className="fs-6 text-secondary">
              ({cart_items.length} items)
            </span>
          </h1>
          <Button variant="dark" size="sm" onClick={() => setModalShow(true)}>
            Add Note
          </Button>
        </div>
        <Table items={cart_items} setItems={setItems} />
      </div>
    </>
  );
}
