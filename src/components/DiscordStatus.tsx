import { DiscordIcon } from "@/ui/icons";
import twFusion from "@/utils/twFusion";
import React from "react";

interface Props {
  userInfo: {
    username: string;
    discriminator: string;
  };
  status: string;
}
const DiscordStatus = ({ userInfo, status }: Props) => {
  return (
    <div
      className={twFusion(
        "bg-blurple rounded-2xl h-52 flex justify-center items-center",
        status === "online" && "bg-green-500",
        status === "idle" && "bg-yellow-500"
      )}
    >
      <div className="flex flex-col items-center gap-3">
        <div className="flex flex-row items-center gap-2 -rotate-[5deg]">
          <DiscordIcon className="h-12 w-12 text-white" />
          <p className="text-xl text-white font-medium">{status}</p>
        </div>
        <p className="text-white -rotate-[5deg]">
          {userInfo?.username}#{userInfo?.discriminator}
        </p>
      </div>
    </div>
  );
};

export default DiscordStatus;
