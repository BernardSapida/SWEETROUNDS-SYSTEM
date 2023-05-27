import axios from "axios";

export const name = async () => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_URL}/api/v1/editThis`,
    {
      key: value,
    }
  );

  return response.data;
};
