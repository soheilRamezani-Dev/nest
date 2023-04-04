import { useState } from "react";
import { RxChevronDown } from "react-icons/rx";
import type { MenuItem } from "../../../types";

const TwoLevelMenuItem = ({ mainItem }: { mainItem: MenuItem }) => {
  const [dropDownIsOpen, setDropDownIsOpen] = useState(false);
  return (
    <div
      onMouseLeave={() => {
        setDropDownIsOpen(false);
      }}
      onMouseEnter={() => {
        setDropDownIsOpen(true);
      }}
      className="relative"
    >
      <div className="py-5 flex font-medium items-center hover:text-green-700 transition-colors duration-300 cursor-pointer">
        {mainItem.title}{" "}
        {mainItem.children && <RxChevronDown className="ml-1" />}
      </div>
      {mainItem.children && mainItem.type === "twoLevel" && (
        <ul
          className={`absolute top-16 py-2 px-1 bg-white rounded-md border shadow-md transition-all duration-75 delay-75 z-10 ${
            dropDownIsOpen
              ? "visible translate-x-0 opacity-100"
              : "invisible -translate-x-3 opacity-0"
          }`}
        >
          {mainItem.children &&
            mainItem.children.map((subItem, index) => (
              <li
                className="py-1 px-5 m-1 cursor-pointer transition-colors duration-150 hover:text-green-600"
                key={index}
              >
                <a href={subItem?.url}>{subItem?.title}</a>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default TwoLevelMenuItem;
