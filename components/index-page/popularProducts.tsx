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
import ProductCart from "../productCart";
import { Category, ProductCartInfo } from "../types";
import CategoryTabs from "../categoryTabs";

const PopularProducts = () => {
  const [popularProducts, setPopularProducts] = useState<ProductCartInfo[]>([]);
  const [popularProductsCategory, setPopularProductsCategory] = useState<
    Category[]
  >([{ id: "", title: "All", url: "#" }]);

  const [activeCategory, setActiveCategory] = useState<string>("");

  const setProducts = async () => {
    let products: ProductCartInfo[] = [];
    let categories: string[] = [];
    const q = query(
      collectionGroup(database, "products"),
      orderBy("rate", "desc"),
      orderBy("sell_count", "desc"),
      limit(30)
    );
    const snapshot = await getDocs(q);
    snapshot.forEach((product) => {
      const categoryId = product.ref.path.split("/")[1];
      products = [
        ...products,
        {
          ...product.data(),
          id: product.id,
          categoryId,
        } as ProductCartInfo,
      ];
      categories.push(categoryId);
      // remove duplicate element in array
      categories = categories.filter(
        (item, index) => categories.indexOf(item) === index
      );
    });
    setPopularProducts(products);
    setCategory(categories);
  };

  const setCategory = async (categoriesId: string[]) => {
    let categoriesInfo: Category[] = [];
    const q = query(
      collection(database, "category"),
      where(documentId(), "in", categoriesId)
    );
    const snapshot = await getDocs(q);
    snapshot.forEach((category) => {
      categoriesInfo = [
        ...categoriesInfo,
        {
          id: category.id,
          url: "/category/" + category.data().slug,
          title: category.data().title,
        },
      ];
    });
    setPopularProductsCategory((prev) => [...prev, ...categoriesInfo]);
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
                <ProductCart
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
