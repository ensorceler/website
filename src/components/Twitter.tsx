import { TwitterIcon } from "@/ui/icons";
import React from "react";

const Twitter = () => {
  return (
    <div className="col-span-1 group rounded-2xl bg-sky-500 flex justify-center items-center cursor-pointer hover:scale-[0.93] transition duration-700 ">
      <TwitterIcon className="h-8 w-8 text-white group-hover:scale-125 group-hover:-rotate-[20deg] transition duration-200" />
    </div>
  );
};

export default Twitter;
