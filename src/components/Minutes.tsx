/* eslint-disable react-hooks/exhaustive-deps */
import { ReactElement, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { minutesAtom, secondsAtom } from "store/Time";
import styled from "styled-components";
import { getTimeDegree } from "utils/Time";

const Minutes = (): ReactElement => {
  const [minutes, setMinutes] = useRecoilState(minutesAtom);
  const seconds = useRecoilValue(secondsAtom);
  const degree = getTimeDegree(minutes);

  useEffect(() => {
    handleMinutes();
  }, [seconds]);

  function handleMinutes() {
    setMinutes((prevMin) => {
      if (seconds === 0) {
        if (prevMin >= 59) {
          return 0;
        }
        return prevMin + 1;
      }

      return prevMin;
    });
  }

  return <DivMinutes degree={degree}>Minutes : {minutes}</DivMinutes>;
};

const DivMinutes = styled.div<{ degree: number }>`
  position: absolute;
  top: 50%;
  left: calc(50% - 180px);
  width: 180px;
  height: 2px;
  background-color: black;
  transform-origin: 100% 50%;
  transition: transform 0.5s cubic-bezier(0.4, 2.5, 0.36, 2);
  transform: ${({ degree }) => `rotate(${degree}deg)`};
`;

export default Minutes;
