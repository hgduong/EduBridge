// src/layouts/UserLayout.jsx
import { Outlet } from "react-router-dom";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";

const UserLayout = () => {
  return (
    <div className="layout-root">
      <Header />
      <main className="layout-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default UserLayout;
