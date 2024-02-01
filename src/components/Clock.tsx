import {
  ReactElement,
  useRef,
  useState,
  useEffect,
  MouseEventHandler,
} from "react";
import { ClockType, clockRotateAtom } from "store/Rotate";
import { useRecoilState } from "recoil";
import { useThrottle } from "hooks/useThrottle";
import { getCurrentTime, getHourDegree, getTimeDegree } from "utils/Time";
import Hours from "./Hours";
import Seconds from "./Seconds";
import Minutes from "./Minutes";
import Tooltip from "./Tooltip";
import styled from "styled-components";
import clockImg from "static/img/img-clock.webp";

const SECOND_PER_FRAME = 16.6; // 1초당 보여져야하는 프레임을 밀리세컨으로 변환

const Clock = (): ReactElement => {
  const now = getCurrentTime();
  const clockRef = useRef<HTMLElement>(null);
  const [, setRotate] = useRecoilState<ClockType>(clockRotateAtom);
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    const animateClock = () => {
      const now = getCurrentTime();
      const nowRotate: ClockType = {
        hours: getHourDegree(now.hours, now.minutes),
        minutes: getTimeDegree(now.minutes),
        seconds: getTimeDegree(now.seconds),
      };
      setRotate(nowRotate);
      requestAnimationFrame(animateClock);
    };

    const animationID = requestAnimationFrame(animateClock);
    return () => cancelAnimationFrame(animationID);
  });

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    const scrollTop = clockRef.current?.scrollTop || 0;
    const tooltip = document.querySelector(".tooltip") as HTMLElement;
    tooltip.style.left = `${e.clientX}px`;
    tooltip.style.top = `${e.clientY + scrollTop - 30}px`;
  };

  const throttledFn = useThrottle(handleMouseMove, SECOND_PER_FRAME);

  return (
    <MainClock
      ref={clockRef}
      onMouseMove={throttledFn}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Hours />
      <Minutes />
      <Seconds />
      <img src={clockImg} alt={"clock"} />

      {isHover && (
        <Tooltip>{`${now.hours} : ${now.minutes} : ${now.seconds}`}</Tooltip>
      )}
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
