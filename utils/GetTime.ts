import dayjs from "dayjs";
import "dayjs/locale/en-gb";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.locale("en-gb");
dayjs.extend(utc);
dayjs.extend(timezone);

export function getDay(): string {
  return dayjs().tz("Europe/Zagreb").format("dddd");
}

export function getTime(): string {
  return dayjs().tz("Europe/Zagreb").format("HH:mm");
}

export function getDate(): string {
  return dayjs().tz("Europe/Zagreb").format("DD. MM. YYYY.");
}
