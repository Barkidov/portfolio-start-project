import { S } from "./TabsSelectMenu_Styles";

export interface TabsSelectMenuPropsType {
  children: React.ReactNode;
  onClick: () => void;
  active: boolean
}

export const TabsSelectMenu: React.FC<TabsSelectMenuPropsType> = ({children, onClick, active}) => {
  return (
    <S.TabsSelectMenu onClick={onClick} active={active}>
      {children}
    </S.TabsSelectMenu>
  );
};
