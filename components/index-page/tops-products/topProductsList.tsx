import { useEffect } from "react";
import ProductCartType3 from "../../product-cart/productCartType3";
import { ProductCartInfo } from "../../types";

const TopProductsList = ({
  heading,
  productInfo,
}: {
  heading: string;
  productInfo: ProductCartInfo[];
}) => {
  useEffect(() => {});
  return (
    <div>
      <h2 className="text-2xl font-medium my-3 ">{heading}</h2>
      {/* line of under the H2 */}
      <div className="w-11/12 h-[1px] bg-gray-300"></div>
      <div className="w-1/4 h-[2px] bg-green-600 opacity-60"></div>
      <ul className="mt-5">
        {productInfo?.map((item) => (
          <ProductCartType3 product={item} />
        ))}
      </ul>
    </div>
  );
};
TopProductsList;
export default TopProductsList;
