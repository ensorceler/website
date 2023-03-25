import Image from "next/image";
import { nightGif } from "../../../public/assets";

const NightCard = ({ time }: { time: string }) => {
  return (
    <div className="relative bg-sky-900 rounded-2xl overflow-hidden">
      <Image
        src={nightGif?.src}
        className="brightness-125"
        fill
        alt="nightime_gif"
      />
      <div className="relative w-full h-full z-10 flex justify-center items-center ">
        <div className="flex flex-col gap-0.5 items-center">
          <p className="font-medium text-white text-glow-white/5">{time}</p>
          <p className="font-medium text-xs text-white/75">in India</p>
        </div>
      </div>
    </div>
  );
};

export default NightCard;
