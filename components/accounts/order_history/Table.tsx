import Image from "next/image";

import DataTable from "react-data-table-component";
import Spinner from "react-bootstrap/Spinner";

import { Product } from "@/types/Product";

export default function Table({ orders }: { orders: Product[] }) {
  const table_columns = [
    {
      name: "DONUT NAME",
      selector: (row: Product) => row.name,
      sortable: true,
    },
    {
      name: "FLAVOR",
      selector: (row: Product) => row.flavor,
      sortable: true,
    },
    {
      name: "IMAGE",
      selector: (row: Product) => row.image,
      sortable: true,
      cell: (row: Product) => (
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
      name: "QUANTITY",
      selector: (row: Product) => row.quantity,
      sortable: true,
    },
    {
      name: "PRICE",
      selector: (row: Product) => row.price,
      sortable: true,
    },
  ];

  return (
    <>
      <DataTable
        customStyles={{
          headCells: {
            style: {
              backgroundColor: "#212529",
              color: "white",
              fontSize: "16px",
              fontFamily: "system-ui, -apple-system",
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
        data={orders}
        pagination
        persistTableHead
        responsive={true}
        striped={true}
        highlightOnHover={true}
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
