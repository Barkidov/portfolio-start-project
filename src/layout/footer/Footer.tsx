import styled from "styled-components";
import { theme } from "../../styles/Theme";

export const Footer = () => {
  return (
    <StyledFooter>
      <PhoneEmail>
        <ContactNumber href="tel:+79282691400">
          Tel: 8 (928) 269-14-00
        </ContactNumber>
        <Email href="mailto:zpliskin@inbox.ru">Email: zpliskin@inbox.ru</Email>
      </PhoneEmail>
      <Copiright>© 2024 Anzor Nasipov, All Rights Reserved.</Copiright>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
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
