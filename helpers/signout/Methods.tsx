import axios from "axios";

export const signoutAccount = async (email: string) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_URL}/api/v1/users/signout`,
    { email: email }
  );

  return response.data;
};
