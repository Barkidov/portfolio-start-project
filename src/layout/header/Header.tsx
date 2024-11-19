import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Navbar } from "../../components/navbar/Navbar";
import { Social } from "../../components/social/Social";
import { theme } from "../../styles/Theme";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/wrappers/FlexWrapper";

export const Header = () => {
  return (
    <StyledNavbar>
      <Container>
        <FlexWrapper justify={"space-around"}>
          <Logo />
          <Navbar />
          <Social />
        </FlexWrapper>
      </Container>
    </StyledNavbar>
  );
};

const StyledNavbar = styled.header`
  min-width: 1170px;
  padding: 30px 0 20px;
  display: flex;
  justify-content: space-around;
  background-color: ${theme.colors.secondaryBg};
  position: fixed;
  top: 0;
  z-index: 9;
`;