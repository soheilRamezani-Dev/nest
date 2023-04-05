import { TfiHeadphoneAlt } from "react-icons/tfi";

const PhoneNumberButton = ({
  phone,
  description,
}: {
  phone: string;
  description: string;
}) => {
  return (
    <div className="flex space-x-3 items-center">
      {/* phone icon */}
      <div>
        <TfiHeadphoneAlt className=" w-8 h-8" />
      </div>
      {/* phone number */}
      <div>
        <h3>
          <a
            className="text-green-600 text-xl font-bold"
            href={`"tel:${phone}"`}
          >
            {phone}
          </a>
        </h3>
        <p className="text-xs font-light">{description}</p>
      </div>
    </div>
  );
};

export default PhoneNumberButton;
