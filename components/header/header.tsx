import { useEffect, useRef, useState } from "react";
import MainHeader from "./mainHeader/mainHeader";
import ThirdMenu from "./thirdMenu/thirdMenu";
import TopBar from "./topBar/topBar";
import type { Ref } from "./mobileNav/mobileNav";
import MobileNav from "./mobileNav/mobileNav";
import { collection, getDocs, query } from "firebase/firestore";
import database from "../../firebase/firestore";
import { Menu } from "../types";

const Header = () => {
  const mobileMenueComponent = useRef<Ref>(null);

  // mobile fixed menu toggle handler
  const mobileMenuToggleHandler = () => {
    if (mobileMenueComponent.current) {
      mobileMenueComponent.current.toggleMobileMenu();
    }
  };
  const [allHeaderMenus, setAllHeaderMenus] = useState<Menu[]>();

  // in getMenus function we get all menus for header with one request and distribute to relative components
  const getMenus = async () => {
    const q = query(collection(database, "menus"));
    const menusDocuments = await getDocs(q);
    let data: Menu[] = [];
    menusDocuments.forEach((element) => {
      data = [...data, element.data() as Menu];
    });
    setAllHeaderMenus(data);
  };

  const getMobileMenus = () => {
    return allHeaderMenus?.filter((menu) => menu.showInMobile == true);
  };

  const categoryMenu = () => {
    return allHeaderMenus?.filter((menu) => menu.title == "categories")[0];
  };
  const pagesMenu = () => {
    return allHeaderMenus?.filter((menu) => menu.title == "pages")[0];
  };
  const topBarMenu = () => {
    return allHeaderMenus?.filter((menu) => menu.title == "topMenu")[0];
  };

  useEffect(() => {
    getMenus();
  }, []);

  return (
    <header className=" m-1.5">
      {/* top nav */}
      <TopBar topBarMenu={topBarMenu() as Menu} />

      {/* main header nav */}
      <MainHeader menuIconOnClick={mobileMenuToggleHandler} />

      {/* mobile left menu : this menu showing just in mobile by click on togller button */}
      <MobileNav
        mobileMenusItem={getMobileMenus() as Menu[]}
        ref={mobileMenueComponent}
      />

      {/* menu nav : this menu showing just in desktop*/}
      <ThirdMenu
        categoryMenu={categoryMenu() as Menu}
        pagesMenu={pagesMenu() as Menu}
      />
    </header>
  );
};

export default Header;
