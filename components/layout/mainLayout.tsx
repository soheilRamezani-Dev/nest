import { ComponentProps, ReactElement } from "react";
import Header from "../header/header";

const MainLayout = ({ children }: { children: ReactElement }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;
