import { faker } from "@faker-js/faker";

interface Order {
  firstname: string;
  lastname: string;
  address_line_1: string;
  address_line_2: string;
  city: string;
  contact: string;
  note: string;
  tax: number;
  shipping_fee: number;
  discount: number;
  user_id: number;
}

interface Data {
  data: Order[];
}

const data: Data = {
  data: [],
};

for (let i = 1; i <= 100; i++) {
  const order = {
    firstname: faker.name.firstName(),
    lastname: faker.name.lastName(),
    address_line_1: faker.address.street(),
    address_line_2: faker.address.secondaryAddress(),
    city: faker.address.city(),
    contact: faker.phone.number("09#########"),
    note: faker.lorem.paragraph(),
    tax: 15,
    shipping_fee: 15,
    discount: 20,
    user_id: i,
  };

  data.data.push(order);
}

console.log(JSON.stringify(data));
