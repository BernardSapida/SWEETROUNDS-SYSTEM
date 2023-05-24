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
    firstname,
    lastname,
    address_line_1,
    address_line_2,
    city,
    contact,
    note,
    tax,
    shipping_fee,
    discount,
    user_id,
  } = req.body;

  const response = await axios.post(
    `${process.env.NEXT_SERVER_URL}/api/v1/orders/create.php`,
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

  const data = response.data;

  res.status(200).json(data);
}
