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
  const { quantity, order_id, product_id } = req.body;

  const response = await axios.post(
    `${process.env.NEXT_SERVER_URL}/api/v1/order_items/create.php`,
    {
      quantity: quantity,
      order_id: order_id,
      product_id: product_id,
    }
  );

  const data = response.data;

  res.status(200).json(data);
}
