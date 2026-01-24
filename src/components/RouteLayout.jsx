import React, { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";
import { useTheme } from "../context/themeContext";

const RouteLayout = () => {
  const { theme, toggleTheme } = useTheme();
  return (
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
        <Link to="/weather" style={{ margin: "10px" }}>
          Weather App
        </Link>
        <button
          onClick={toggleTheme}
          style={{ marginLeft: "auto", padding: "8px 16px" }}
        >
          {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
      </nav>

      <main>
        <Suspense fallback={<div>Loading Page...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default RouteLayout;
