import { DiscordIcon } from "@/ui/icons";
import React from "react";

const DiscordStatus = () => {
  return (
    <div className="bg-blurple rounded-2xl h-52 flex justify-center items-center">
      <div className="flex flex-col items-center gap-3">
        <div className="flex flex-row items-center gap-2 -rotate-[5deg]">
          <DiscordIcon className="h-12 w-12 text-white" />
          <p className="text-xl text-white font-medium">offline</p>
        </div>
        <p className="text-white -rotate-[5deg]">ensorceler#0193</p>
      </div>
    </div>
  );
};

export default DiscordStatus;
