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

import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import useLoader from "../../Store";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { isLoading, startLoading, endLoading } = useLoader();
  const toast = useToast();

  const signInFunc = () => {
    startLoading();
    setTimeout(() => {
      endLoading(true);
      toast({
        title: "Hello bro",
        status: "success",
        position: "top",
        variant: "top-accent",
      });
    }, 500);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="w-full max-w-[450px] shadow-lg p-7 rounded-xl">
        <Text fontSize="2xl" className="font-bold text-center mb-[40px]">
          Sign In
        </Text>
        <FormControl>
          <FormLabel htmlFor="username">User Name</FormLabel>
          <Input id="username" type="text" />

          <FormLabel htmlFor="password" className="mt-[10px]">
            Password
          </FormLabel>
          <InputGroup>
            <Input type={showPassword ? "text" : "password"} id="password" />
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
            onClick={signInFunc}
            isLoading={isLoading}
            colorScheme="blue"
            className="w-full mt-[25px]"
          >
            Sign in
          </Button>
        </FormControl>
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
