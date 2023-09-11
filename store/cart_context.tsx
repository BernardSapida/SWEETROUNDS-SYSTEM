import { fetchProductList } from "@/helpers/menu/Methods";
import { Product } from "@/types/Product";
import { useSession } from "next-auth/react";
import { createContext, useEffect, useState } from "react";

const CartContext = createContext({
  cartNumber: 0,
  updateCartNumber: function (quantity: number) { },
});

export function CartContextProvider(props: any) {
  const { data: session } = useSession();
  const [cartNumber, setCartNumber] = useState<number>(0);
  const updateCartNumber = (quantity: number) => setCartNumber(quantity);
  const context = {
    cartNumber: cartNumber,
    updateCartNumber: updateCartNumber,
  };

  useEffect(() => {
    const fetchData = async () => {
      let response = await fetchProductList(session?.user.id!);
      let productList = response.data!;
      let quantity = 0;

      productList?.filter((product: Product, index: number) => {
        if (product.in_cart == 1) quantity += 1;
      });

      setCartNumber(quantity);
    };

    fetchData();
  }, [session?.user.id]);

  return (
    <CartContext.Provider value={context}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartContext;
