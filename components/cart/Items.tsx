import Button from "react-bootstrap/Button";
import Table from "./Table";

import { useState } from "react";

import Modal from "./Modal";

export default function Items(props: any) {
  const [modalShow, setModalShow] = useState(false);
  const { cart_items, setItems, note, setNote } = props;

  return (
    <>
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
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
