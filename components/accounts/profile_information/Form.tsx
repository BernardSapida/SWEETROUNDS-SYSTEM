import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";

import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ContactForm(props: any) {
  const { user } = props;
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [email, setEmail] = useState();
  const [addressLine1, setAddressLine1] = useState();
  const [addressLine2, setAddressLine2] = useState();
  const [city, setCity] = useState();
  const [contact, setContact] = useState();

  useEffect(() => {
    const fetchUserInformation = async () => {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_URL}/api/v1/user_informations/read`,
        {
          user_id: user.id,
        }
      );

      const data = response.data.data;

      setFirstname(data.firstname);
      setLastname(data.lastname);
      setEmail(data.email);
      setAddressLine1(data.address_line_1);
      setAddressLine2(data.address_line_2);
      setCity(data.city);
      setContact(data.contact);
    };

    fetchUserInformation();
  }, [user.id]);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    if (notEmptyInputs()) {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_URL}/api/v1/user_informations/update`,
        {
          user_id: user.id,
          firstname: data.firstname,
          lastname: data.lastname,
          email: data.email,
          address_line_1: data.addressLine1,
          address_line_2: data.addressLine2,
          city: data.city,
          contact: data.contact,
        }
      );

      if (response.data.success) {
        Swal.fire({
          icon: "success",
          title: "Updated Successfully",
          text: "Your account information updated successfully",
        });
      }
    }
  };

  const notEmptyInputs = () => {
    return (
      firstname != "" &&
      lastname != "" &&
      email != "" &&
      addressLine1 != "" &&
      addressLine2 != "" &&
      city != "" &&
      contact != ""
    );
  };

  return (
    <div className="rounded border p-3 mb-2">
      <Form onSubmit={handleSubmit} id="contactForm">
        <div className="d-flex justify-content-between gap-3">
          <FloatingLabel className="mb-3 w-100" label="Firstname">
            <Form.Control
              type="text"
              name="firstname"
              placeholder="Firstname"
              defaultValue={firstname}
              required
            />
          </FloatingLabel>
          <FloatingLabel className="mb-3 w-100" label="Lastname">
            <Form.Control
              type="text"
              name="lastname"
              placeholder="Lastname"
              defaultValue={lastname}
              required
            />
          </FloatingLabel>
        </div>
        <FloatingLabel className="mb-3 w-100" label="Email">
          <Form.Control
            type="email"
            name="email"
            placeholder="Email"
            defaultValue={email}
            autoComplete="username"
            required
          />
        </FloatingLabel>
        <div className="d-flex justify-content-between gap-3">
          <FloatingLabel className="mb-3 w-100" label="Address Line 1">
            <Form.Control
              type="text"
              name="addressLine1"
              placeholder="Address Line 1"
              defaultValue={addressLine1}
              required
            />
          </FloatingLabel>
          <FloatingLabel className="mb-3 w-100" label="Address Line 2">
            <Form.Control
              type="text"
              name="addressLine2"
              placeholder="Address Line 2"
              defaultValue={addressLine2}
              required
            />
          </FloatingLabel>
        </div>
        <div className="d-flex justify-content-between gap-3">
          <FloatingLabel className="mb-3 w-100" label="City">
            <Form.Control
              type="text"
              name="city"
              placeholder="City"
              defaultValue={city}
              required
            />
          </FloatingLabel>
          <FloatingLabel className="mb-3 w-100" label="Contact">
            <Form.Control
              type="text"
              name="contact"
              placeholder="Contact"
              defaultValue={contact}
              required
            />
          </FloatingLabel>
        </div>
        <Button type="submit" className="d-block ms-auto" variant="dark">
          Update Account
        </Button>
      </Form>
    </div>
  );
}
