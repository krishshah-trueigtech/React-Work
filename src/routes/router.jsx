import React, { Suspense } from "react";
import { createBrowserRouter, Link, Outlet } from "react-router-dom";
import SignUp from "../pages/signUp.jsx";
import LoginForm, { loginAction } from "../pages/LoginPage.jsx";
import { userListLoader } from "../pages/UserList.jsx";
import { userDetailLoader } from "../pages/UserDetail.jsx";
import ProtectedRoute from "../components/ProtectedRoute";
import RouteLayout from "../components/RouteLayout";

const UserList = React.lazy(() => import("../pages/UserList.jsx"));
const UserDetail = React.lazy(() => import("../pages/UserDetail.jsx"));
const WeatherApp = React.lazy(() => import("../pages/WeatherApp.jsx"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RouteLayout />,
    children: [
      { index: true, element: <SignUp /> },
      { path: "login", element: <LoginForm />, action: loginAction },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "users",
            element: <UserList />,
            loader: userListLoader,
            children: [
              {
                path: ":id",
                element: <UserDetail />,
                loader: userDetailLoader,
              },
            ],
          },
        ],
      },
      { path: "weather", element: <WeatherApp /> },
    ],
  },
]);
