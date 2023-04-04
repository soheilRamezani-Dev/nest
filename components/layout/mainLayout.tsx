import { ComponentProps, ReactElement } from "react";
import Header from "./header/header";
import Footer from "./footer/footer";

const MainLayout = ({ children }: { children: ReactElement }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
