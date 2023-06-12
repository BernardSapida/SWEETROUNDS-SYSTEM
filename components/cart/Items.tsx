import { Dispatch, SetStateAction, useState } from "react";

import Placeholder from "react-bootstrap/Placeholder";
import Button from "react-bootstrap/Button";
import Table from "./Table";

import Modal from "@/components/cart/Modal";

import { Cart } from "@/types/Cart";

import style from "@/public/css/cart.module.css";

export default function Items({
  loading,
  cart_items,
  setItems,
  note,
  setNote,
}: {
  loading: boolean;
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
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h1 className={`${style.title} fs-2`}>
            {loading ? (
              <Placeholder animation="glow">
                <Placeholder
                  style={{
                    width: 100,
                    borderRadius: 5,
                  }}
                />
                <Placeholder
                  className="ms-2"
                  style={{
                    width: 100,
                    height: 5,
                    borderRadius: 5,
                  }}
                  bg="dark"
                />
              </Placeholder>
            ) : (
              <>
                Cart{" "}
                <span className="fs-6 text-secondary">
                  ({cart_items.length} items)
                </span>
              </>
            )}
          </h1>
          {loading ? (
            <Placeholder.Button
              animation="glow"
              variant="dark"
              style={{ height: 40, width: 80 }}
            />
          ) : (
            <Button variant="dark" size="sm" onClick={() => setModalShow(true)}>
              Add Note
            </Button>
          )}
        </div>
        {loading ? (
          <Placeholder animation="glow">
            <Placeholder
              className="w-100 mt-2"
              style={{
                height: 460,
                borderRadius: 5,
              }}
              bg="secondary"
            />
          </Placeholder>
        ) : (
          <Table items={cart_items} setItems={setItems} />
        )}
      </div>
    </>
  );
}
