import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import ListingPage from "./pages/ListingPage.jsx";
import ProductDetails from "./components/ProductDetails.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import collections from "./constants/collections.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "all-houseplants",
        element: <ListingPage collections={collections} />,
      },
      {
        path: "easy-to-care",
        element: <ListingPage collections={collections} />,
      },
      { path: "pet-safe", element: <ListingPage collections={collections} /> },
      {
        path: "succulents",
        element: <ListingPage collections={collections} />,
      },
      { path: "palms", element: <ListingPage collections={collections} /> },
      { path: ":id", element: <ProductPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
