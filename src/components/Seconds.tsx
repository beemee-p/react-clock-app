import { ReactElement, useEffect, useState } from "react";

const Seconds = (): ReactElement => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const secInterval = setInterval(
      () => setSeconds((prevSec) => prevSec + 1),
      1000
    );

    return () => clearInterval(secInterval);
  }, []);

  return <div>Seconds : {seconds}</div>;
};

export default Seconds;
