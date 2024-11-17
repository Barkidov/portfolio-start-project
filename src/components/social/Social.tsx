import styled from "styled-components";
import { Icon } from "../icon/Icon";

export const Social = () => {
  return (
    <StyledSocial>
      <SocialLink href="https://github.com/Barkidov" target="_blank">
        <Icon iconId={"github"} width="50" height="50" viewBox="0 0 100 134" />
      </SocialLink>
      <SocialLink href="https://web.telegram.org/k/" target="_blank">
        <Icon iconId={"telegram"} width="50" height="50" viewBox="0 0 50 50" />
      </SocialLink>
      <SocialLink href="https://web.whatsapp.com/" target="_blank">
        <Icon iconId={"whatsapp"} width="50" height="50" viewBox="0 0 50 50" />
      </SocialLink>
    </StyledSocial>
  );
};

const StyledSocial = styled.div`
  display: flex;
  justify-content: space-between;
  a > svg {
    display: flex;
    justify-content: center;
  }
`;

const SocialLink = styled.a`
  & + a {
    padding-left: 5px;
  }
  &:hover {
    transform: scale(1.5);
    transition: 0.1s;
  }
`;
