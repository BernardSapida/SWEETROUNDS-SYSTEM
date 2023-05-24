import { faker } from "@faker-js/faker";

interface Donut {
  product_number: string;
  name: string;
  flavor: string;
  price: number;
  quantity: number;
  quantity_sold: number;
  image: string;
  availability: string;
}

interface Data {
  data: Donut[];
}

const data: Data = {
  data: [],
};

let product_number = [];

for (let i = 1; i <= 100; i++) {
  const uuid = generateProductNumber();
  product_number.push(uuid);

  const donut = {
    product_number: uuid,
    name: faker.name.firstName(),
    flavor: [
      "Glazed",
      "Chocolate glazed",
      "Maple glazed",
      "Blueberry",
      "Strawberry",
      "Raspberry",
      "Vanilla",
      "Cinnamon sugar",
      "Powdered sugar",
      "Apple cider",
      "Pumpkin spice",
      "Coconut",
      "Lemon",
      "Mint chocolate",
      "Salted caramel",
      "Toffee",
      "Peanut butter",
      "Nutella",
      "Red velvet",
      "Matcha",
    ][Math.floor(Math.random() * 20)],
    price: [20, 21, 22, 23, 24, 25][Math.floor(Math.random() * 6)],
    quantity: Math.floor(Math.random() * 30) + 1,
    quantity_sold: Math.floor(Math.random() * 30) + 30,
    image: `${i}.png`,
    availability: ["Available", "Not Available"][Math.floor(Math.random() * 2)],
  };

  data.data.push(donut);
}

console.log(JSON.stringify(data));
console.log(product_number);

export function generateProductNumber() {
  const timestamp = Date.now().toString(); // Get current timestamp as a string
  const randomNum = Math.floor(Math.random() * 10000); // Generate a random number between 0 and 9999
  const invoiceId = timestamp + randomNum.toString().padStart(4, "0"); // Combine timestamp and random number

  return invoiceId;
}
