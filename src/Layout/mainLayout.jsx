import { Outlet } from "react-router-dom";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import { SideBar } from "../Components/Sidebar";
const MainLayout = () => {
  return (
    <main>
      <Header />
      <Outlet />
      <SideBar />
      <Footer />
    </main>
  );
};

export default MainLayout;
