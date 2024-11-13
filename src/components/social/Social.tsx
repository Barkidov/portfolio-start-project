import styled from "styled-components";
import { Icon } from "../icon/Icon";

export const Social = () => {
  return (
    <StyledSocial>
      <a href="https://github.com/Barkidov" target="_blank">
        <Icon iconId={"github"} width="50" height="50" viewBox="0 0 100 134" />
      </a>
      <a href="https://web.telegram.org/k/" target="_blank">
        <Icon iconId={"telegram"} width="50" height="50" viewBox="0 0 50 50" />
      </a>
      <a href="https://web.whatsapp.com/" target="_blank">
        <Icon iconId={"whatsapp"} width="50" height="50" viewBox="0 0 50 50" />
      </a>
    </StyledSocial>
  );
};
const StyledSocial = styled.div`
  display: flex;
  padding-top: 34px;
  justify-content: space-between;
  a > svg {
    display: flex;
    justify-content: center;
  }
`;
