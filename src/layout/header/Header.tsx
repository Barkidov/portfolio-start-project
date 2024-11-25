import { Logo } from "../../components/logo/Logo";
import { Navbar } from "../../components/navbar/Navbar";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/wrapper/FlexWrapper";
import { Socials } from "../../components/socials/Socials";
import { BurgerMenu } from "../../components/navbar/burgerMenu/BurgerMenu";
import { S } from "./Header_Styles";

export const Header: React.FC = () => {
  return (
    <S.Header>
      <Container>
        <FlexWrapper justify={"space-around"}>
          <Logo />
          <Navbar />
          <Socials />
          <BurgerMenu />
        </FlexWrapper>
      </Container>
    </S.Header>
  );
};


