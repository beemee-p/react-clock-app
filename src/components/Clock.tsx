import { ReactElement, useEffect } from "react";
import { useRecoilState } from "recoil";
import { ClockType, clockRotateAtom } from "store/Rotate";
import { getCurrentTime, getHourDegree, getTimeDegree } from "utils/Time";
import styled from "styled-components";
import Hours from "./Hours";
import Seconds from "./Seconds";
import Minutes from "./Minutes";
import clockImg from "static/img/img-clock.webp";

const Clock = (): ReactElement => {
  const [, setRotate] = useRecoilState<ClockType>(clockRotateAtom);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = getCurrentTime();
      const nowRotate: ClockType = {
        hours: getHourDegree(now.hours, now.minutes),
        minutes: getTimeDegree(now.minutes),
        seconds: getTimeDegree(now.seconds),
      };

      setRotate(nowRotate);
    }, 1000);

    return () => clearInterval(interval);
  });

  return (
    <MainClock>
      <Hours />
      <Minutes />
      <Seconds />
      <img src={clockImg} alt={"clock"} />
    </MainClock>
  );
};

const MainClock = styled.main`
  position: relative;
  text-align: center;
  width: 500px;
  height: 500px;

  > img {
    width: 100%;
    height: 100%;
  }
`;

export default Clock;
