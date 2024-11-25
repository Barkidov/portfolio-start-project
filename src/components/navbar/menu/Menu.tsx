import { initialState } from "../../../features/initialState";

const menubarData = initialState.menubar;

export const Menu: React.FC = () => {
  return (
    <ul>
      {menubarData.map((menuItem) => {
        return (
          <li key={menuItem.id}>
            <a href={menuItem.href}>{menuItem.name}</a>
          </li>
        );
      })}
    </ul>
  );
};
