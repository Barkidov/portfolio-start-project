import photo from "../../../assets/images/photoOrigin.webp";
import { FlexWrapper } from "../../../components/wrapper/FlexWrapper";
import { Container } from "../../../components/Container";
import { Image } from "../../../components/Image";
import { S } from "./Main_Styled";
import Typewriter from "typewriter-effect";

export const Main: React.FC = () => {
  return (
    <S.Main>
      <Container>
        <FlexWrapper justify={"space-evenly"} wrap={"wrap"}>
          <FlexWrapper direction={"column"} padding={"200px 0px 0px 0px"}>
            <span>
              <S.Hand>👋</S.Hand> Всем привет!
            </span>
            <h1>
              <span>Меня зовут Анзор</span>
              <br />
              <span>Я Frontend Developer</span>
            </h1>
            <Typewriter
              options={{
                strings: ["Преобразую идеи в современные и удобные решения!"],
                autoStart: true,
                loop: false,
                delay: 20,
                deleteSpeed: 20
              }}
            />
          </FlexWrapper>
          <S.ImageWrapper>
            <Image borderRadius={"55px 0px"} src={photo} alt="Моё фото" />
          </S.ImageWrapper>
        </FlexWrapper>
      </Container>
    </S.Main>
  );
};
