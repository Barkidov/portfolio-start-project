import styled from "styled-components";
import { theme } from "../../../styles/Theme";

const Skills = styled.section`
  min-height: 1060px;
  background-color: ${theme.colors.secondaryBg};

  div > div {
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
  }
`;

export const S = {
    Skills
}
