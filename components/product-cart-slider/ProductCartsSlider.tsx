import { useEffect, useImperativeHandle, useRef, useState } from "react";
import ProductCartType1 from "../product-cart/productCartType1";
import { Category, ProductCartInfo } from "../types";
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
        Number(
          (document.querySelector(".cart-slider>li") as HTMLLIElement)
            ?.clientWidth
        ) + 2;
      setCartWidth(cartWidth);
      setContainerWidth(
        Number(
          (document.querySelector(".products-cart-slider") as HTMLDivElement)
            ?.clientWidth
        )
      );
      if (
        Math.abs(leftPosition) + containerWidth >
          products?.length * (cartWidth + 16) - (cartWidth + 16) ||
        products?.length * (cartWidth + 16) < containerWidth
      ) {
        setLeftPosition(0);
      } else if (leftPosition !== 0) {
        // witch element is first in view port
        const firstElementIndexInClientView = Math.floor(
          Math.abs(leftPosition) / cartWidth
        );
        setLeftPosition(-firstElementIndexInClientView * cartWidth - 16);
      }
    };

    useEffect(() => {
      const cartWidth =
        Number(
          (document.querySelector(".cart-slider>li") as HTMLLIElement)
            ?.clientWidth
        ) + 2;
      setCartWidth(cartWidth);
      setContainerWidth(
        Number(
          (document.querySelector(".products-cart-slider") as HTMLDivElement)
            ?.clientWidth
        )
      );
      window.addEventListener("resize", setSizeOfCarts);

      return () => {
        window.removeEventListener("resize", setSizeOfCarts);
      };

      //setLeftPosition(0);
    }, [products, cartWidth, containerWidth]);

    useImperativeHandle(ref, () => ({
      lefttButonClickHandler: () => {
        if (
          Math.abs(leftPosition) >= cartWidth &&
          products?.length * cartWidth > containerWidth
        ) {
          setLeftPosition((prev) => prev + cartWidth + 16);
        }
      },
      rightButonClickHandler: () => {
        if (
          Math.abs(leftPosition) + containerWidth <
            products?.length * (cartWidth + 16) - cartWidth &&
          products?.length * (cartWidth + 16) > containerWidth
        ) {
          setLeftPosition((prev) => prev - cartWidth - 16);
        }
      },
    }));

    return (
      <ul
        style={{ transform: `translate(${leftPosition}px)` }}
        className={`cart-slider carts flex flex-nowrap relative top-0 left-0 ${
          activeCategory === category.id
            ? "transition-transform-opacity duration-700 opacity-100 max-h-[20000px]"
            : "opacity-0 max-h-0"
        }`}
      >
        {products &&
          products.map((product) => (
            <ProductCartType1
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
