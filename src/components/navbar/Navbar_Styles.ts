import styled from "styled-components";
import { theme } from "../../styles/Theme";

const Nav = styled.nav`
  ul {
    display: flex;
    gap: 70px;

    @media ${theme.media.notebook} {
      gap: 35px;
    }
  }

  a {
    text-decoration: none;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 34px;
    text-align: left;
    position: relative;

    &:hover {
      color: #00c3ff;
    }

    ::after {
      content: "";
      position: absolute;
      background: ${theme.colors.backgroundButtonsGradientColor};
      height: 3px;
      width: 0%;
      left: 50%;
      transform: translateX(-50%);
      bottom: -5px;
      transition: 0.1s;
    }

    :hover::after {
      width: 100%;
    }
  }

  @media ${theme.media.tablet} {
    display: none;
  }
`;

export const S = {
    Nav
}
