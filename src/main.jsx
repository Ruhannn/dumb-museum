import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./Home.jsx";
import Layout from "./Layout/Layout";
import axios from "axios";
import ProductsPage from "./Components/ProductsPage.jsx";
import Dashboard from "./Components/Dashboard.jsx";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        loader: async () => {
          const res = await axios.get("/data.json");
          return res.data;
        },
        element: <Home />,
      },
      {
        path: "idea/:id",
        loader: async ({ params }) => {
          const res = await axios.get("/data.json");
          const product = res.data.find(
            (product) => product.id === Number(params.id),
          );
          return product;
        },
        element: <ProductsPage />,
      },
      {
        path: "dashboard",
        loader: async () => {
          const res = await axios.get("/data.json");
          return res.data;
        },
        element: <Dashboard />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Toaster
      position="bottom-right"
      toastOptions={{
        style: {
          background: "var(--color-base-100)",
          color: "var(--color-base-content)",
        },
        success: {
          style: {
            background: "var(--color-success)",
            color: "var(--color-success-content)",
          },
        },
        error: {
          style: {
            background: "var(--color-error)",
            color: "var(--color-error-content)",
          },
        },
      }}
    />
  </StrictMode>,
);
