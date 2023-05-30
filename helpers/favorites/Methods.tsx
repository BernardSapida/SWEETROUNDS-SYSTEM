import axios from "axios";

export const addDonutToCart = async (
  name: string | undefined,
  email: string | undefined,
  subject: string | undefined,
  message: string | undefined
) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_URL}/api/v1/contact_messages/create`,
    {
      name: name,
      email: email,
      subject: subject,
      message: message,
    }
  );

  return response.data;
};
