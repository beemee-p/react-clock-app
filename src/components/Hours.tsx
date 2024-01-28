import { ReactElement, useEffect } from "react";
import { useRecoilState } from "recoil";
import { hoursAtom } from "store/Time";

const Hours = (): ReactElement => {
  const [hours, setHours] = useRecoilState(hoursAtom);

  useEffect(() => {
    const hoursInterval = setInterval(
      () => setHours((prevHour) => prevHour + 1),
      3600000
    );

    return () => clearInterval(hoursInterval);
  }, []);

  return <div>Hours : {hours}</div>;
};

export default Hours;
