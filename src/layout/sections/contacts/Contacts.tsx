import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/wrapper/FlexWrapper";
import { Container } from "../../../components/Container";
import { S } from "./Contacts_Styles";
import { Socials } from "../../../components/socials/Socials";
import { theme } from "../../../styles/Theme";

export const Contacts: React.FC = () => {
  return (
    <S.Contacts id="contacts">
      <Container>
        <SectionTitle padding={"100px 0px 90px"} textAlign={"center"}>
          Контакты
        </SectionTitle>
        
        <FlexWrapper justify={"center"} direction={'column'} align={'center'} gap={'10px'}>
          <Socials/>
          <S.Form method="get">
            <S.Field id="name" name="name" placeholder="Name" required />
            <S.Field
              id="email"
              name="email"
              type="email"
              placeholder="Your email"
              required
            />
            <S.Field
              id="message"
              name="message"
              placeholder="Message"
              as="textarea"
              required
            />
            <FlexWrapper justify={"center"} padding={"15px"}>
              <S.Button type="submit">Отправить</S.Button>
            </FlexWrapper>
          </S.Form>
        </FlexWrapper>
      </Container>
    </S.Contacts>
  );
};


