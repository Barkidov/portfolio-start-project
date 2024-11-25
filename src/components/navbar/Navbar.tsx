import { Menu } from "./menu/Menu";
import { S } from "./Navbar_Styles";

export const Navbar: React.FC = () => {
  return (
    <S.Nav>
      <Menu />
    </S.Nav>
  );
};
