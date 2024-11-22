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
      <BurgerButton onClick={handleBurgerMenuOpen} isOpen={isOpen}>
        <span />
        <span />
        <span />
      </BurgerButton>
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
    text-align: center;
    top: 70px;
    right: 0px;
    left: 0px;

    ul {
      display: flex;
      flex-direction: column;
      gap: 10px;
      background: rgb(22, 29, 42, 0.9);
      padding: 20px;
      border-radius: 8px;
    }

    a {
      position: relative;
      text-decoration: none;
      cursor: pointer;
      font-size: 1.5rem;
      font-weight: 500;
      text-align: left;
      color: ${theme.colors.textColor};

      &:hover {
        color: #00c3ff;
      }
      &::after {
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

      &:hover::after {
        width: 100%;
      }
    }
  }
  
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const BurgerButton = styled.button<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 40px;
  height: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 100;

  span {
    display: block;
    width: 100%;
    height: 3px;
    background: ${theme.colors.textColor};
    border-radius: 3px;
    transition: transform 0.3s ease, background-color 0.3s ease,
      opacity 0.3s ease;

    &:nth-child(1) {
      transform: ${({ isOpen }) =>
        isOpen ? "rotate(45deg) translateY(10px)" : "none"};
    }

    &:nth-child(2) {
      opacity: ${({ isOpen }) => (isOpen ? "0" : "1")};
    }

    &:nth-child(3) {
      transform: ${({ isOpen }) =>
        isOpen ? "rotate(-45deg) translateY(-10px)" : "none"};
    }
  }

  @media ${theme.media.tablet} {
    position: absolute;
    top: 20px;
    right: 20px;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
