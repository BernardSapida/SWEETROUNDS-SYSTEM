import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Modal from "react-bootstrap/Modal";
import Table from "./Table";

import { useRef } from "react";

export default function OrderHistoryModal(props: any) {
  const { setNote, note, onHide } = props;
  const noteInput = useRef<HTMLTextAreaElement>(null);

  const save = () => {
    setNote(noteInput.current?.value);
    onHide();
  };

  return (
    <Modal {...props} backdrop="static" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Order Note</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FloatingLabel label="Order Note">
          <Form.Control
            as="textarea"
            ref={noteInput}
            defaultValue={note}
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
