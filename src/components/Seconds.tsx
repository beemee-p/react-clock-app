import { ReactElement, useEffect } from "react";
import { useRecoilState } from "recoil";
import { secondsAtom } from "store/Time";

const Seconds = (): ReactElement => {
  const [seconds, setSeconds] = useRecoilState(secondsAtom);

  useEffect(() => {
    const secInterval = setInterval(() => {
      setSeconds((prevSec) => prevSec + 1);
    }, 1000);

    return () => clearInterval(secInterval);
  }, []);

  return <div>Seconds : {seconds}</div>;
};

export default Seconds;
