import { collectionGroup, limit, orderBy, query } from "firebase/firestore";
import { createRef, ElementRef, RefObject, useEffect, useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import database from "../../firebase/firestore";
import { useGetCategoriesInfo, useGetProducts } from "../../hooks/productCart";
import CategoryTabs from "../layout/categoryTabs";
import CartSlider from "../product-cart-slider/cartSlider";
import { Category, ProductCartInfo } from "./../types";

const DailyBestSells = () => {
  const [dailyBestSellsProduct, setDailyBestSellsProduct] = useState<
    ProductCartInfo[]
  >([]);
  const [dailyBestSellsProductCategories, setDailyBestSellsProductCategories] =
    useState<Category[]>([{ id: "all", title: "All", url: "#" }]);

  useEffect(() => {
    const setProducts = async () => {
      const q = query(
        collectionGroup(database, "products"),
        orderBy("sell_count", "desc"),
        limit(30)
      );
      const { products, categoriesId } = await useGetProducts(q);
      const categoryInfo = await useGetCategoriesInfo(categoriesId);
      setDailyBestSellsProduct(products);
      setDailyBestSellsProductCategories((prev) => [
        ...prev,
        ...(categoryInfo as Category[]),
      ]);
    };
    setProducts();
  }, []);

  return (
    <CartSlider
      sectionTitle="Daily Best Sells"
      products={dailyBestSellsProduct}
      categories={dailyBestSellsProductCategories}
    />
  );
};

export default DailyBestSells;
