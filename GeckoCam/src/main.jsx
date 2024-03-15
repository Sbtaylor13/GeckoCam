import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Gecko from "./pages/GeckoPage.jsx";
import FrontPage from "./pages/FrontPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FrontPage />,
  },
  {
    path: "/Gecko",
    element: <Gecko />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/*<RouterProvider router={router} />*/}
    <App />
  </React.StrictMode>
);
