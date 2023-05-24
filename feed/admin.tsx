import { faker } from "@faker-js/faker";

interface Employee {
  employee_firstname: string;
  employee_lastname: string;
  email: string;
  password: string;
  role: string;
}

interface Data {
  data: Employee[];
}

const data: Data = {
  data: [],
};

for (let i = 0; i < 100; i++) {
  const employee = {
    employee_firstname: faker.name.firstName(),
    employee_lastname: faker.name.lastName(),
    email: faker.internet.email(),
    password: "@Password123",
    role: ["Manager", "Order Fulfillment Specialist", "Cashier"][
      Math.floor(Math.random() * 3)
    ],
  };
  data.data.push(employee);
}

console.log(JSON.stringify(data));
