import { Icon } from "../icon/Icon";
import { Social } from "./Social";
import { initialState } from "../../features/initialState";

const socialData = initialState.socials;

export const Socials = () => {
  return (
    <div>
      {socialData.map((social) => {
        return (
          <Social key={social.id} href={social.href}>
            <Icon iconId={social.iconId} width="40" height="40" />
          </Social>
        );
      })}
    </div>
  );
};


