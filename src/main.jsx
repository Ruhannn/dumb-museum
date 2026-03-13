import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./Home.jsx";
import Layout from "./Layout/Layout";
import axios from "axios";
import ProductsPage from "./Components/ProductsPage.jsx";

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
        element: <>dasdasdasd</>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
