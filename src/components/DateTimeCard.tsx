import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import localizedFormat from "dayjs/plugin/localizedFormat";
import React from "react";
import DayCard from "./DateTime/DayCard";
import NightCard from "./DateTime/NightCard";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(localizedFormat);

const DateTimeCard = () => {
  const [kolkataTime, setKolkataTime] = React.useState("");
  const [timeOfDay, setTimeOfDay] = React.useState("day");

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      const kolkata = dayjs().tz("Asia/Kolkata");
      const formattedTime = kolkata.format("HH:mm");
      setKolkataTime(formattedTime);
      if (kolkata.hour() >= 6 && kolkata.hour() < 18) {
        setTimeOfDay("day");
      } else {
        setTimeOfDay("night");
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      {timeOfDay === "day" && <DayCard time={kolkataTime} />}
      {timeOfDay === "night" && <NightCard time={kolkataTime} />}
    </>
  );
};

export default DateTimeCard;
