import React from "react";
import { Outlet } from "react-router-dom";
import SideNav from "../../common/SideNav";
import styles from "./styles.module.scss";

const DefaultLayout: React.FC = () => {
  return (
    <main className={styles.main}>
      <SideNav />
      <Outlet />
    </main>
  );
};

export default DefaultLayout;
