import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "@/pages/Login/Login";
import AppLayout from "@/Layout/AppLayout";
import Dashboard from "./Features/Dashboad/Dashboard";
import NotFound from "./404/404";
import Reports from "./Features/Reports/Reports";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/reports",
        element: <Reports />,
      },
    ],
  },
  { path: "/login", element: <Login /> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
