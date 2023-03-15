import Image from "next/image";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Category, ProductCartInfo } from "./types";

const ProductCart = ({
  product,
  productCategory,
}: {
  product: ProductCartInfo;
  productCategory: Category;
}) => {
  console.log(product.categoryId);
  return (
    <li className="relative border rounded-3xl p-6 hover:border-green-500 hover:shadow-lg hover:shadow-gray-100 transition-all duration-500 cursor-pointer overflow-hidden">
      <a href={product.url}>
        {/* discount percentage */}
        <div className="text-sm absolute left-0 top-0 bg-green-600 text-white rounded-br-3xl px-5 py-2">
          {product.discount}%
        </div>
        {/* is new product? if product submited at most three days then its new*/}
        {Math.floor(Date.now() / 1000) - product.time?.seconds < 259200 ? (
          <div className="text-sm absolute right-0 top-0 bg-blue-600 text-white rounded-bl-3xl px-5 py-2">
            New
          </div>
        ) : (
          ""
        )}

        {/* product image */}
        <div>
          <Image
            className=""
            src={`/images/products/${product.image1}`}
            alt={`image of ${product.title}`}
            width={428}
            height={428}
          />
        </div>

        {/* product information */}
        <div>
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
            ${product.title}
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
          <div className="mt-2 text-sm">
            <a href={product.seller_link}>
              <span className="text-gray-400">By</span>
              <span className="text-green-600 hover:text-orange-400 mx-2 transition-all duration-300">
                {product.seller}
              </span>
            </a>
          </div>
          <div className="flex justify-between items-center mt-4">
            {/* price */}
            <div>
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
            {/* Add button */}
            <div>
              <button className="flex justify-center items-center rounded-md text-green-600 bg-green-100 px-4 py-2 relative bottom-0 hover:bottom-1 transition-all duration-500 hover:shadow-lg hover:shadow-gray-100">
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
