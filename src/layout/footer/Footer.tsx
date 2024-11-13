import styled from "styled-components";


export const Footer = () => {
  return (
    <StyledFooter>
      <ContactNumber>Телефон: 8 (800) 200-06-00</ContactNumber>
      <Email>Email: myemail@mail.ru</Email>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContactNumber = styled.p`
  font-size: 20px;
  padding-right: 30px;
  font-family: Poppins;
`;

const Email = styled.p`
  font-size: 20px;
  padding-left: 30px;
  font-family: Poppins;
`;
