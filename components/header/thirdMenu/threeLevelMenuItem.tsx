import Image from "next/image";
import { useState } from "react";
import { RxChevronDown } from "react-icons/rx";
import { MenuItem } from "../../types";

const ThreeLevelMenuItem = ({ mainItem }: { mainItem: MenuItem }) => {
  const [dropDownIsOpen, setDropDownIsOpen] = useState(false);
  return (
    <div
      onMouseLeave={() => {
        setDropDownIsOpen(false);
      }}
      onMouseEnter={() => {
        setDropDownIsOpen(true);
      }}
      className=""
    >
      <div className="py-5 flex font-medium items-center hover:text-green-700 transition-colors duration-300 cursor-pointer">
        {mainItem.title}{" "}
        {mainItem.children && <RxChevronDown className="ml-1" />}
      </div>
      <div
        className={`left-0 box-border max-w-8xl w-screen absolute top-16 transition-all duration-200 delay-75 ${
          dropDownIsOpen
            ? "visible translate-x-0 opacity-100"
            : "invisible -translate-x-3 opacity-0"
        }`}
      >
        <div className="flex items-center p-3 mx-5 bg-white rounded-md border shadow-md transition-all duration-75 delay-75">
          <div className="grow flex">
            {mainItem.children &&
              mainItem.children.map((item, index) => (
                <div className="grow" key={index}>
                  <h3 className="text-green-600 px-2 py-3 text-xl font-medium">
                    {item.title}
                  </h3>
                  <ul>
                    {item.children &&
                      item.children.map((subitem, index) => (
                        <li className="px-2 py-1 cursor-pointer" key={index}>
                          {subitem.title}
                        </li>
                      ))}
                  </ul>
                </div>
              ))}
          </div>
          {/* menu image */}
          <div className="relative">
            <Image
              src={"/images/banner-14-min.png"}
              width={300}
              height={300}
              alt={`${mainItem.title} banner`}
            />
            {/* image info text contains title and description and button */}
            <div className="absolute top-3 left-10 w-3/5">
              <h3 className="text-green-600 my-2">Oganic</h3>
              <p className="text-gray-900 my-2 text-xl font-medium">
                Everyday Fresh & Clean with Our Products
              </p>
              <button className="bg-green-600 text-white my-2 px-5 py-2 rounded text-sm">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeLevelMenuItem;
