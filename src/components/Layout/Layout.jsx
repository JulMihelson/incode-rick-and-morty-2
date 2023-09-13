import { Outlet } from "react-router-dom";

import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
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
