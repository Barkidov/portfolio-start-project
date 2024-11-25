import styled from "styled-components";
import { theme } from "../../styles/Theme";

const Logo = styled.a`
  width: 150px;
  height: 40px;
  a {
    width: 100%;
    height: 100%;
  }
  @media ${theme.media.tablet} {
    position: absolute;
    top: 20px;
    left: 10px;
    width: 120px;
  }

  @media ${theme.media.mobile} {
    top: 20px;
    left: 10px;
    width: 120px;
  }
`;

export const S = {
    Logo
}