const CartPrice = ({
  max_price,
  min_price,
  discount,
}: {
  max_price?: number;
  min_price: number;
  discount: number;
}) => {
  return (
    <div className="mt-4">
      {/* price after discount */}
      <span
        className={`text-green-600 ${
          max_price ? "" : "underline"
        } text-lg font-medium`}
      >
        ${(min_price - (min_price * discount) / 100).toFixed(2)}{" "}
        {max_price
          ? ` - $${(max_price - (max_price * discount) / 100).toFixed(2)}`
          : ""}
      </span>
      <span className="text-gray-300 line-through mx-4">
        {max_price ? "" : `$${min_price}`}
      </span>
    </div>
  );
};

export default CartPrice;
