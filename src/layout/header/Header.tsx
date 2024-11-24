import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Navbar } from "../../components/navbar/Navbar";
import { theme } from "../../styles/Theme";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/wrapper/FlexWrapper";
import { Socials } from "../../components/social/Socials";
import { BurgerMenu } from "../../components/navbar/BurgerMenu";

export const Header = () => {
  return (
    <StyledNavbar>
      <Container>
        <FlexWrapper justify={"space-around"}>
          <Logo />
          <Navbar />
          <Socials />
          <BurgerMenu />
        </FlexWrapper>
      </Container>
    </StyledNavbar>
  );
};

const StyledNavbar = styled.header`
  height: 80px;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9;

  div:first-child {
    background-color: ${theme.colors.secondaryBg};
    height: 100%;
    padding: 10px 0 5px;
  }

  @media ${theme.media.mobile} {
    height: 130px
  }
`;
