import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "@/pages/Login/Login";
import AppLayout from "@/Layout/AppLayout";
import NotFound from "@/404/404";
import Reports from "@/Features/Reports/Reports";
import Contact from "@/Features/Contact/Contact";
import Inquiry from "@/Features/Inquiry/Inquiry";
import Bills from "@/Features/Bills/Bills";
import Settings from "@/Features/Setting/Settings";
import Support from "@/Features/Support/Support";
import News from "@/Features/News/News";
import Services from "@/Features/Services/Services";
import Credits from "@/Features/Credits/Credits";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/credit",
        element: <Credits />,
      },
      {
        path: "/reports",
        element: <Reports />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/bills",
        element: <Bills />,
      },
      {
        path: "/inquiry",
        element: <Inquiry />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/support",
        element: <Support />,
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/services",
        element: <Services />,
      },
    ],
  },
  { path: "/login", element: <Login /> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
