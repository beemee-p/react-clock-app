import { useState } from "react";

type ThrottleFunction<T extends (...args: any[]) => void> = (
  ...args: Parameters<T>
) => void;

export function useThrottle<T extends (...args: any[]) => void>(
  callback: T,
  delay: number
): ThrottleFunction<T> {
  const [lastExecTime, setLastExecTime] = useState(0);

  return (...args: Parameters<T>) => {
    const currentTime = Date.now();

    if (currentTime - lastExecTime >= delay) {
      callback(...args);
      setLastExecTime(currentTime);
    }
  };
}
