import { createBrowserRouter } from "react-router";
import HomePage from "./pages/home-page/HomePage";
import ShopPage from "./pages/shop-page/ShopPage";
import CartPage from "./pages/cart-page/CartPage";
import ErrorPage from "./pages/error-page/ErrorPage";
import Layout from "./Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "shop", element: <ShopPage /> },
      { path: "cart", element: <CartPage /> },
    ],
    errorElement: <ErrorPage />,
  },
]);
