import { createBrowserRouter } from "react-router"; 
import RootLayout from '../layouts/RootLayout';
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Offers from "../pages/Offers";
import TrackOrder from "../pages/TrackOrder";
import Dashboard from "../pages/Dashboard";
import Register from "../pages/Register";
import SignIn from "../pages/SignIn";
import ErrorPage from "../pages/ErrorPage";

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
        path: "Dashboard", 
        Component: Dashboard,
      },
      {
        path: "register",
        Component:Register
      },
      {
        path: "signin",
        Component:SignIn
      },
      {
        path: "*",
        Component:ErrorPage
      }
    ],
  }
]);

export default router;
