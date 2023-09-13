import GalleryList from "../Gallery/GalleryList";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <GalleryList />
      <Footer
        href="../../assets/incode-logo.png"
        alt="incode-logo"
        width={50}
      />
      {/* </Outlet> */}
    </>
  );
};
export default Layout;
