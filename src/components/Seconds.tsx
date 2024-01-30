import { ReactElement } from "react";
import { useRecoilValue } from "recoil";
import { clockRotateAtom } from "store/Rotate";
import styled from "styled-components";

const Seconds = (): ReactElement => {
  const degree = useRecoilValue(clockRotateAtom);

  return <DivSeconds degree={degree.seconds} />;
};

const DivSeconds = styled.div<{ degree: number }>`
  position: absolute;
  top: 50%;
  left: calc(50% - 180px);
  width: 180px;
  height: 2px;
  background-color: #ff0000;
  transform-origin: 100% 50%;
  transform: ${({ degree }) => `rotate(${degree}deg)`};
`;

export default Seconds;
