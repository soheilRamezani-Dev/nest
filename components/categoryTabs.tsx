import { useImperativeHandle, useState } from "react";
import { Category } from "./types";
import { forwardRef } from "react";

type Props = {
  categories: Category[];
  activeCategory: string;
  setActiveCategory: (id: string) => void;
};

const CategoryTabs = ({
  categories,
  activeCategory,
  setActiveCategory,
}: Props) => {
  const categoryTabHandler = (id: string) => {
    setActiveCategory(id);
  };
  return (
    <>
      <ul className="flex space-x-4 text-sm lg:text-base px-4">
        {categories.map((category) => (
          <li
            onClick={() => categoryTabHandler(category.id)}
            key={category.id}
            className={`relative bottom-0 cursor-pointer hover:text-green-600 hover:bottom-1 transition-all duration-200 ${
              activeCategory === category.id ? "text-green-600" : ""
            }`}
          >
            {category.title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default CategoryTabs;
