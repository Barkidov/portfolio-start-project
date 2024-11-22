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
      <BurgerButton onClick={handleBurgerMenuOpen}>=</BurgerButton>
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
    top: 10px;
    right: 40px;
    a {
      text-decoration: none;
      cursor: pointer;
      font-size: 15px;
      font-weight: 500;
      line-height: 24px;
      text-align: left;
      position: relative;

      &:active {
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
  }
`;
const BurgerButton = styled.button`
  font-size: 40px;
  @media ${theme.media.tablet} {
    position: absolute;
    top: 0px;
    right: 10px;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
