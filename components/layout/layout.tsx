import { ReactNode } from "react";
import Header from "../header/header";
import styles from "./layout.module.scss";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
    </div>
  );
};

export default Layout;
