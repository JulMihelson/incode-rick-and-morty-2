import { Outlet } from "react-router-dom";

import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import ActiveBtn from "../ActiveBtn/ActiveBtn";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <ActiveBtn />
        <Outlet />
      </main>

      <Footer
        href="../../assets/incode-logo.png"
        alt="incode-logo"
        width={50}
      />
    </>
  );
};
export default Layout;
