import styled from "styled-components";
import { Icon } from "../icon/Icon";

export const Logo = () => {
  return (
    <StyledLogo href="#">
      <Icon iconId={"logo"} width="160" height="40" viewBox="0 0 20 50" />
    </StyledLogo>
  );
};

const StyledLogo = styled.a`

`;
