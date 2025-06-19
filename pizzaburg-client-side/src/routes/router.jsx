import { createBrowserRouter } from "react-router"; 
import RootLayout from '../layouts/RootLayout';
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Offers from "../pages/Offers";
import TrackOrder from "../pages/TrackOrder";
import Dashboard from "../pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "Menu",
        Component: Menu,
      },
      {
        path: "Offers",
        Component: Offers,
      },
      {
        path: "TrackOrder",
        Component: TrackOrder,
      },
      {
        path: "Dashboard", // ✅ fixed: removed slash, consistent with others
        Component: Dashboard,
      }
    ],
  }
]);

export default router;
