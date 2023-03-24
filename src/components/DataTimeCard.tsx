import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import localizedFormat from "dayjs/plugin/localizedFormat";
import React from "react";
import Image from "next/image";
import { nightGif } from "../../public/assets";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(localizedFormat);

const DateTimeCard = () => {
  const day = dayjs.tz(new Date(), "Asia/Kolkata");

  const [kolkataTime, setKolkataTime] = React.useState("");

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      const kolkata = dayjs().tz("Asia/Kolkata");
      const formattedTime = kolkata.format("HH : mm");
      setKolkataTime(formattedTime);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

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
          <p className="font-medium text-white text-glow-white/5">
            {kolkataTime}
          </p>
          <p className="font-medium text-xs text-white/75">in India</p>
        </div>
      </div>
    </div>
  );
};

export default DateTimeCard;
