import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Table from "./Table";

import { Order } from "@/types/Order";

export default function OrderHistoryModal(props: any) {
  const { orders }: { orders: Order[] } = props;

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Order Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table orders={orders} />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
