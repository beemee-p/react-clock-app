import { ReactElement, useEffect } from "react";
import { useRecoilState } from "recoil";
import { secondsAtom } from "store/Time";
import styled from "styled-components";
import { getTimeDegree } from "utils/Time";

const Seconds = (): ReactElement => {
  const [seconds, setSeconds] = useRecoilState(secondsAtom);
  const degree = getTimeDegree(seconds);

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

  return <DivSeconds degree={degree}>Seconds : {seconds}</DivSeconds>;
};

const DivSeconds = styled.div<{ degree: number }>`
  position: absolute;
  top: 50%;
  left: calc(50% - 150px);
  width: 150px;
  height: 2px;
  background-color: #ff0000;
  transform-origin: 100% 50%;
  transition: transform 0.5s cubic-bezier(0.4, 2.5, 0.36, 2);
  transform: ${({ degree }) => `rotate(${degree}deg)`};
`;

export default Seconds;
