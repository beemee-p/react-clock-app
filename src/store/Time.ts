import { atom } from "recoil";

const getCurrentTime = () => {
  const now = new Date();
  return {
    hours: now.getHours(),
    minutes: now.getMinutes(),
    seconds: now.getSeconds(),
  };
};

const hoursAtom = atom({ key: "hours", default: getCurrentTime().hours });
const minutesAtom = atom({ key: "minutes", default: getCurrentTime().minutes });
const secondsAtom = atom({ key: "seconds", default: getCurrentTime().seconds });

export { hoursAtom, minutesAtom, secondsAtom };
