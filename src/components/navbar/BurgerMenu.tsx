import styled from "styled-components";
import { initialState } from "../../features/initialState";
import { useState } from "react";
import { theme } from "../../styles/Theme";

const menubarData = initialState.menubar;

export const BurgerMenu = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleBurgerMenuOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <BurgerButton onClick={handleBurgerMenuOpen}>X</BurgerButton>
      <BurgerMenuStyled>
        {isOpen && (
          <ul>
            {menubarData.map((menuItem) => {
              return (
                <li key={menuItem.id}>
                  <a href={menuItem.href}>{menuItem.name}</a>
                </li>
              );
            })}
          </ul>
        )}
      </BurgerMenuStyled>
    </>
  );
};

const BurgerMenuStyled = styled.div`
  @media ${theme.media.tablet} {
    position: absolute;
    top: 100px;
    right: 650px;
  }
`;
const BurgerButton = styled.button`
  @media ${theme.media.tablet} {
    position: absolute;
    top: 10px;
    right: 600px;
  }
  /* @media screen and (min-width: 768px) {
    display: none;
  } */
`;
