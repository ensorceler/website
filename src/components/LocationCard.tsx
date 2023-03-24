import Image from "next/image";
import { mapImg } from "../../public/assets";
import Avatar from "./Avatar";

const LocationCard = () => {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-transparent flex justify-center items-center">
      <Image src={mapImg?.src} className="z-0" fill alt="location_image" />
      <div className="absolute z-10 ml-auto mr-auto h-12 w-12 bg-green-500 rounded-full animate-ping"></div>{" "}
      <div className="relative overflow-hidden bg-rose-500 z-20 h-14 w-14 rounded-full border border-rose-100/5">
        <Avatar />
      </div>
    </div>
  );
};

export default LocationCard;
