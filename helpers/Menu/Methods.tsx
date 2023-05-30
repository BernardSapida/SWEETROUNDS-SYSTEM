import axios from "axios";

export const fetchProductList = async (user_id: number) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_URL}/api/v1/products/user_product_list`,
    {
      user_id: user_id,
    }
  );

  return response.data;
};

export const fetchProductListByKeyword = async (
  user_id: number,
  keyword: string
) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_URL}/api/v1/products/search_user_list`,
    {
      user_id: user_id,
      keyword: keyword,
    }
  );

  return response.data;
};
