import styled from "styled-components";
import { theme } from "../../styles/Theme";

const TabsSelectMenu = styled.button<{active?: boolean}>`
  border: none;
  font-weight: 700;
  font-size: 1.2rem;
  border-radius: 55px;
  position: relative;
  color: ${(props) => (props.active ? "#00c3ff" : "inherit")};


  &::after {
    content: "";
    position: absolute;
    background: ${theme.colors.backgroundButtonsGradientColor};
    height: 3px;
    width: ${(props) => (props.active ? "100%" : "0%")};
    left: 50%;
    transform: translateX(-50%);
    bottom: -5px;
    transition: 0.1s;
  }

  &:hover {
    cursor: pointer;
    color: #00c3ff;
  }

  :hover::after {
    width: 100%;
  }
`;

export const S = { TabsSelectMenu };
