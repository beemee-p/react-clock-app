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

  return <DivSeconds seconds={seconds}>Seconds : {seconds}</DivSeconds>;
};

const DivSeconds = styled.div<{ seconds: number }>`
  position: absolute;
  top: 50%;
  left: calc(50% - 150px);
  width: 150px;
  height: 2px;
  background-color: #ff0000;
  transform-origin: 100% 50%;
  transition: transform 0.5s cubic-bezier(0.4, 2.5, 0.36, 2);
  transform: ${({ seconds }) => `rotate(${(seconds * 6 + 90) % 360}deg)`};
`;

export default Seconds;
