// src/routes/AppRoutes.jsx
import { Routes, Route } from "react-router-dom";
import UserLayout from "../layouts/UserLayout";
import Login from "../pages/common/Login";
import Register from "../pages/common/Register";
import Profile from "../pages/common/Profile";
import NotFound from "../pages/common/NotFound";
import HomeTutor from "../pages/tutor/HomeTutor";
import HomeCustomer from "../pages/custommer/HomeCustomer";
import Guide from "../components/Guide/Guide";
import Policy from "../components/Policy/Policy";

import Home from "../pages/common/Home";
import SearchTutor from "../pages/tutor/SearchTutor";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<UserLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/hometutor" element={<HomeTutor />} />
        <Route path="/searchtutor" element={<SearchTutor />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/homecustomer" element={<HomeCustomer />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/policy" element={<Policy />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
