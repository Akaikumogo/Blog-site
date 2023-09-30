import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
function Layout() {
  return (
    <>
      <header className="sticky top-0 bg-white z-50">
        <Navbar />
      </header>
      <main className="w-full mx-auto max-w-[800px] mt-[50px]">
        <Outlet /> bu out let
      </main>
    </>
  );
}

export default Layout;
