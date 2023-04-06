import { getDocs, query, collection, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import database from "../../../../firebase/firestore";
import { Menu } from "../../../types";
import SubMenuItem from "../subMenuItem";

const MobileMenus = ({ mobileMenusItem }: { mobileMenusItem: Menu[] }) => {
  const [activeMenu, setActiveMenu] = useState("");
  useEffect(() => {
    if (mobileMenusItem) {
      setActiveMenu(mobileMenusItem[0]?.id);
    }
  }, [mobileMenusItem]);
  return (
    <div>
      {/* menu selection */}
      <div className="mt-14">
        <ul className="flex space-x-2">
          {mobileMenusItem?.map((menu) => (
            <li
              key={menu.id}
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
          {(mobileMenusItem as Menu[])
            ?.find((vlaue) => vlaue.id === activeMenu)
            ?.children?.map((activemenueItem, index) => (
              <SubMenuItem key={index} activemenueItem={activemenueItem} />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileMenus;
