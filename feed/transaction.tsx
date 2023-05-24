import { faker } from "@faker-js/faker";

interface Transaction {
  invoice_id: string;
  note: string;
  tax: number;
  discount: number;
  admin_id: number;
}

interface Data {
  data: Transaction[];
}

const data: Data = {
  data: [],
};

function generateInvoiceId() {
  const timestamp = Date.now().toString(); // Get current timestamp as a string
  const randomNum = Math.floor(Math.random() * 10000); // Generate a random number between 0 and 9999
  const invoiceId = timestamp + randomNum.toString().padStart(4, "0"); // Combine timestamp and random number

  return invoiceId;
}

for (let i = 1; i <= 100; i++) {
  const transaction = {
    invoice_id: generateInvoiceId(),
    note: faker.lorem.paragraph(),
    tax: 15,
    discount: 20,
    admin_id: i,
  };

  data.data.push(transaction);
}

console.log(JSON.stringify(data));

// for (let i = 1; i <= 100; i++) {
//   console.log(
//     `UPDATE orders SET created_at='2023-${(Math.floor(Math.random() * 12) + 1)
//       .toString()
//       .padStart(2, "0")}-10 16:39:21}' WHERE id = ${i};`
//   );
// }
