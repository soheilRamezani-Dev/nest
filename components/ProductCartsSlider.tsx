import { useEffect, useImperativeHandle, useRef, useState } from "react";
import ProductCart from "./productCart";
import { Category, ProductCartInfo } from "./types";
import { forwardRef } from "react";

type Ref = {
  lefttButonClickHandler: () => void;
  rightButonClickHandler: () => void;
};
type Props = {
  activeCategory: string;
  category: Category;
  products: ProductCartInfo[];
};

const ProductCartsSlider = forwardRef<Ref, Props>(
  ({ activeCategory, category, products }, ref) => {
    const [cartWidth, setCartWidth] = useState(0);
    const [leftPosition, setLeftPosition] = useState(0);
    // container Width is railway that products train move inside of that. actually is window width
    const [containerWidth, setContainerWidth] = useState(0);

    const setSizeOfCarts = () => {
      const cartWidth =
        Number(document.querySelector(".cart-slider li")?.clientWidth) + 15;
      setCartWidth(cartWidth);
      setContainerWidth(
        Number(document.querySelector(".products-cart-slider")?.clientWidth)
      );
      console.log(
        "products?.length * cartWidth: " + products?.length * cartWidth
      );
      console.log("containerWidth: " + containerWidth);
      console.log("leftPosition: " + leftPosition);
      if (
        products?.length * cartWidth <= containerWidth ||
        Math.abs(leftPosition) + containerWidth + 12.4 <
          products?.length * cartWidth
      )
        setLeftPosition(0);
    };

    useEffect(() => {
      setSizeOfCarts();
      window.addEventListener("resize", setSizeOfCarts);
      return () => {
        window.removeEventListener("resize", setSizeOfCarts);
      };
      //setLeftPosition(0);
    }, [products, leftPosition, containerWidth]);

    useImperativeHandle(ref, () => ({
      lefttButonClickHandler: () => {
        if (
          Math.abs(leftPosition) >= cartWidth &&
          products?.length * cartWidth > containerWidth
        ) {
          setLeftPosition((prev) => prev + cartWidth);
        }
      },
      rightButonClickHandler: () => {
        if (
          Math.abs(leftPosition) <
            products?.length * cartWidth - 2 * cartWidth &&
          products?.length * cartWidth > containerWidth
        ) {
          setLeftPosition((prev) => prev - cartWidth);
        }
      },
    }));

    return (
      <ul
        onResize={setSizeOfCarts}
        style={{ transform: `translate(${leftPosition}px)` }}
        className={`cart-slider carts flex flex-nowrap relative top-0 left-0 ${
          activeCategory === category.id
            ? "transition-transform-opacity duration-700 opacity-100 max-h-[20000px]"
            : "opacity-0 max-h-0"
        }`}
      >
        {products &&
          products.map((product) => (
            <ProductCart
              key={product.id}
              product={product}
              productCategory={category}
              withCount
            />
          ))}
      </ul>
    );
  }
);

export default ProductCartsSlider;
