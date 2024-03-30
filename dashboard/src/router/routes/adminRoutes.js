import { lazy } from "react";

const AdminDashBoard = lazy(() => import("../../views/admin/AdminDashboard"));

export const adminRoutes = [
  { path: "admin/dashboard", element: <AdminDashBoard /> },
];
