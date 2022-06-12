import { Header } from "../header/header";
import { Outlet } from "react-router-dom";
import { Footer } from "../footer/footer";

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
