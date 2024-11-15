import styled from "styled-components";
import { initialState } from "../../features/initialState";
import { theme } from "../../styles/Theme";

const menubar = initialState.menubar;

export const Navbar = () => {
  return (
    <StyledNav>
      <ul>
        {menubar.map((menuItem) => {
          return (
            <li key={menuItem.id}>
              <a href={menuItem.href}>{menuItem.name}</a>
            </li>
          );
        })}
      </ul>
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

    &:hover {
      color: ${theme.colors.textHoverColor}
    }
  }
`;
