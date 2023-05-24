// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  sucess: string;
  message: string;
  data: Array<number | string | Array<any>>;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {
    user_id,
    firstname,
    lastname,
    email,
    address_line_1,
    address_line_2,
    city,
    contact,
  } = req.body;

  const response = await axios.post(
    `${process.env.NEXT_SERVER_URL}/api/v1/user_informations/update.php`,
    {
      user_id: user_id,
      firstname: firstname,
      lastname: lastname,
      email: email,
      address_line_1: address_line_1,
      address_line_2: address_line_2,
      city: city,
      contact: contact,
    }
  );

  const data = response.data;

  res.status(200).json(data);
}
