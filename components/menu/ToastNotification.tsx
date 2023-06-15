import { useState } from "react";

import ToastContainer from "react-bootstrap/ToastContainer";
import { BsBagCheck, BsBagDash } from "react-icons/bs";
import Toast from "react-bootstrap/Toast";

export default function ToastNotification(props: any) {
  return (
    <>
      <ToastContainer
        className="position-fixed mb-3 me-3"
        position="bottom-end"
      >
        {props.toastType.split("_")[0] === "add" ? (
          <Toast
            onClose={() => props.toggleToast(false)}
            show={props.show}
            delay={2000}
            autohide
          >
            <Toast.Header>
              <BsBagCheck className="text-success mb-1" />
              <strong className="ms-1 me-auto">Successfully added</strong>
            </Toast.Header>
            <Toast.Body>
              Donut successfully added to your{" "}
              {props.toastType.split("_")[1] == "cart" ? "cart" : "favorite"}!
            </Toast.Body>
          </Toast>
        ) : (
          <Toast
            onClose={() => props.toggleToast(false)}
            show={props.show}
            delay={2000}
            autohide
          >
            <Toast.Header>
              <BsBagDash className="text-danger mb-1" />
              <strong className="ms-1 me-auto">Successfully removed</strong>
            </Toast.Header>
            <Toast.Body>
              Donut successfully removed to your{" "}
              {props.toastType.split("_")[1] == "cart" ? "cart" : "favorite"}!
            </Toast.Body>
          </Toast>
        )}
      </ToastContainer>
    </>
  );
}
