import { useEffect, useState } from "react";
import {
  useGetRecentlyAddedProducts,
  useGetTopRatedProducts,
  useGetTopSellingProducts,
  useGetTrendingProducts,
} from "../../../hooks/productCart";
import ProductCartType3 from "../../product-cart/productCartType3";
import { ProductCartInfo } from "../../types";
import TopProductsList from "./topProductsList";

const TopsProducts = () => {
  const [topSellingProducts, setTopSellingProducts] =
    useState<ProductCartInfo[]>();
  const [trendingProducts, setTrendingProductsducts] =
    useState<ProductCartInfo[]>();
  const [recentlyAddedProducts, setRecentlyAddedProducts] =
    useState<ProductCartInfo[]>();
  const [topRatedProducts, setTopRatedProducts] = useState<ProductCartInfo[]>();

  const setProducts = async () => {
    setTopSellingProducts(await useGetTopSellingProducts());
    setTrendingProductsducts(await useGetTrendingProducts());
    setRecentlyAddedProducts(await useGetRecentlyAddedProducts());
    setTopRatedProducts(await useGetTopRatedProducts());
  };
  useEffect(() => {
    setProducts();
  }, []);
  return (
    <div className="mt-5 grid-cols-1 grid md:grid-cols-2 xl:grid-cols-4 ">
      <TopProductsList
        heading="Top Selling"
        productInfo={topSellingProducts as ProductCartInfo[]}
      />
      <TopProductsList
        heading="Trending Products"
        productInfo={trendingProducts as ProductCartInfo[]}
      />
      <TopProductsList
        heading="Recently Added Products"
        productInfo={recentlyAddedProducts as ProductCartInfo[]}
      />
      <TopProductsList
        heading="Top Rated"
        productInfo={topRatedProducts as ProductCartInfo[]}
      />
    </div>
  );
};

export default TopsProducts;
