import axios from "axios";

export const fetchCart = async (user_id: string) => {
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
