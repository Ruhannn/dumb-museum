import { Outlet } from "react-router";
import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Shared/Footer";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
