/* eslint-disable react-hooks/exhaustive-deps */
import { ReactElement, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { minutesAtom, secondsAtom } from "store/Time";
import styled from "styled-components";

const Minutes = (): ReactElement => {
  const seconds = useRecoilValue(secondsAtom);
  const [minutes, setMinutes] = useRecoilState(minutesAtom);

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
  return <DivMinutes minutes={minutes}>Minutes : {minutes}</DivMinutes>;
};

const DivMinutes = styled.div<{ minutes: number }>`
  position: absolute;
  top: 50%;
  left: calc(50% - 100px);
  width: 100px;
  height: 2px;
  background-color: black;
  transform-origin: 100% 50%;
  transition: transform 0.5s cubic-bezier(0.4, 2.5, 0.36, 2);
  transform: ${({ minutes }) => `rotate(${(minutes * 6 + 90) % 360}deg)`};
`;

export default Minutes;
