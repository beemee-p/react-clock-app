import { ReactElement } from "react";
import { useRecoilValue } from "recoil";
import { clockRotateAtom } from "store/Rotate";
import styled from "styled-components";

const Minutes = (): ReactElement => {
  const degree = useRecoilValue(clockRotateAtom);

  return <DivMinutes degree={degree.minutes} />;
};

const DivMinutes = styled.div<{ degree: number }>`
  position: absolute;
  top: 50%;
  left: calc(50% - 180px);
  width: 180px;
  height: 2px;
  background-color: black;
  transform-origin: 100% 50%;
  transform: ${({ degree }) => `rotate(${degree}deg)`};
`;

export default Minutes;
