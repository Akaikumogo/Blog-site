/* eslint-disable react/no-unescaped-entities */

import { useState } from "react";
import {
  Button,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useToast,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon, ArrowBackIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import useLoader from "../../Store";
import useUserAPI from "../../API/User";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isInvalidUserName, setIsInvalidUserName] = useState();
  const { isLoading, startLoading, endLoading } = useLoader();

  const { signIn } = useUserAPI();

  const toast = useToast();
  const navigate = useNavigate();

  const signInFunc = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-unused-vars
    const [username, password] = e.target.querySelectorAll("input");

    setIsInvalidUserName(/^[@_a-zA-Z]+$/.test(username.value));

    startLoading();
    setTimeout(() => {
      if (isInvalidUserName) {
        const body = {
          username: username.value,
          password: password.value,
        };
        signIn(body)
          .then((res) => {
            console.log(res.data);
            if (res.data) {
              localStorage.setItem("token", res.data?.token);
              localStorage.setItem("my_id", res.data?.user?.id);
              localStorage.setItem("username", res.data?.user?.username);
              navigate("/");
              toast({
                title: `${username.value}`,
                status: "success",
                position: "top",
                variant: "top-accent",
              });
            }
          })
          .catch(() => {
            toast({
              title: `Unday user mavjud emas `,
              status: "error",
              position: "top",
              variant: "top-accent",
            });
          });
      } else {
        toast({
          title: `Username xato`,
          status: "error",
          position: "top",
          variant: "top-accent",
        });
      }
      endLoading(true);
    }, 1000);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="w-full max-w-[450px] shadow-lg p-7 rounded-xl">
        <div className="relative">
          <ArrowBackIcon
            onClick={() => navigate("/")}
            className="cursor-pointer absolute pointer left-0 top-[50%] text-[23px] font-bold -translate-y-[50%]"
          />
          <Text fontSize="2xl" className="font-bold text-center mb-[40px]">
            Sign In
          </Text>
        </div>
        <form onSubmit={(e) => signInFunc(e)}>
          <FormLabel htmlFor="username">User Name</FormLabel>
          <Input
            onChange={(e) =>
              setIsInvalidUserName(/^[@_a-zA-Z]+$/.test(e.target.value))
            }
            isInvalid={!isInvalidUserName}
            required
            id="username"
            type="text"
          />

          <FormLabel htmlFor="password" className="mt-[10px]">
            Password
          </FormLabel>
          <InputGroup>
            <Input
              required
              type={showPassword ? "text" : "password"}
              id="password"
            />
            <InputRightElement width="4.5rem">
              <Button
                h="1.75rem"
                size="sm"
                onClick={handleTogglePassword}
                tabIndex="-1"
              >
                {showPassword ? <ViewOffIcon /> : <ViewIcon />}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Button
            type="submit"
            isLoading={isLoading}
            colorScheme="blue"
            className="w-full mt-[25px]"
          >
            Sign in
          </Button>
        </form>
        <div className="text-center w-full mx-auto mt-5">
          <Link to="/sign-up">
            If you don't have an account
            <span className="text-blue-800"> Sign up</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
