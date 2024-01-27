import { ReactElement, useEffect, useState } from "react";

const Hours = (): ReactElement => {
  const [hours, setHours] = useState(0);

  useEffect(() => {
    const hourInterval = setInterval(
      () => setHours((prevHour) => prevHour + 1),
      3600000
    );

    return () => clearInterval(hourInterval);
  }, []);
  return <div>Hours : {hours}</div>;
};

export default Hours;
