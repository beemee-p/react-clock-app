import { ReactElement } from "react";
import styled from "styled-components";
import Hours from "./Hours";
import Seconds from "./Seconds";
import Minutes from "./Minutes";
import clockImg from "static/img/img-clock.webp";

const Clock = (): ReactElement => {
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
