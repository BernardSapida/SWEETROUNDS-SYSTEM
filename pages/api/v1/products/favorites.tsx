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
  const { id } = req.body;

  const response = await axios.post(
    `${process.env.NEXT_SERVER_URL}/api/v1/products/favorites.php`,
    {
      id: id,
    }
  );

  const data = response.data;

  res.status(200).json(data);
}
