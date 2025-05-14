import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.scss";

type RouteItem = {
  name: string;
  path: string;
};

const routes: RouteItem[] = [
  {
    name: "Component Nesting",
    path: "/",
  },
  {
    name: "Re-renders with composition: moving state down",
    path: "/top-level-state",
  },
  {
    name: "Re-renders with composition: children as props",
    path: "/components-with-scroll-and-heavy-child",
  },
  {
    name: "Key values in lists",
    path: "/list-with-random-keys",
  },
];

const SideNav: React.FC = () => {
  return (
    <aside className={styles.sideNav}>
      <nav>
        <ul className={styles.navList}>
          {routes.map((route, index) => (
            <li key={route.path}>
              <NavLink
                to={route.path}
                className={({ isActive }) =>
                  `${isActive && styles.activeLink} ${styles.link}`
                }
              >
                {index + 1}. {route.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default SideNav;
