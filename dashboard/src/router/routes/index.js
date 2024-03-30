import { privateRoutes } from "./privateRoutes";
import MainLayout from "../../layout/MainLayout";

export const getRoutes = () => {
  return {
    element: <MainLayout />,
    children: privateRoutes,
  };
};
