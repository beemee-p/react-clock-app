/* eslint-disable react-hooks/exhaustive-deps */
import { ReactElement, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { hoursAtom, minutesAtom } from "store/Time";
import styled from "styled-components";
import { getHourDegree } from "utils/Time";

const Hours = (): ReactElement => {
  const [hours, setHours] = useRecoilState(hoursAtom);
  const minutes = useRecoilValue(minutesAtom);
  const degree = getHourDegree(hours, minutes);

  useEffect(() => {
    handleHours();
  }, [minutes]);

  function handleHours() {
    setHours((prevHour) => {
      if (minutes === 0) {
        if (prevHour >= 23) {
          return 0;
        }
        return prevHour + 1;
      }

      return prevHour;
    });
  }

  return <DivHours degree={degree}>Hours : {hours}</DivHours>;
};

const DivHours = styled.div<{ degree: number }>`
  position: absolute;
  top: 50%;
  left: calc(50% - 110px);
  width: 110px;
  height: 2px;
  background-color: black;
  transform-origin: 100% 50%;
  transition: transform 0.5s cubic-bezier(0.4, 2.5, 0.36, 2);
  transform: ${({ degree }) => `rotate(${degree}deg)`};
  position: absolute;
`;

export default Hours;
