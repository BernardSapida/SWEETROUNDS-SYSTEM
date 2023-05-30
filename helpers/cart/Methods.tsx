import { Setting } from "@/types/Setting";
import { UserInformation } from "@/types/UserInformation";
import axios from "axios";

export const fetchCart = async (user_id: number) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_URL}/api/v1/cart_items/read`,
    { user_id: user_id }
  );

  return response.data;
};

export const fetchSetting = async () => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_URL}/api/v1/settings/read`
  );

  return response.data;
};

export const readUserInformation = async (user_id: number) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_URL}/api/v1/user_informations/read`,
    {
      user_id: user_id,
    }
  );

  return response.data;
};

export const createOrderItem = async (
  quantity: number,
  product_id: number,
  order_id: number
) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_URL}/api/v1/order_items/create`,
    {
      quantity: quantity,
      product_id: product_id,
      order_id: order_id,
    }
  );
};

export const deleteCartItems = async (cart_id: number) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_URL}/api/v1/cart_items/delete`,
    { cart_id: cart_id }
  );
};

export const createCustomerOrder = async (
  userInformation: UserInformation,
  setting: Setting,
  note: string,
  user_id: number
) => {
  const { tax, shipping_fee, discount } = setting;
  const { firstname, lastname, address_line_1, address_line_2, city, contact } =
    userInformation;

  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_URL}/api/v1/orders/create`,
    {
      firstname: firstname,
      lastname: lastname,
      address_line_1: address_line_1,
      address_line_2: address_line_2,
      city: city,
      contact: contact,
      note: note,
      tax: tax,
      shipping_fee: shipping_fee,
      discount: discount,
      user_id: user_id,
    }
  );

  return response.data;
};
