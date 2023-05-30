import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import { Dispatch, SetStateAction, useRef } from "react";

export default function OrderHistoryModal(props: {
  show: boolean;
  note: string;
  setNote: Dispatch<SetStateAction<string>>;
  setModalShow: Dispatch<SetStateAction<boolean>>;
}) {
  const noteInput = useRef<HTMLTextAreaElement>(null);

  const save = () => {
    props.setNote(noteInput.current?.value!);
    props.setModalShow(false);
  };

  return (
    <Modal
      show={props.show}
      onHide={() => props.setModalShow(false)}
      backdrop="static"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Order Note</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FloatingLabel label="Order Note">
          <Form.Control
            as="textarea"
            ref={noteInput}
            defaultValue={props.note}
            style={{ height: "200px" }}
          />
        </FloatingLabel>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="dark" onClick={() => save()}>
          Okay
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
