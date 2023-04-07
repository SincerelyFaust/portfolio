import dayjs from "dayjs";
import "dayjs/locale/en-gb";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.locale("en-gb");
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(customParseFormat);

export function calculateHourDifference(): string {
  const clientTime = dayjs(dayjs(), "DD/MM/YYYY HH:mm");
  const localTime = dayjs(
    dayjs().tz("Europe/Zagreb").format("DD/MM/YYYY HH:mm"),
    "DD/MM/YYYY HH:mm",
  );
  const timeDiff = clientTime.diff(localTime, "hour");

  if (timeDiff < 0) {
    return `${timeDiff.toString().replace("-", "")} hours behind you`;
  } else if (timeDiff === 0) {
    return "Same time as you";
  }
  return `${timeDiff} hours ahead of you`;
}
