/* eslint-disable react-hooks/exhaustive-deps */
import { ReactElement, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { hoursAtom, minutesAtom } from "store/Time";
import styled from "styled-components";

const Hours = (): ReactElement => {
  const minutes = useRecoilValue(minutesAtom);
  const [hours, setHours] = useRecoilState(hoursAtom);

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
  return <DivHours>Hours : {hours}</DivHours>;
};

const DivHours = styled.div`
  position: absolute;
`;

export default Hours;
