import Image from "next/image";
import CartPrice from "../product-cart/price";
import Rate from "../product-cart/rate";
import { ProductCartInfo } from "../types";

const ProductCartType3 = ({ product }: { product: ProductCartInfo }) => {
  return (
    <li className="flex items-center m-2 ml-0 cursor-pointer hover:-translate-y-1 transition-transform duration-300">
      <Image
        className="w-32"
        src={`/images/products/${product.image1}`}
        width={150}
        height={150}
        alt="image"
      />
      <div className="ml-3 w-7/12">
        <h3 className="hover:text-green-600 transition-colors duration-200 font-semibold">
          {product.title}
        </h3>
        <Rate rate={product.rate} rateCount={product.rate_count} />
        <CartPrice
          discount={product.discount}
          min_price={product.min_price}
          max_price={product.max_price}
        />
      </div>
    </li>
  );
};

export default ProductCartType3;
