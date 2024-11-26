import styled from "styled-components";
import { theme } from "../../styles/Theme";

const Header = styled.header`
height: 80px;
display: flex;
justify-content: center;
position: fixed;
top: 0;
left: 0;
width: 100%;
z-index: 9;

div:first-child {
  background-color: ${theme.colors.secondaryBg};
  height: 100%;
  padding: 10px 0 5px;
}

@media ${theme.media.mobile} {
  .socials {
    display: none;
  }
}
`;

export const S = {
    Header
}