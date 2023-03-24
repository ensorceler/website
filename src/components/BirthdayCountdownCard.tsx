import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import duration from "dayjs/plugin/duration";
import React from "react";

dayjs.extend(customParseFormat);
dayjs.extend(duration);

const birthdate = dayjs("2000-06-27", "YYYY-MM-DD");

const BirthdayCountdownCard = () => {
  const [durationDays, setDurationDays] = React.useState("");

  React.useEffect(() => {
    const today = dayjs();
    const nextBirthdate = birthdate.year(today.year()).isBefore(today)
      ? birthdate.year(today.year() + 1)
      : birthdate.year(today.year());
    const diffDuration = dayjs.duration(nextBirthdate.diff(today));
    setDurationDays(Math.floor(diffDuration.asDays()).toString());
  });

  return (
    <div className="rounded-2xl bg-[#23224c] flex justify-center items-center">
      <p className="text-indigo-500 text-sm">
        <span className="text-xs">
          <span className="text-base font-overpassMono font-medium text-glow-indigo-500">
            {durationDays} days
          </span>{" "}
          <br /> until birthday
        </span>
      </p>
    </div>
  );
};
export default BirthdayCountdownCard;
