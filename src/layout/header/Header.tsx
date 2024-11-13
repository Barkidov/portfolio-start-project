import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Navbar } from "../../components/navbar/Navbar";
import { Social } from "../../components/social/Social";

export const Header = () => {
  return (
    <StyledNavbar>
      <Logo />
      <Navbar />
      <Social />
    </StyledNavbar>
  );
};

const StyledNavbar = styled.header`
  display: flex;
  max-width: 1440px;
  min-height: 100px;
  justify-content: space-around;
  position: relative;
  background-color: #161d2a;
`;
