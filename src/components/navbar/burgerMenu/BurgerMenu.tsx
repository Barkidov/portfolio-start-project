import { useState } from "react";
import { S } from "./BurgerMenu_Styles";
import { Menu } from "../menu/Menu";

export const BurgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleBurgerMenuOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <S.BurgerButton onClick={handleBurgerMenuOpen} isOpen={isOpen}>
        <span />
        <span />
        <span />
      </S.BurgerButton>
      <S.BurgerMenu isOpen={isOpen}>
        {isOpen && (
          <Menu/>
        )}
      </S.BurgerMenu>
    </>
  );
};

