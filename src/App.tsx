import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
  },
  { path: "/login", element: <Login /> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
