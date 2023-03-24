import { ShareLinkIcon, SpotifyIcon } from "@/ui/icons";
import React from "react";
import Image from "next/image";

const SpotifyCard = () => {
  return (
    <div className="relative group bg-transparent h-52 p-6 rounded-2xl flex justify-center items-center  overflow-hidden cursor-pointer hover:scale-[0.94] transition duration-700 ">
      <Image
        src={`https://i.scdn.co/image/ab67616d0000b2730b832e5b6c8d99720689da36`}
        className="z-0 brightness-[0.5]"
        fill
        alt="spotify_album_image"
      />
      <div className="h-full w-full z-10 flex flex-col justify-between">
        <div className="flex flex-row justify-between items-center">
          <SpotifyIcon className="text-white h-8 w-8" />
          <ShareLinkIcon className="h-5 w-5 text-neutral-100 opacity-60 group-hover:opacity-100  transition duration-200 " />
        </div>

        <span>
          <h2 className="text-white text-sm font-overpassMono">
            <span
              className="mb-0.5 mr-1 inline-block h-2 w-2 animate-pulse rounded-full bg-green-500"
              aria-hidden
            />{" "}
            <span className="font-overpassMono">Listening to </span>{" "}
            <span className="font-bold " suppressHydrationWarning>
              Shot Me down
            </span>{" "}
            by{" "}
            <span className="font-bold" suppressHydrationWarning>
              Ollie
            </span>
            .
          </h2>
        </span>
      </div>
    </div>
  );
};

export default SpotifyCard;
