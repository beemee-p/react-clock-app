import { ReactElement, useEffect } from "react";
import { useRecoilState } from "recoil";
import { secondsAtom } from "store/Time";
import styled from "styled-components";

const Seconds = (): ReactElement => {
  const [seconds, setSeconds] = useRecoilState(secondsAtom);

  useEffect(() => {
    const secInterval = setInterval(handleSeconds, 1000);
    return () => clearInterval(secInterval);
  });

  function handleSeconds() {
    setSeconds((prevSec) => {
      if (prevSec >= 59) {
        return 0;
      }
      return prevSec + 1;
    });
  }
  return <DivSeconds>Seconds : {seconds}</DivSeconds>;
};

const DivSeconds = styled.div``;

export default Seconds;
