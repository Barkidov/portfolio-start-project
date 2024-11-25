import styled from "styled-components";
import { theme } from "../../styles/Theme";

const Footer = styled.footer`
  min-height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const PhoneEmail = styled.div`
  @media ${theme.media.mobile} {
    a {
      display: inline-block;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;

const ContactNumber = styled.a`
  font-size: 1rem;
  font-family: Poppins;
  padding-right: 30px;
  @media ${theme.media.mobile} {
    padding-right: 0px;
  }
`;

const Email = styled.a`
  font-size: 1rem;
  font-family: Poppins;
`;

const Copiright = styled.div`
  color: rgba(255, 255, 255, 0.5);
  padding-top: 0px;
`;

export const S = {
    Footer,
    PhoneEmail,
    ContactNumber,
    Email,
    Copiright
}