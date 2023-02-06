import MainHeader from "./mainHeader/mainHeader";
import TopBar from "./topBar/topBar";

const Header = () => {
  return (
    <header className=" m-1.5">
      {/* top nav */}
      <TopBar />

      {/* main header nav */}
      <MainHeader />

      {/* menu nav */}
    </header>
  );
};

export default Header;
