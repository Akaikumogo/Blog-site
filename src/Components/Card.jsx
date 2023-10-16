/* eslint-disable react/prop-types */

import parse from "html-react-parser";
import { ViewIcon } from "@chakra-ui/icons";
import { Code } from "@chakra-ui/react";
// eslint-disable-next-line no-unused-vars
const Card = ({ title, body, id, user, views, createdAt }) => {
  return (
    <div
      key={id}
      className="w-full rounded-lg my-5 border p-4 border-1 duration-200 hover:shadow-xl "
    >
      <div>
        <h1 className="text-[20px] font-bold w-auto card-title mb-4">
          {title}
        </h1>
        <div className="max-h-[100px] overflow-hidden rounded-md">
          {parse(body)}
        </div>
        <div className="flex justify-between items-center  p-1 border-t mt-4">
          <Code colorScheme="green" className=" font-bold text-[12px] ">
            <h1>{user.username}</h1>
          </Code>
          <div className="flex gap-3 mt-2">
            <p>{new Date(createdAt).toDateString()}</p>
            <div className=" flex gap-1 items-center">
              <ViewIcon />
              {views}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
