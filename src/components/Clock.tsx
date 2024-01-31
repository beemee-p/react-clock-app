import {
  MouseEventHandler,
  ReactElement,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useRecoilState } from "recoil";
import { ClockType, clockRotateAtom } from "store/Rotate";
import { getCurrentTime, getHourDegree, getTimeDegree } from "utils/Time";
import styled from "styled-components";
import Hours from "./Hours";
import Seconds from "./Seconds";
import Minutes from "./Minutes";
import clockImg from "static/img/img-clock.webp";
import { useThrottle } from "hooks/useThrottle";

const SECOND_PER_FRAME = 16.6; // 1초당 보여져야하는 프레임을 밀리세컨으로 변환

interface CursorPosition {
  x: number;
  y: number;
}

const Clock = (): ReactElement => {
  const now = getCurrentTime();
  const clockRef = useRef<HTMLElement>(null);
  const [, setRotate] = useRecoilState<ClockType>(clockRotateAtom);
  const [cursorPosition, setCursorPosition] = useState<CursorPosition>({
    x: 0,
    y: 0,
  });

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

  const mouseCursor = useMemo(() => {
    return (
      <div
        className={"cursor_tooltip"}
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y - 30}px`,
        }}
      >
        {`${now.hours} : ${now.minutes} : ${now.seconds}`}
      </div>
    );
  }, [cursorPosition, now.hours, now.minutes, now.seconds]);

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    const scrollTop = clockRef.current?.scrollTop || 0;

    setCursorPosition({
      x: e.clientX,
      y: e.clientY + scrollTop,
    });
  };

  const throttledFn = useThrottle(handleMouseMove, SECOND_PER_FRAME);

  return (
    <MainClock ref={clockRef} onMouseMove={throttledFn}>
      <Hours />
      <Minutes />
      <Seconds />
      <img src={clockImg} alt={"clock"} />
      {mouseCursor}
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
  .cursor_tooltip {
    display: none;
  }

  &:hover {
    .cursor_tooltip {
      display: block;
      position: absolute;
      width: fit-content;
      top: 0;
      height: auto;
      background: linear-gradient(
          90deg,
          rgb(81, 119, 254) -9.37%,
          rgba(137, 152, 255, 0) 113.12%
        ),
        rgb(255, 116, 181);
      color: #ffffff;
      border-radius: 8px;
      padding: 6px 10px;
      margin: 10px 0 0 10px;
      font-size: 12px;
      font-weight: 400;
      line-height: 15px;
      text-align: center;
      letter-spacing: -0.25px;
      white-space: nowrap;
    }
  }
`;

export default Clock;
