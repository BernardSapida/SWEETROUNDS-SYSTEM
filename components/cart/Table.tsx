import DataTable from "react-data-table-component";
import { BsFillTrashFill } from "react-icons/bs";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";

import { Cart } from "@/types/Cart";

export default function Table(props: any) {
  const { items, setItems } = props;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const updateDonutQuantity = (row: Cart, event: any) => {
    const quantity = Number(event.target.value);

    if (quantity <= 0) event.target.value = 1;
    else {
      row.cart_quantity = quantity;

      updateItems(row);
      updateDonutCartQuantity(row.cart_id, row.cart_quantity);
    }
  };

  const updateItems = (row: Cart) => {
    const updatedCart = [...items];

    updatedCart.map((item: Cart) => {
      if (item.cart_id == row.cart_id) {
        item.cart_quantity = row.cart_quantity;
      }
    });

    setItems(updatedCart);
  };

  const updateDonutCartQuantity = async (cart_id: number, quantity: number) => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_URL}/api/v1/cart_items/update`,
      { cart_id: cart_id, quantity: quantity }
    );
  };

  const deleteDonutFromCart = async (cart_id: number) => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_URL}/api/v1/cart_items/delete`,
      { cart_id: cart_id }
    );
  };

  const removeToCart = (cart_id: number) => {
    const updatedCart = [
      ...items.filter((item: Cart) => {
        if (item.cart_id != cart_id) {
          return item;
        }
      }),
    ];
    setItems(updatedCart);
    deleteDonutFromCart(cart_id);
  };

  const table_columns = [
    {
      name: "Donut",
      selector: (row: Cart) => row.image,
      cell: (row: Cart) => (
        <Image
          src={`/donuts/${row.image}`}
          height={80}
          width={80}
          alt="Donut Image"
          className="my-2"
        ></Image>
      ),
    },
    {
      name: "Name",
      selector: (row: Cart) => row.name,
    },
    {
      name: "Quantity",
      selector: (row: Cart) => row.cart_quantity,
      cell: (row: Cart) => (
        <div>
          {/* <Button variant="dark" size="sm">
            <FiMinus />
          </Button> */}
          <Form.Control
            type="number"
            placeholder="0"
            style={{
              width: 50,
            }}
            defaultValue={row.cart_quantity}
            onChange={() => updateDonutQuantity(row, event)}
          />
        </div>
      ),
    },
    {
      name: "Price",
      selector: (row: Cart) => row.price,
    },
    {
      name: "Total",
      selector: (row: Cart) => row.price * row.cart_quantity,
    },
    {
      name: "",
      cell: (row: Cart) => (
        <div>
          <Button
            variant="danger"
            size="sm"
            onClick={() => removeToCart(row.cart_id)}
          >
            <BsFillTrashFill />
          </Button>
        </div>
      ),
    },
  ];

  return (
    <>
      <DataTable
        customStyles={{
          headCells: {
            style: {
              color: "gray",
              fontSize: "16px",
              fontFamily: "system-ui, -apple-system",
              fontWeight: 400,
            },
          },
          rows: {
            style: {
              fontSize: "16px",
              fontFamily: "system-ui, -apple-system",
            },
          },
        }}
        columns={table_columns}
        data={items}
        pagination
        persistTableHead
        responsive={true}
        highlightOnHover={true}
        progressPending={loading}
        paginationRowsPerPageOptions={[10]}
        progressComponent={
          <span className="d-flex align-items-center">
            <Spinner animation="grow" className="my-3" size="sm" /> &nbsp;
            Loading...
          </span>
        }
      />
    </>
  );
}
