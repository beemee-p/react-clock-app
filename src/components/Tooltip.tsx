import { HTMLAttributes, ReactElement } from "react";
import styled from "styled-components";

interface TooltipProps extends HTMLAttributes<HTMLDivElement> {}

const Tooltip = (props: TooltipProps): ReactElement => {
  return (
    <DivTooltip className="tooltip" {...props}>
      {props.children}
    </DivTooltip>
  );
};

const DivTooltip = styled.div`
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
`;

export default Tooltip;
