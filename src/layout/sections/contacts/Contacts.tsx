import styled from "styled-components";
import { SectionTittle } from "../../../components/SectionTittle";
import { FlexWrapper } from "../../../components/wrappers/FlexWrapper";

export const Contacts = () => {
  return (
    <StyledContacts>
      <SectionTittle paddingTop={"100px"} textAlign={"center"}>
        Контакты
      </SectionTittle>
      <FlexWrapper justify={"center"} padding={"50px 0px 0px 0px"}>
        <StyledForm>
          <Field placeholder="Имя" />
          <Field placeholder="Тема" />
          <Field placeholder="Сообщение" as="textarea" />
          <FlexWrapper justify={"center"} padding={"15px"}>
            <Button>Отправить</Button>
          </FlexWrapper>
        </StyledForm>
      </FlexWrapper>
    </StyledContacts>
  );
};

const StyledContacts = styled.section`
  height: 600px;
  background-color: #161d2a;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
`;

const Field = styled.input`
  width: 500px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const Button = styled.button`
  border: none;
  padding: 18px 30px;
  font-size: 25px;
  color: white;
  border-radius: 55px;
  background: linear-gradient(270deg, #13adc7 0%, #6978d1 66.67%, #945dd6 100%);

  &:hover {
    cursor: pointer;
    background: linear-gradient(
      270deg,
      #066475 0%,
      #202d7a 66.67%,
      #3f1d69 100%
    );
  }
`;
