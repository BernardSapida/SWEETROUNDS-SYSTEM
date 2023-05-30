import axios from "axios";

export const fetchOrderHistory = async (user_id: number) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_URL}/api/v1/orders/user_order_history`,
    {
      user_id: user_id,
    }
  );

  return response.data;
};

export const updateUserInfo = async (
  user_id: number,
  data: Record<string, any>
) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_URL}/api/v1/user_informations/update`,
    {
      user_id: user_id,
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      address_line_1: data.address_line_1,
      address_line_2: data.address_line_2,
      city: data.city,
      contact: data.contact,
    }
  );

  return response.data;
};

export const fetchFavoriteDonut = async (user_id: string) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_URL}/api/v1/products/favorites`,
    {
      id: user_id,
    }
  );

  return response.data;
};

export const updatePassword = async (
  user_id: number,
  password: string | undefined,
  confirmPassword: string | undefined
) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_URL}/api/v1/users/update_password`,
    {
      user_id: user_id,
      password: password,
      confirmPassword: confirmPassword,
    }
  );

  return response.data;
};
