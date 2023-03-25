import {
  collection,
  collectionGroup,
  documentId,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import database from "../../firebase/firestore";
import ProductCartType1 from "../product-cart/productCartType1";
import { Category, ProductCartInfo } from "../types";
import CategoryTabs from "../categoryTabs";
import { useGetCategoriesInfo, useGetProducts } from "../../hooks/productCart";

const PopularProducts = () => {
  const [popularProducts, setPopularProducts] = useState<ProductCartInfo[]>([]);
  const [popularProductsCategory, setPopularProductsCategory] = useState<
    Category[]
  >([{ id: "", title: "All", url: "#" }]);

  const [activeCategory, setActiveCategory] = useState<string>("");

  const setProducts = async () => {
    const q = query(
      collectionGroup(database, "products"),
      orderBy("rate", "desc"),
      orderBy("sell_count", "desc"),
      limit(30)
    );
    const { products, categoriesId } = await useGetProducts(q);
    setPopularProducts(products);
    setPopularProductsCategory(await useGetCategoriesInfo(categoriesId));
  };

  useEffect(() => {
    setProducts();
  }, []);

  return (
    <div className="mt-5">
      <div className="lg:flex lg:justify-between lg:items-center my-6">
        <h2 className="mt-5 h2-title ">Popular Products</h2>
        {/* category list */}
        <div className="mt-5">
          <CategoryTabs
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            categories={popularProductsCategory}
          />
        </div>
      </div>

      <div id="products">
        {popularProductsCategory.map((category) => (
          <ul
            className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 transition-opacity duration-500 ${
              activeCategory === category.id
                ? "visible opacity-100 max-h-[20000px]"
                : "invisible opacity-0 max-h-0"
            }`}
          >
            {popularProducts
              .filter(
                (item) => item.categoryId === category.id || category.id === ""
              )
              .map((product) => (
                <ProductCartType1
                  withSeller
                  key={product.id}
                  product={product}
                  productCategory={
                    popularProductsCategory.find(
                      (item) => product.categoryId === item.id
                    ) as Category
                  }
                />
              ))}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
