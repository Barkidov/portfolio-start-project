import { Icon } from "../icon/Icon";
import { Social } from "./social/Social";
import { initialState } from "../../features/initialState";
import { S } from "./Socials_Styles";


const socialData = initialState.socials;

export const Socials: React.FC = () => {
  return (
    <S.Socials className='socials'>
      {socialData.map((social) => {
        return (
          <Social key={social.id} href={social.href}>
            <Icon iconId={social.iconId} width="40" height="40" />
          </Social>
        );
      })}
    </S.Socials>
  );
};

