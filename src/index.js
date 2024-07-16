import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Rent from "./pages/rent/Rent.jsx";
import Buy from "./pages/buy/Buy.jsx";
import PropertyPage from "./pages/PropertyPage/PropertyPage.jsx";
import AdminPanel from "./pages/admin/adminPanel/AdminPanel.jsx";
import OffPlan from "./pages/offplan/OffPlan.jsx";
import Commercial from "./pages/commercial/Commercial.jsx";
import About from "./pages/about/About.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Login from "./components/login/Login.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/property",
        element: <PropertyPage />,
      },
      {
        path: "/admin",
        element: <AdminPanel />,
      },
      {
        path: "/rent",
        element: <Rent />,
      },
      {
        path: "/buy",
        element: <Buy />,
      },
      {
        path: "/commercial",
        element: <Commercial />,
      },
      {
        path: "/offPlan",
        element: <OffPlan />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/property-details/:propertyId",
        element: <PropertyPage />,
      },
      {
        path: "/login",
        element: <Login/>,
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
