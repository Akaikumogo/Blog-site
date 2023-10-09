import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { AddIcon, SettingsIcon } from "@chakra-ui/icons";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className=" py-[10px] mx-auto shadow-sm">
      <div className="container flex items-center justify-between">
        <img
          width="70px"
          src="https://teletype-blog-app.vercel.app/assets/logo-de927c5f.svg"
          alt=""
        />
        {localStorage.getItem("token") ? (
          <div className="flex items-center justify-center gap-3">
            <div className=" border  rounded-full flex items-center justify-center p-[5px] border-black">
              <AddIcon className="text-[20px] cursor-pointer" />
            </div>
            <div className="h-[18px] w-[2px] bg-black"></div>

            <SettingsIcon className="text-[27px] cursor-pointer " />
          </div>
        ) : (
          <div className="flex items-center gap-3 justify-between">
            <Button
              onClick={() => navigate("/sign-in")}
              colorScheme="blue"
              variant="outline"
            >
              Sign in
            </Button>
            <Button onClick={() => navigate("/sign-up")} colorScheme="blue">
              Sign up
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
