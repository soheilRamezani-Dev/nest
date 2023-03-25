import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from "react";

type DropDownProps = {
  defaultValueIndex: number;
  values: string[];
};

const DropDown = ({ defaultValueIndex, values }: DropDownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(values[defaultValueIndex]);

  const items = values.filter((value: string) => value !== selectedItem);

  return (
    <div
      onMouseEnter={() => {
        setIsOpen(true);
      }}
      onMouseLeave={() => {
        setIsOpen(false);
      }}
      className="px-4 relative cursor-pointer"
    >
      <div>
        {selectedItem}
        <RiArrowDropDownLine className="inline-block w-6 h-6" />
      </div>
      <ul
        className={`absolute overflow-hidden bg-white left-2 z-10 ${
          isOpen
            ? "max-h-40 border py-1 transition-all duration-500 ease-in-out"
            : "max-h-0 delay-150"
        }`}
      >
        {items.map((item: string, index: number) => (
          <li
            onClick={() => {
              setIsOpen(false);
              setSelectedItem(item);
            }}
            className="px-4 py-1 hover:bg-gray-100"
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropDown;
