import Image from "next/image";
import { Feature } from "./footer";

const Features = ({ title, description, icon }: Feature) => {
  return (
    <div className="flex bg-gray-100 space-x-5 p-5 rounded-lg">
      <div>
        <Image
          src={`/images/${icon}`}
          width={60}
          height={60}
          alt={`${title} icon`}
        />
      </div>
      <div className="space-y-1">
        <h6 className="text-lg font-medium">{title}</h6>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default Features;
