import { Icon } from "../icon/Icon";
import { S } from "./Logo_Styles";

export const Logo: React.FC = () => {
  return (
    <S.Logo href="#">
      <Icon iconId={"logo"} width="160" height="40" viewBox="0 0 20 50" />
    </S.Logo>
  );
};


