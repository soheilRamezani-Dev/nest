import Image from "next/image";
import { useRef } from "react";
import {
  AiOutlineShoppingCart,
  AiOutlineMenu,
  AiOutlineHeart,
} from "react-icons/ai";
import { HiArrowLongRight } from "react-icons/hi2";
import { RxPerson, RxCrosshair1 } from "react-icons/rx";
import AccountMenuItem from "./accountMenuItem";
import MobileMenu from "./mobileMenu";
import type { Ref } from "./mobileMenu";

const MainHeader = () => {
  const mobileMenueComponent = useRef<Ref>(null);
  const mobileMenuToggleHandler = () => {
    if (mobileMenueComponent.current) {
      mobileMenueComponent.current.toggleMobileMenu();
    }
  };
  return (
    <div className="border-b">
      <div className="block xl:flex justify-between my-5 max-w-8xl mx-auto px-3">
        {/* logo */}
        <div className="flex justify-between mx-2">
          <div className="w-32">
            <Image
              src="/images/logo.svg"
              width={200}
              height={60}
              alt="website logo"
              className="w-full h-full"
            />
          </div>

          <ul className="flex space-x-3 lg:hidden">
            <li className="cursor-pointer">
              <AccountMenuItem Icon={RxPerson} title="Account" />
            </li>
            <li className="cursor-pointer" onClick={mobileMenuToggleHandler}>
              <AccountMenuItem Icon={AiOutlineMenu} title="menu" />
            </li>
          </ul>
        </div>

        {/* mobile left menu */}
        <MobileMenu ref={mobileMenueComponent} />

        {/* right */}
        <div className="text-gray-700 flex items-center justify-between my-3 grow">
          {/* search */}
          <div className="flex border border-green-500 p-1 rounded grow w-full mx-auto">
            <input
              disabled
              placeholder="Search for products"
              className="outline-none text-sm w-full cursor-pointer grow px-3 disabl"
              type="text"
            />
            <button className="bg-green-600 text-white px-6 py-2 relative">
              Search
            </button>
          </div>

          {/* Became vendor button */}
          <div className="mx-7 hidden lg:block">
            <button className=" w-40 text-sm  border shadow-md text-green-600 rounded px-4 py-2 relative bottom-0 hover:bottom-1 hover:transition-all hover:delay-75 hover:duration-200 font-light">
              Became Vendor <HiArrowLongRight className="inline w-5 h-5" />
            </button>
          </div>

          <ul className="space-x-2 hidden lg:flex">
            <li className="flex cursor-pointer">
              <AccountMenuItem Icon={RxCrosshair1} title="Compare" />
            </li>
            <li className="flex cursor-pointer">
              <AccountMenuItem Icon={AiOutlineHeart} title="Wishlist" />
            </li>
            <li className="relative flex cursor-pointer">
              <AccountMenuItem Icon={AiOutlineShoppingCart} title="Cart" />
              <span className="text-xs w-5 h-5 text-center text-white absolute -left-1 -top-1 bg-green-600 leading-5 rounded-full">
                1
              </span>
            </li>{" "}
            <li className="flex cursor-pointer">
              <AccountMenuItem Icon={RxPerson} title="Account" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
