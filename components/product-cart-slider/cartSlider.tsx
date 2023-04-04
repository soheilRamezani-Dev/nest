import { createRef, ElementRef, RefObject, useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import CategoryTabs from "../layout/categoryTabs";
import ProductCartsSlider from "./ProductCartsSlider";
import { Category, ProductCartInfo } from "../types";

type CartContainerType = RefObject<ElementRef<typeof ProductCartsSlider>>;

const CartSlider = ({
  sectionTitle,
  products,
  categories,
}: {
  sectionTitle: string;
  products: ProductCartInfo[];
  categories: Category[];
}) => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  let cartContainersRef: CartContainerType[] = [];

  cartContainersRef = categories.map(
    (_, i) => cartContainersRef[i] ?? createRef<CartContainerType>()
  );

  const slideLeftHandler = () => {
    const categoryIndex = categories.indexOf(
      categories.find((item) => item.id === activeCategory) as Category
    );

    cartContainersRef[categoryIndex].current?.lefttButonClickHandler();
  };
  const slideRightHandler = () => {
    const categoryIndex = categories.indexOf(
      categories.find((item) => item.id === activeCategory) as Category
    );
    cartContainersRef[categoryIndex].current?.rightButonClickHandler();
  };
  return (
    <div className="mt-5 relative group/section">
      <div className="lg:flex lg:justify-between lg:items-center my-6">
        <div className="flex justify-between space-x-7 items-center mt-10">
          <h2 className="h2-title ">{sectionTitle}</h2>
          <div className="flex space-x-2">
            <BsArrowLeft
              className="featured-category-arrow -left-2"
              onClick={slideLeftHandler}
            />
            <BsArrowRight
              className="featured-category-arrow -right-2"
              onClick={slideRightHandler}
            />
          </div>
        </div>

        {/* category list */}
        <div className="mt-5">
          <CategoryTabs
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            categories={categories}
          />
        </div>
      </div>

      <div className="products-cart-slider">
        {categories.map((category, id) => (
          <ProductCartsSlider
            ref={cartContainersRef[id]}
            category={category}
            activeCategory={activeCategory}
            products={
              (products &&
                products.filter(
                  (item) =>
                    item.categoryId === category.id || category.id === "all"
                )) as ProductCartInfo[]
            }
          />
        ))}
      </div>
    </div>
  );
};

export default CartSlider;
