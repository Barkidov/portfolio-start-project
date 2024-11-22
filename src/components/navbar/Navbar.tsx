import styled from "styled-components";
import { initialState } from "../../features/initialState";
import { theme } from "../../styles/Theme";
import { Container } from "../Container";

const menubarData = initialState.menubar;

export const Navbar = () => {
  return (
    <StyledNav>
      <Container>
        <ul>
          {menubarData.map((menuItem) => {
            return (
              <li key={menuItem.id}>
                <a href={menuItem.href}>{menuItem.name}</a>
              </li>
            );
          })}
        </ul>
      </Container>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  ul {
    display: flex;
    gap: 70px;
  }

  a {
    text-decoration: none;
    cursor: pointer;
    font-size: 20px;
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
    display: none
  }
`;
  