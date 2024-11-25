import styled from "styled-components";
import { theme } from "../../../styles/Theme";

const SocialLink = styled.a`
  display: inline-block;
  & + a {
    margin-left: 20px;
  }
  @media screen and (min-width: 768px) {
    &:hover {
      transform: scale(1.5);
      transition: 0.1s;
    }
  }

  @media ${theme.media.tablet} {
    &:active {
      transform: scale(1.5);
      transition: 0.1s;
    }
  }
`;

export const S = {
    SocialLink
}