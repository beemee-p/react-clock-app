import { ReactElement } from "react";
import styled from "styled-components";
import Hours from "./Hours";
import Seconds from "./Seconds";
import Minutes from "./Minutes";

const Clock = (): ReactElement => {
  return (
    <MainClock>
      <Hours />
      <Minutes />
      <Seconds />
    </MainClock>
  );
};

const MainClock = styled.main``;

export default Clock;
