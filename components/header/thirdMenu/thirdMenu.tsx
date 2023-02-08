import {
  Children,
  EventHandler,
  MouseEventHandler,
  useEffect,
  useState,
} from "react";
import { BiCategory } from "react-icons/bi";
import { RxChevronDown } from "react-icons/rx";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { SubMenuItem, Menu } from "../../types";
import ThreeLevelMenuItem from "./threeLevelMenuItem";
import TwoLevelMenuItem from "./twoLevelMenuItem";

const ThirdMenu = () => {
  const categories_api = [
    { title: "Bread and Juice", url: "/" },
    { title: "Baking material", url: "/" },
    { title: "Clothing & beauty", url: "/" },
    { title: "Deals Of The Day", url: "/" },
    { title: "Fresh Seafood", url: "/" },
    { title: "Milks and Dairies", url: "/" },
    { title: "Uncategorized", url: "/" },
    { title: "Vegetables", url: "/" },
  ];
  const pages_api: Menu = {
    id: "2",
    title: "pages",
    children: [
      {
        id: "1",
        title: "Home",
        url: "/",
        type: "twoLevel",
        children: [
          { title: "Home1", url: "/" },
          { title: "Home2", url: "/" },
          { title: "Home3", url: "/" },
        ],
      },
      { id: "1", title: "About", url: "/" },
      {
        id: "1",
        title: "shop",
        url: "/",
        type: "threeLevel",
        children: [
          {
            title: "Shop1",
            url: "/",
            children: [
              { title: "Shop1.1", url: "/" },
              { title: "Shop1.2", url: "/" },
              { title: "Shop1.3", url: "/" },
              { title: "Shop1.4", url: "/" },
            ],
          },
          {
            title: "Shop2",
            url: "/",
            children: [
              { title: "Shop2.1", url: "/" },
              { title: "Shop2.2", url: "/" },
              { title: "Shop2.3", url: "/" },
            ],
          },
          {
            title: "Shop3",
            url: "/",
            children: [
              { title: "Shop3.1", url: "/" },
              { title: "Shop3.2", url: "/" },
              { title: "Shop3.3", url: "/" },
              { title: "Shop3.4", url: "/" },
              { title: "Shop3.5", url: "/" },
            ],
          },
        ],
      },
      { id: "1", title: "vendors", url: "/" },
      { id: "1", title: "Mega Menu", url: "/" },
      {
        id: "1",
        title: "Blog",
        url: "/",
        type: "twoLevel",
        children: [
          { title: "Blog1", url: "/" },
          { title: "Blog2", url: "/" },
          { title: "Blog2", url: "/" },
        ],
      },
      { id: "1", title: "pages", url: "/" },
      { id: "1", title: "contact", url: "/" },
    ],
  };

  const [categoryDropDownIsOpen, setCategoryDropDownIsOpen] = useState(false);

  const closeCategoryDropDown = (event: Event) => {
    const categoryElement = document.getElementById("categories");
    if (categoryElement?.contains(event.target as HTMLElement)) {
      return;
    }
    setCategoryDropDownIsOpen(false);
  };
  //   if click enywhere category dropdown will close
  useEffect(() => {
    window.addEventListener("click", closeCategoryDropDown);
    return () => {
      window.removeEventListener("click", closeCategoryDropDown);
    };
  }, []);
  return (
    <div className="border-b hidden lg:block">
      <div className="flex mx-auto max-w-8xl justify-between px-5 items-center relative">
        {/* categories */}
        <div className="relative" id="categories">
          {/* category Button */}
          <div
            onClick={() => setCategoryDropDownIsOpen((prev) => !prev)}
            className="flex bg-green-600 cursor-pointer text-white py-2 px-7 rounded text-sm font-medium"
          >
            <BiCategory className="w-5 h-5 mx-2" /> Browse All Categories{" "}
            <RxChevronDown className="mx-2 w-5 h-5 font-light" />
          </div>
          {/* categories item drop down */}
          <div
            className={`w-96 p-5 bg-white border border-green-200 absolute top-12 rounded-md transition-all duration-300 ease-out ${
              categoryDropDownIsOpen
                ? "visible opacity-100"
                : "invisible opacity-0"
            }`}
          >
            <ul className="flex flex-wrap">
              {categories_api.map((category, index) => (
                <li key={index} className="p-1 w-1/2 text-sm">
                  <div className="cursor-pointer border px-3 py-2  rounded transition-colors duration-200 hover:text-green-600 hover:border-green-600">
                    {category.title}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* pages nav */}
        <div>
          <ul className="flex">
            {pages_api.children.map((item, index) => (
              <li key={index} className="px-3.5">
                {item.type === undefined && (
                  <div className="py-5 flex font-medium items-center hover:text-green-700 transition-colors duration-300 cursor-pointer">
                    {item.title}{" "}
                  </div>
                )}
                {item.type === "twoLevel" && (
                  <TwoLevelMenuItem mainItem={item} />
                )}
                {item.type === "threeLevel" && (
                  <ThreeLevelMenuItem mainItem={item} />
                )}
              </li>
            ))}
          </ul>
        </div>
        {/* phone */}
        <div className="hidden xl:flex space-x-3 items-center">
          {/* phone icon */}
          <div>
            <TfiHeadphoneAlt className=" w-8 h-8" />
          </div>
          {/* phone number */}
          <div>
            <h3 className="text-green-600 text-xl font-bold">09123456789</h3>
            <p className="text-xs font-light">24/7 Support Center</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdMenu;
