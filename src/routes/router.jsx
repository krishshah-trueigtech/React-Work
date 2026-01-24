import React, { Suspense } from "react";
import { createBrowserRouter, Link, Outlet } from "react-router-dom";
import SignUp from "../pages/signUp.jsx";
import LoginForm , { loginAction }from "../pages/LoginPage.jsx";
import { userListLoader } from "../pages/UserList.jsx";
import { userDetailLoader } from "../pages/UserDetail.jsx";
import ProtectedRoute from "../components/ProtectedRoute";

const UserList = React.lazy(() => import("../pages/UserList.jsx"));
const UserDetail = React.lazy(() => import("../pages/UserDetail.jsx"));

const RouteLayout = () => (
  <div className="container">
    <nav style={{ padding: "20px", borderBottom: "1px solid #ccc" }}>
      <Link to="/" style={{ margin: "10px" }}>
        Sign Up
      </Link>
      <Link to="/login" style={{ margin: "10px" }}>
        Login
      </Link>
      <Link to="/users" style={{ margin: "10px" }}>
        User List
      </Link>
    </nav>
    <main>
      <Suspense fallback={<div>Loading Page...</div>}>
        <Outlet />
      </Suspense>
    </main>
  </div>
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RouteLayout />,
    children: [
      { index: true, element: <SignUp /> },
      { path: "login", 
        element: <LoginForm/>, 
        action: loginAction },
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
    ],
  },
]);
