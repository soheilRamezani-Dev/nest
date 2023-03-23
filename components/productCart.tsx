import Image from "next/image";
import {
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { BsShuffle } from "react-icons/bs";
import { Category, ProductCartInfo } from "./types";

type Props = {
  product: ProductCartInfo;
  productCategory: Category;
  withCount?: boolean;
  withSeller?: boolean;
};
const ProductCart = ({
  product,
  productCategory,
  withCount = false,
  withSeller = false,
}: Props) => {
  return (
    <li className="group/productcart relative border rounded-3xl p-6 hover:border-green-500 hover:shadow-lg hover:shadow-gray-100 transition-all duration-500 cursor-pointer overflow-hidden">
      <a href={product.url}>
        {/* discount percentage */}
        <div className="z-10 text-sm absolute left-0 top-0 bg-green-600 text-white rounded-br-3xl px-5 py-2">
          {product.discount}%
        </div>
        {/* is new product? if product submited at most three days then its new*/}
        {Math.floor(Date.now() / 1000) - product.time?.seconds < 259200 ? (
          <div className="z-10 text-sm absolute right-0 top-0 bg-blue-600 text-white rounded-bl-3xl px-5 py-2">
            New
          </div>
        ) : (
          ""
        )}

        {/* product image */}
        <div className="relative z-0 overflow-hidden scale-100 group-hover/productcart:scale-105 transition-transform duration-500 ease-in">
          <Image
            className={`${
              product.image2
                ? "group-hover/productcart:hidden transition-opacity inline"
                : ""
            }`}
            src={`/images/products/${product.image1}`}
            alt={`image of ${product.title}`}
            width={428}
            height={428}
          />
          <Image
            className={`${
              product.image2
                ? "group-hover/productcart:inline hidden "
                : "hidden"
            }`}
            src={`/images/products/${product.image2}`}
            alt={`image of ${product.title}`}
            width={428}
            height={428}
          />
          {/* show , compare , like icon when hover on product */}
          <div className="flex invisible opacity-0 justify-center group-hover/productcart:visible group-hover/productcart:opacity-100 transition-all duration-200">
            <div className="absolute top-1/2 border border-green-600 bg-white flex justify-center space-x-1 text-green-600 rounded-lg ">
              <div className="group/quickshow relative">
                <AiOutlineEye className="product-cart-icon" />
                <div className="tooltip group-hover/productcart/quickshow:opacity-100 group-hover/productcart/quickshow:-top-8">
                  Quick Show
                </div>
              </div>
              <div className="group/compare relative">
                <BsShuffle className="product-cart-icon" />
                <div className="tooltip group-hover/compare:opacity-100 group-hover/compare:-top-8">
                  Compare
                </div>
              </div>
              <div className="group/like relative">
                <AiOutlineHeart className="product-cart-icon border-none" />
                <div className="tooltip group-hover/like:opacity-100 group-hover/like:-top-8 -left-1/3">
                  Like
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* product information */}
        <div className="mt-1">
          {/* product category */}
          <a
            className="text-gray-400 hover:text-green-600 transition-all duration-200"
            href="#"
          >
            <small>
              <a href={productCategory?.url}>{productCategory?.title}</a>
            </small>
          </a>
          {/* product title */}
          <h3 className="mt-2 text-md font-medium hover:text-green-600 transition-all duration-200">
            {product.title}
          </h3>
          {/* product rate */}
          <div className="relative mt-2">
            <span className="bg-[url('/images/five-star-gray.png')] inline-block w-24 h-4"></span>
            <span
              style={{ width: (product.rate * 96) / 5 + "px" }}
              className="bg-[url('/images/five-star-gold.png')] h-4 inline-block absolute top-[1px] left-0"
            ></span>
            <span className="text-gray-400 mx-3 text-sm">
              {product.rate_count}
            </span>
          </div>
          {/* seller */}
          {withSeller && (
            <div className="mt-2 text-sm">
              <a href={product.seller_link}>
                <span className="text-gray-400">By</span>
                <span className="text-green-600 hover:text-orange-400 mx-2 transition-all duration-300">
                  {product.seller}
                </span>
              </a>
            </div>
          )}

          <div
            className={`${
              withCount ? "" : "md:flex md:justify-between md:items-center"
            }`}
          >
            {/* price */}
            <div className="mt-4">
              {/* price after discount */}
              <span
                className={`text-green-600 ${
                  product.max_price ? "" : "underline"
                } text-lg font-medium`}
              >
                $
                {(
                  product.min_price -
                  (product.min_price * product.discount) / 100
                ).toFixed(2)}{" "}
                {product.max_price
                  ? ` - $${(
                      product.max_price -
                      (product.max_price * product.discount) / 100
                    ).toFixed(2)}`
                  : ""}
              </span>
              <span className="text-gray-300 line-through mx-4">
                {product.max_price ? "" : `$${product.min_price}`}
              </span>
            </div>
            {/* count */}
            {withCount && (
              <div className="py-2">
                {/* count bar */}
                <div className="relative h-1 bg-gray-200 rounded-full my-2">
                  <div
                    style={{
                      width: (product.sell_count / product.count) * 100 + "%",
                    }}
                    className="h-full bg-green-600"
                  ></div>
                </div>
                <div className="text-xs lg:text-sm">
                  sold: {product.sell_count}/{product.count}
                </div>
              </div>
            )}
            {/* Add button */}
            <div className="mt-4">
              <button
                className={`flex justify-center items-center ${
                  withCount ? "w-full" : ""
                } rounded-md text-green-700 bg-green-100 px-4 py-2 relative bottom-0 hover:bottom-1 transition-all duration-500 hover:shadow-lg hover:shadow-gray-100 lg:text-base text-sm`}
              >
                <AiOutlineShoppingCart className="mr-1 w-5 h-5" />{" "}
                {product.max_price ? "" : "Add"}
              </button>
            </div>
          </div>
        </div>
      </a>
    </li>
  );
};

export default ProductCart;
