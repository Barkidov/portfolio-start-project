import styled from "styled-components";


export const Footer = () => {
  return (
    <StyledFooter>
      <ContactNumber href="tel:+79282691400">Tel: 8 (928) 269-14-00</ContactNumber>
      <Email href="mailto:zpliskin@inbox.ru">Email: zpliskin@inbox.ru</Email>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  min-height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContactNumber = styled.a`
  font-size: 20px;
  padding-right: 30px;
  font-family: Poppins;
`;

const Email = styled.a`
  font-size: 20px;
  padding-left: 30px;
  font-family: Poppins;
`;
