import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import clsx from "clsx";

import { Link, useLocation } from "react-router-dom";

import css from "./AdditionalInfo.module.css";

const AdditionalInfo = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";
  return (
    <>
      <h4 className={clsx(css.additional_info_title)}>
        Additional information
      </h4>
      <Link
        to="cast"
        state={{ from: backLinkHref }}
        className={clsx(css.additional_info_link)}
      >
        Cast
      </Link>
      <Link
        to="reviews"
        state={{ from: backLinkHref }}
        className={clsx(css.additional_info_link)}
      >
        Reviews
      </Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default AdditionalInfo;
