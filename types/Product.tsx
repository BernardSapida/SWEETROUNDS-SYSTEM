export interface Product {
  product_id: number;
  product_number: string;
  name: string;
  image: string;
  flavor: string;
  price: number;
  quantity: number;
  availability: string;
  cart_id: number;
  favorite_id: number;
  in_cart: number;
  in_favorite: number;
}
