import { RecoilState, atom } from "recoil";
import { getCurrentTime, getHourDegree, getTimeDegree } from "../utils/Time";

export type ClockType = Record<"hours" | "minutes" | "seconds", number>;

const now = getCurrentTime();

const clockRotateAtom: RecoilState<ClockType> = atom({
  key: "clockRotate",
  default: {
    hours: getHourDegree(now.hours, now.minutes),
    minutes: getTimeDegree(now.minutes),
    seconds: getTimeDegree(now.seconds),
  },
});

export { clockRotateAtom };
