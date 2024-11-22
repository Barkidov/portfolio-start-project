import styled from "styled-components";
import { Icon } from "../icon/Icon";
import { theme } from "../../styles/Theme";

export const Logo = () => {
  return (
    <StyledLogo href="#">
      <Icon iconId={"logo"} width="160" height="40" viewBox="0 0 20 50" />
    </StyledLogo>
  );
};

const StyledLogo = styled.a`
  @media ${theme.media.tablet} {
    position: absolute;
    top: 20px;
    left: 10px;
    width: 120px;
  }

  @media ${theme.media.mobile} {
    top: 20px;
    left: 10px;
    width: 120px;
  }
`;
