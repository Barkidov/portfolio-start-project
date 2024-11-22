import { Icon } from "../icon/Icon";
import { Social } from "./Social";
import { initialState } from "../../features/initialState";
import styled from "styled-components";
import { theme } from "../../styles/Theme";

const socialData = initialState.socials;

export const Socials = () => {
  return (
    <SocialsStyled>
      {socialData.map((social) => {
        return (
          <Social key={social.id} href={social.href}>
            <Icon iconId={social.iconId} width="40" height="40" />
          </Social>
        );
      })}
    </SocialsStyled>
  );
};

const SocialsStyled = styled.div`
  @media ${theme.media.tablet} {
    position: absolute;
    top: 20px;
    left: 200px;
  }

  @media ${theme.media.mobile} {
    position: absolute;
    top: 20px;
    left: 200px;
  }
`;
