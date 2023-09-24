import { memo, ReactElement } from "react";
import { Route, Routes, Outlet } from "react-router-dom";

import { Login } from "../components/pages/Login";
import { homeRoutes } from "./HomeRoutes";
import { Page404 } from "../components/pages/Page404";
import { HeaderLayout } from "../components/templates/HeaderLayout";

export const Router = memo(
  (): ReactElement => {
    return (
      <Routes>
        <Route path="/" element={<Login />} index />
        <Route path="/home" element={<Outlet />}>
          {homeRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<HeaderLayout>{route.children}</HeaderLayout>}
            />
          ))}
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    );
  }
);
