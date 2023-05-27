import DataTable from "react-data-table-component";
import Spinner from "react-bootstrap/Spinner";
import { IoMdAdd } from "react-icons/io";
import { FiMinus } from "react-icons/Fi";
import { BsFillTrashFill } from "react-icons/bs";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

import { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";

export default function Table(props: any) {
  const { items, setItems } = props;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const updateDonutQuantity = (row: Record<string, any>, event: any) => {
    const quantity = Number(event.target.value);

    if (quantity <= 1) event.target.value = 1;
    else {
      row.cart_quantity = quantity;

      updateItems(row);
      updateDonutCartQuantity(row.cart_id, row.cart_quantity);
    }
  };

  const updateItems = (row: Record<string, any>) => {
    const updatedCart = [...items];

    updatedCart.map((item: Record<string, any>) => {
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
      ...items.filter((item: Record<string, any>) => {
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
      selector: (row: Record<any, any>) => row.image,
      cell: (row: Record<any, any>) => (
        <Image
          src={`/donuts/${row["image"]}`}
          height={80}
          width={80}
          alt="Donut Image"
          className="my-2"
        ></Image>
      ),
    },
    {
      name: "Name",
      selector: (row: Record<any, any>) => row.name,
    },
    {
      name: "Quantity",
      selector: (row: Record<any, any>) => row.cart_quantity,
      cell: (row: Record<any, any>) => (
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
          {/* <Button variant="dark" size="sm">
            <IoMdAdd />
          </Button> */}
        </div>
      ),
    },
    {
      name: "Price",
      selector: (row: Record<any, any>) => row.price,
    },
    {
      name: "Total",
      selector: (row: Record<any, any>) => row.price * row.cart_quantity,
    },
    {
      name: "",
      cell: (row: Record<any, any>) => (
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
