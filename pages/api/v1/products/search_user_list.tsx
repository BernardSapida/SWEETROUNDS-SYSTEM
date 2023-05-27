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
  const { user_id, keyword } = req.body;

  const response = await axios.post(
    `${process.env.NEXT_SERVER_URL}/api/v1/products/search_user_list.php`,
    {
      user_id: user_id,
      keyword: keyword,
    }
  );

  const data = response.data;

  res.status(200).json(data);
}
