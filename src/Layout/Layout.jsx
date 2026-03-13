import { Outlet } from "react-router";
import Navbar from "../Components/Shared/Navbar";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
