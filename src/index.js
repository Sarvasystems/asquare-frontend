import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Rent from "./pages/rent/Rent.jsx";
import Buy from "./pages/buy/Buy.jsx";
import PropertyPage from "./pages/PropertyPage/PropertyPage.jsx";
import AdminPanel from "./pages/admin/adminPanel/AdminPanel.jsx";

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
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
