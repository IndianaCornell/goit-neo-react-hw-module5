import clsx from "clsx";

import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Link } from "react-router-dom";

import css from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div className={clsx(css.navigation_box)}>
      <nav className={clsx(css.navigation_list)}>
        <Link to="/"> Home </Link>
        <Link to="/movies">Movies</Link>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Navigation;
