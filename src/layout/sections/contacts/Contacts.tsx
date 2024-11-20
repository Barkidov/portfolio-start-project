import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/wrapper/FlexWrapper";
import { theme } from "../../../styles/Theme";
import { Container } from "../../../components/Container";

export const Contacts = () => {
  return (
    <StyledContacts id="contacts">
      <Container>
        <SectionTitle padding={"100px 0px 90px"} textAlign={"center"}>
          Контакты
        </SectionTitle>
        <FlexWrapper justify={"center"}>
          <StyledForm method="get">
            <Field
              id="name"
              name="name"
              placeholder="Name"
              required
            />
            <Field
              id="email"
              name="email"
              type="email"
              placeholder="Your email"
              required
            />
            <Field
              id="message"
              name="message"
              placeholder="Message"
              as="textarea"
              required
            />
            <FlexWrapper justify={"center"} padding={"15px"}>
              <Button type="submit">Отправить</Button>
            </FlexWrapper>
          </StyledForm>
        </FlexWrapper>
      </Container>
    </StyledContacts>
  );
};

const StyledContacts = styled.section`
  min-height: 600px;
  background-color: ${theme.colors.secondaryBg};
`;

const StyledForm = styled.form`
  display: flex;
  max-width: 500px;
  width: 100%;
  flex-direction: column;
  gap: 10px;
  justify-content: center;

  textarea {
    resize: none;
    height: 100px;
  }
`;

const Field = styled.input`
  font-family: "Poppins", "sans serif";
  width: 100%;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  background-color: ${theme.colors.primaryBg};
  color: white;
`;

const Button = styled.button`
  border: none;
  font-weight: 700;
  padding: 18px 30px;
  font-size: 1.2rem;
  border-radius: 55px;
  background: ${theme.colors.backgroundButtonsGradientColor};

  &:hover {
    cursor: pointer;
    background: ${theme.colors.backgroundButtonsHoverGradientColor};
  }
`;
