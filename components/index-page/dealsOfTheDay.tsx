import {
  collectionGroup,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import database from "../../firebase/firestore";
import { useGetProducts } from "../../hooks/productCart";
import ProductCartType2 from "../product-cart/productCartType2";
import { ProductCartInfo } from "../types";

const DealsOfTheDay = () => {
  const [productsCart, setProductsCart] = useState<ProductCartInfo[]>();
  const setProducts = async () => {
    const q = query(
      collectionGroup(database, "products"),
      where("discount_expire_time", "!=", null),
      orderBy("discount_expire_time"),
      limit(4)
    );
    const { products } = await useGetProducts(q);
    setProductsCart(products);
  };
  useEffect(() => {
    setProducts();
  }, []);
  return (
    <div className="mt-5">
      <h2 className="h2-title my-4">Deals Of The Day</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {productsCart?.map((item) => (
          <ProductCartType2 key={item.id} product={item} />
        ))}
      </ul>
    </div>
  );
};

export default DealsOfTheDay;
