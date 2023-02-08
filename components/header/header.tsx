import MainHeader from "./mainHeader/mainHeader";
import ThirdMenu from "./thirdMenu/thirdMenu";
import TopBar from "./topBar/topBar";

const Header = () => {
  return (
    <header className=" m-1.5">
      {/* top nav */}
      <TopBar />

      {/* main header nav */}
      <MainHeader />

      {/* menu nav : this menu showing just in desktop*/}
      <ThirdMenu />
    </header>
  );
};

export default Header;
