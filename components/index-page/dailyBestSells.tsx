import { createRef, ElementRef, RefObject, useEffect, useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useGetCategoriesInfo, useGetProducts } from "../../hooks/productCart";
import CategoryTabs from "../categoryTabs";
import CartSlider from "../product-cart-slider/cartSlider";
import ProductCartsSlider from "../ProductCartsSlider";
import { Category, ProductCartInfo } from "./../types";

type CartContainerType = RefObject<ElementRef<typeof ProductCartsSlider>>;

const DailyBestSells = () => {
  const [dailyBestSellsProduct, setDailyBestSellsProduct] = useState<
    ProductCartInfo[]
  >([]);
  const [dailyBestSellsProductCategories, setDailyBestSellsProductCategories] =
    useState<Category[]>([{ id: "all", title: "All", url: "#" }]);

  useEffect(() => {
    const setProducts = async () => {
      const { products, categoriesId } = await useGetProducts();
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
