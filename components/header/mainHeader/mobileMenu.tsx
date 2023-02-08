import { IoIosClose } from "react-icons/io";
import { CiHeadphones } from "react-icons/ci";
import { HiOutlineEnvelope } from "react-icons/hi2";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaSkype,
  FaYoutube,
} from "react-icons/fa";
import { forwardRef, useImperativeHandle, useState } from "react";
import SubMenuItem from "../subMenuItem";
import type { Menu, MenuItem } from "../../types";

export type Ref = {
  toggleMobileMenu: () => void;
};
const MobileMenu = forwardRef<Ref, any>((_, ref) => {
  const menus_api: Menu[] = [
    {
      id: "1",
      title: "menu",
      children: [
        {
          id: "1",
          title: "Home",
          url: "/",
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
          children: [
            { title: "Shop1", url: "/" },
            { title: "Shop2", url: "/" },
            { title: "Shop3", url: "/" },
          ],
        },
        { id: "1", title: "vendors", url: "/" },
        { id: "1", title: "Mega Menu", url: "/" },
        {
          id: "1",
          title: "Blog",
          url: "/",
          children: [
            { title: "Blog1", url: "/" },
            { title: "Blog2", url: "/" },
            { title: "Blog2", url: "/" },
          ],
        },
        { id: "1", title: "pages", url: "/" },
        { id: "1", title: "contact", url: "/" },
      ],
    },
    {
      id: "2",
      title: "category",
      children: [
        { id: "1", title: "Bread and Juice", url: "/" },
        { id: "1", title: "Baking material", url: "/" },
        { id: "1", title: "Clothing & beauty", url: "/" },
        { id: "1", title: "Deals Of The Day", url: "/" },
        { id: "1", title: "Fresh Seafood", url: "/" },
        { id: "1", title: "Milks and Dairies", url: "/" },
        { id: "1", title: "Uncategorized", url: "/" },
        { id: "1", title: "Vegetables", url: "/" },
      ],
    },
  ];
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(menus_api[0].id);
  useImperativeHandle(
    ref,
    () => ({
      toggleMobileMenu: () => {
        setMobileMenuIsOpen((prevState) => !prevState);
      },
    }),
    []
  );
  return (
    <>
      <div
        onClick={() => setMobileMenuIsOpen(false)}
        className={`bg-black opacity-30 z-10 w-full left-0 top-0 h-full ${
          mobileMenuIsOpen ? "fixed xl:hidden" : "hidden"
        }`}
      ></div>
      <div
        className={`overflow-y-auto w-3/4 h-full bg-white z-20 fixed xl:hidden top-0 p-8 transition-all duration-300 ease-in-out ${
          mobileMenuIsOpen ? "left-0" : "-left-3/4"
        }`}
      >
        {/* close button */}
        <div className="flex flex-row-reverse">
          <IoIosClose
            onClick={() => setMobileMenuIsOpen(false)}
            className="w-7 h-7 bg-green-100 rounded-full cursor-pointer"
          />
        </div>

        {/* mobile menu */}
        <div>
          {/* menu selection */}
          <div className="mt-14">
            <ul className="flex space-x-2">
              {menus_api.map((menu) => (
                <li
                  onClick={() => {
                    setActiveMenu(menu.id);
                  }}
                  className={
                    menu.id === activeMenu
                      ? "active-mobile-menu-item"
                      : "mobile-menu-item"
                  }
                >
                  {menu.title}
                </li>
              ))}
            </ul>
          </div>
          {/* selected menu items */}
          <div className="mt-5">
            <ul>
              {menus_api
                .find((vlaue) => vlaue.id === activeMenu)
                ?.children?.map((activemenueItem) => (
                  <SubMenuItem activemenueItem={activemenueItem} />
                ))}
            </ul>
          </div>
        </div>

        {/* account */}
        <div className="border rounded p-4 mt-7">
          {/* phone number */}
          <div className="flex space-x-2 my-2">
            <CiHeadphones className="text-green-600" />
            <p className="text-sm font-light">0912346789</p>
          </div>{" "}
          {/* email */}
          <div className="flex space-x-2 my-2">
            <HiOutlineEnvelope className="text-green-600" />
            <p className="text-sm font-light">soheil.e.ramezani@gmail.com</p>
          </div>
          {/* signup button */}
          <div className="bg-orange-400 text-center text-white py-2 mt-5 rounded">
            Sign Up
          </div>
          {/* login button */}
          <div className="bg-green-600 text-center text-white py-2 mt-2 rounded">
            Log In
          </div>
        </div>
        {/* social media icons */}
        <div>
          <ul className="flex space-x-2 mt-5">
            <li>
              <a href="/">
                <FaFacebookF className="social-media-icon" />
              </a>
            </li>
            <li>
              <a href="/">
                <FaTwitter className="social-media-icon" />
              </a>
            </li>
            <li>
              <a href="/">
                <FaSkype className="social-media-icon" />
              </a>
            </li>
            <li>
              <a href="/">
                <FaYoutube className="social-media-icon" />
              </a>
            </li>
            <li>
              <a href="/">
                <FaInstagram className="social-media-icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
});

export default MobileMenu;
