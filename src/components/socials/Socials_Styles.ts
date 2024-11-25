import styled from "styled-components";
import { theme } from "../../styles/Theme";

const Socials = styled.div`
  @media ${theme.media.tablet} {
    position: absolute;
    top: 20px;
    left: 200px;
  }

  @media ${theme.media.mobile} {
    position: static;
  }
`;

export const S = {
    Socials
}