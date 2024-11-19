import styled from "styled-components";
import { SectionTittle } from "../../../components/SectionTittle";
import { FlexWrapper } from "../../../components/wrappers/FlexWrapper";
import { theme } from "../../../styles/Theme";
import { Container } from "../../../components/Container";

export const Contacts = () => {
  return (
    <StyledContacts id="contacts">
      <Container>
        <SectionTittle padding={"100px 0px 90px"} textAlign={"center"}>
          Контакты
        </SectionTittle>
        <FlexWrapper justify={"center"}>
          <StyledForm method="get">
              <Field id="contactsForm" name='name' placeholder="Имя" />
              <Field id="contactsForm" name='subject of the message' placeholder="Тема сообщения" />
              <Field id="contactsForm" name='message' placeholder="Сообщение" as="textarea" />
              <FlexWrapper justify={"center"} padding={"15px"}>
                <Button id="contactsForm">Отправить</Button>
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
`;

const Button = styled.button`
  border: none;
  padding: 18px 30px;
  font-size: 25px;
  border-radius: 55px;
  background: ${theme.colors.backgroundButtonsGradientColor};

  &:hover {
    cursor: pointer;
    background: ${theme.colors.backgroundButtonsHoverGradientColor};
  }
`;
