import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";

import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useState } from "react";
const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <div className="h-screen w-full flex items-center justify-center">
        <div className="w-full max-w-[450px] shadow-lg p-7 rounded-xl  ">
          <Text fontSize="2xl" className="font-bold text-center mb-[40px]">
            Sign up
          </Text>
          <FormControl>
            <FormLabel htmlFor="fullname">Full name</FormLabel>
            <Input id="fullname" placeholder="Full name" type="text" />
            <FormLabel htmlFor="username" className="mt-[10px]">
              User Name
            </FormLabel>
            <Input type="text" placeholder="User name" id="username" />
            <FormLabel htmlFor="password" className="mt-[10px]">
              Create password
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
            <FormLabel htmlFor="confirm" className="mt-[10px]">
              Confirm Password
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
            <Button colorScheme="blue" className="w-full mt-[25px]">
              Sign up
            </Button>
          </FormControl>
          <div className="text-center w-full mx-auto mt-5">
            <Link to="/sign-in">
              If you have an account{" "}
              <span className="text-blue-800 ">Sign in</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
