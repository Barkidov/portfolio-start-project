import styled from "styled-components";
import { Icon } from "../icon/Icon";

export const Logo = () => {
  return (
    <StyledLogo href="#">
      <Icon iconId={"logo"} width="170" height="74" viewBox="0 0 10 80" />
    </StyledLogo>
  );
};

const StyledLogo = styled.a`

`