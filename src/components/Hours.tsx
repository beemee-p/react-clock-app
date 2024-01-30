import { ReactElement } from "react";
import { useRecoilValue } from "recoil";
import { clockRotateAtom } from "store/Rotate";
import styled from "styled-components";

const Hours = (): ReactElement => {
  const degree = useRecoilValue(clockRotateAtom);

  return <DivHours degree={degree.hours} />;
};

const DivHours = styled.div<{ degree: number }>`
  position: absolute;
  top: 50%;
  left: calc(50% - 110px);
  width: 110px;
  height: 2px;
  background-color: black;
  transform-origin: 100% 50%;
  transform: ${({ degree }) => `rotate(${degree}deg)`};
`;

export default Hours;
