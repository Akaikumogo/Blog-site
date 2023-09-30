import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className=" py-[10px] shadow-sm">
      <div className="container flex items-center justify-between">
        <img
          width="70px"
          src="https://teletype-blog-app.vercel.app/assets/logo-de927c5f.svg"
          alt=""
        />
        <button
          onClick={() => navigate("/sign-in")}
          className="bg-blue-500 py-[9px] px-[15px] text-white rounded-lg"
        >
          Sign in
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
