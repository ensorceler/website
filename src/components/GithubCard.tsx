import Image from "next/image";
import { motion } from "framer-motion";
import { matrixGif } from "../../public/assets";
import { GithubIcon, ShareLinkIcon } from "@/ui/icons";

const GithubCard = () => {
  return (
    <div
      className="p-6 group relative flex flex-col justify-between bg-green-500/20 rounded-2xl cursor-pointer overflow-hidden
      hover:scale-[0.94] transition duration-700
    "
    >
      <Image
        className="z-0 brightness-[0.4]"
        fill
        src={matrixGif?.src}
        alt="matrix rain"
      />
      <div className="z-10 h-full flex flex-col justify-between">
        <div className="w-full flex flex-row justify-between items-center">
          <GithubIcon className="h-7 w-7 text-white " />
          <ShareLinkIcon className="h-5 w-5 text-neutral-100 opacity-60 transition duration-500 group-hover:opacity-100 group-hover:scale-105" />
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-overpassMono font-medium text-white text-lg">
            github
          </p>
          <p className="text-white text-sm text-medium">
            my open source work & contributions
          </p>
        </div>
      </div>
    </div>
  );
};
export default GithubCard;
