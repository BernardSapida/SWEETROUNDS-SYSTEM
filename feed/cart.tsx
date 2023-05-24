import { faker } from "@faker-js/faker";

interface Cart {
  items: Array<any>;
  user_id: number;
}

interface Data {
  carts: Cart[];
}

const data: Data = {
  carts: [],
};

let getSampleCart = () => {
  let cart: any = {};
  let randomNumber = Math.floor(Math.random() * 10) + 1;

  for (let i = 1; i < randomNumber + 6; i++) {
    let number = Math.floor(Math.random() * 99) + 1;

    if (number in cart) continue;

    cart[number] = {
      quantity: Math.floor(Math.random() * 10) + 1,
      price: Math.floor(Math.random() * 5) + 20,
    };
  }

  return cart;
};

for (let i = 51; i <= 100; i++) {
  const cart = {
    items: getSampleCart(),
    user_id: i,
  };

  data.carts.push(cart);
}
