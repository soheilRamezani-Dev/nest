import Image from "next/image";
import { useEffect, useState } from "react";
import BuyButton from "../product-cart/buyButton";
import CartPrice from "../product-cart/price";
import Rate from "../product-cart/rate";
import SellerLink from "../product-cart/sellerLink";
import { ProductCartInfo } from "../types";

type Timer = {
  days: number;
  hours: number;
  mins: number;
  secs: number;
};
const ProductCartType2 = ({ product }: { product: ProductCartInfo }) => {
  const [timer, setTimer] = useState<Timer>();
  useEffect(() => {
    const now = Math.floor(Date.now() / 1000);
    const durationSeconds =
      (product.discount_expire_time?.seconds as number) - now;
    if (durationSeconds > 0) {
      const days = Math.floor(durationSeconds / 86400);
      const hours = Math.floor((durationSeconds % 86400) / 3600);
      const mins = Math.floor(((durationSeconds % 86400) % 3600) / 60);
      const secs = Math.floor(((durationSeconds % 86400) % 3600) % 60);
      const timerInterval = setTimeout(() => {
        setTimer({ days: days, hours: hours, mins: mins, secs: secs });
      }, 1000);
    }
  }, [timer]);
  return (
    <li className="group/cartType2 my-2 relative float-right">
      <div className="h-[335px]">
        <Image
          className="rounded-2xl w-full h-full object-cover"
          src={"/images/products/" + product.image1}
          width={930}
          height={670}
          alt={"image of" + product.title}
        />
      </div>

      <div className="w-11/12 z-10 relative -mt-[25%] mx-auto left-0 right-0 group-hover/cartType2:-translate-y-2 transition-all duration-300">
        {/* time counter */}
        <div className="mb-5 flex justify-center mx-1">
          <div className="timer-tile">
            <p className="mb-1 text-green-600">{timer?.days}</p>
            <p className="text-gray-500">Days</p>
          </div>
          <div className="timer-tile">
            <p className="mb-1 text-green-600">{timer?.hours}</p>
            <p className="text-gray-500">Hours</p>
          </div>
          <div className="timer-tile">
            <p className="mb-1 text-green-600">{timer?.mins}</p>
            <p className="text-gray-500">Mins</p>
          </div>
          <div className="timer-tile">
            <p className="mb-1 text-green-600">{timer?.secs}</p>
            <p className="text-gray-500">Secs</p>
          </div>
        </div>
        {/* product info */}
        <div className=" bg-white rounded-xl w-full p-6 shadow-lg shadow-gray-200 overflow-hidden">
          <h3 className="text-base font-medium">{product.title}</h3>
          {/* rate */}
          <Rate rate={product.rate} rateCount={product.rate_count} />
          {/* seller */}
          <SellerLink title={product.seller} link={"/" + product.url} />
          {/* price & button */}
          <div className="flex justify-between">
            <CartPrice
              min_price={product.min_price}
              max_price={product.max_price}
              discount={product.discount}
            />
            <BuyButton withCount={false} />
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProductCartType2;
