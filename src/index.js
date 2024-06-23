import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Rent from "./pages/rent/rent.jsx";
import Buy from "./pages/buy/Buy.jsx";

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
