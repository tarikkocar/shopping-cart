import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import ListingPage from "./pages/ListingPage.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import collections from "./constants/collections.js";
import HomePage from "./pages/HomePage.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "all-houseplants",
        element: (
          <ListingPage key="all-houseplants" collections={collections} />
        ),
      },
      {
        path: "easy-to-care",
        element: <ListingPage key="easy-to-care" collections={collections} />,
      },
      {
        path: "pet-safe",
        element: <ListingPage key="pet-safe" collections={collections} />,
      },
      {
        path: "succulents",
        element: <ListingPage key="succulents" collections={collections} />,
      },
      {
        path: "palms",
        element: <ListingPage key="palms" collections={collections} />,
      },
      { path: ":id", element: <ProductPage /> },
      { path: "cart", element: <CartPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
