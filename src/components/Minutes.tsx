import { ReactElement, useEffect } from "react";
import { useRecoilState } from "recoil";
import { minutesAtom } from "store/Time";

const Minutes = (): ReactElement => {
  const [minutes, setMinutes] = useRecoilState(minutesAtom);

  useEffect(() => {
    const minInterval = setInterval(
      () => setMinutes((prevMin) => prevMin + 1),
      60000
    );

    return () => clearInterval(minInterval);
  }, []);

  return <div>Minutes : {minutes}</div>;
};

export default Minutes;
