import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <header className="sticky top-0 bg-white z-50">
        <nav className=" py-[10px] shadow-sm">
          <div className="container flex items-center justify-between">
            <img
              width="70px"
              src="https://teletype-blog-app.vercel.app/assets/logo-de927c5f.svg"
              alt=""
            />
            <button className="bg-blue-500 py-[9px] px-[15px] text-white rounded-lg">
              Sign in
            </button>
          </div>
        </nav>
      </header>
      <main>
        <Outlet /> bu out let
      </main>
      <footer> bu footer </footer>
    </>
  );
}

export default Layout;
