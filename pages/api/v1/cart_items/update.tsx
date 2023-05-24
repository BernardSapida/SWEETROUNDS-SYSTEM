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
  const { cart_id, quantity } = req.body;

  const response = await axios.post(
    `${process.env.NEXT_SERVER_URL}/api/v1/cart_items/update.php`,
    {
      cart_id: cart_id,
      quantity: quantity,
    }
  );

  const data = response.data;

  res.status(200).json(data);
}
