/* eslint-disable react/no-unescaped-entities */

import { useState } from "react";
import {
  Button,
  FormControl,
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

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isInvalidUserName, setIsInvalidUserName] = useState(false); // Set the initial value to false
  const { isLoading, startLoading, endLoading } = useLoader();
  const toast = useToast();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const signUpFunc = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-unused-vars
    const [fullname, username, password, confirmPassword] =
      e.target.querySelectorAll("input");

    setIsInvalidUserName(!/^[@_a-zA-Z]+$/.test(username.value));

    startLoading();
    setTimeout(() => {
      endLoading(true);

      if (!isInvalidUserName && password.value == confirmPassword.value) {
        navigate("/");
        toast({
          title: `${username.value}`,
          status: "success",
          position: "top",
          variant: "top-accent",
        });
      } else {
        toast({
          title: `Username invalid`,
          status: "error",
          position: "top",
          variant: "top-accent",
        });
      }
    }, 500);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="h-screen w-full flex items-center justify-center">
        <div className="w-full max-w-[450px] shadow-lg p-7 rounded-xl  ">
          <div className="relative">
            <ArrowBackIcon
              onClick={() => navigate("/")}
              className="cursor-pointer absolute pointer left-0 top-[50%] text-[23px] font-bold -translate-y-[50%]"
            />
            <Text fontSize="2xl" className="font-bold text-center mb-[40px]">
              Sign Up
            </Text>
          </div>
          <form onSubmit={(e) => signUpFunc(e)}>
            <FormControl>
              <FormLabel htmlFor="fullname">Full name</FormLabel>
              <Input
                required
                id="fullname"
                placeholder="Full name"
                type="text"
              />
              <FormLabel htmlFor="username" className="mt-[10px]">
                User Name
              </FormLabel>
              <Input
                required
                onChange={(e) =>
                  setIsInvalidUserName(!/^[@_a-zA-Z]+$/.test(e.target.value))
                }
                isInvalid={isInvalidUserName}
                type="text"
                placeholder="User name"
                id="username"
              />
              <FormLabel htmlFor="password" className="mt-[10px]">
                Create password
              </FormLabel>
              <InputGroup>
                <Input
                  required
                  type={showPassword ? "text" : "password"}
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
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
              <FormLabel htmlFor="confirm" className="mt-[10px]">
                Confirm Password
              </FormLabel>
              <InputGroup>
                <Input
                  required
                  type={showPassword ? "text" : "password"}
                  id="confirm"
                  isInvalid={password != confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
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
                Sign up
              </Button>
            </FormControl>
          </form>

          <div className="text-center w-full mx-auto mt-5">
            <Link to="/sign-in">
              If you have an account
              <span className="text-blue-800 ">Sign in</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
