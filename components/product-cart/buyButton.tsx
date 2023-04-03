import { AiOutlineShoppingCart } from "react-icons/ai";

const BuyButton = ({
  withCount,
  max_price,
}: {
  withCount?: boolean;
  max_price?: number;
}) => {
  return (
    <div className="mt-4">
      <button
        className={`flex justify-center items-center ${
          withCount ? "w-full" : ""
        } rounded-md text-green-700 bg-green-100 px-4 py-2 relative bottom-0 hover:bottom-1 transition-all duration-500 hover:shadow-lg hover:shadow-gray-100 lg:text-base text-sm`}
      >
        <AiOutlineShoppingCart className="mr-1 w-5 h-5" />{" "}
        {max_price ? "" : "Add"}
      </button>
    </div>
  );
};

export default BuyButton;
