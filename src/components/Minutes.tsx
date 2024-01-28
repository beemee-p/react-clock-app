import { ReactElement, useEffect, useState } from "react";

const Minutes = (): ReactElement => {
  const [minutes, setMinutes] = useState(0);

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
