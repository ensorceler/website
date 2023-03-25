import React from "react";
import Avatar from "./Avatar";
import Link from "next/link";

const ProfileHeader = () => {
  return (
    <div className="p-6 bg-pink-500/20 backdrop-blur-lg rounded-2xl col-span-2 flex justify-center items-center md:h-40">
      <div className="flex flex-col items-center justify-center gap-3 md:flex md:flex-row ">
        <div className="h-16 w-16 relative overflow-hidden bg-rose-300/50 rounded-full">
          <Avatar />
        </div>
        <div className="flex flex-col justify-center gap-1 items-center md:items-start">
          <p className="font-overpassMono font-medium text-lg text-pink-300 text-glow-pink-500">
            shakil ahmed
          </p>
          <p className="text-sm text-center md:text-left font-medium text-pink-300 text-glow-pink-500/50">
            22 y/o fullstack Typescript Developer{" "}
          </p>
          <Link href="/blog" target="_blank" passHref>
            <p className="text-sm font-medium text-pink-300 ">blog ↗️</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
