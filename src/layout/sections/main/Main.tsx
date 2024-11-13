import styled from "styled-components";
import photo from "../../../assets/images/photo.webp";
import { FlexWrapper } from "../../../components/wrappers/FlexWrapper";
import { TextWrapper } from "../../../components/wrappers/TextWrapper";
import { ImageWrapper } from "../../../components/wrappers/ImageWrapper";

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper justify={"space-around"}>
        <FlexWrapper
          direction={"column"}
          padding={"150px 0px 0px 147px"}
        >
          <TextWrapper
            fontFamily={"Poppins"}
            fontSize={"2rem"}
            fontWeight={"500"}
          >
            👋 Всем привет!
          </TextWrapper>
          <Tittle>
            <p>Меня зовут Анзор</p>
            <p>Я Frontend Developer</p>
          </Tittle>
          <TextWrapper
            fontFamily={"Poppins"}
            fontSize={"1.8rem"}
            fontWeight={"500"}
          >
            Преобразую идеи в современные и удобные решения!
          </TextWrapper>
        </FlexWrapper>
        <FlexWrapper
          display={"inline-block"}
          padding={"125px 147px 0px 0px"}

        >
          <ImageWrapper
            borderRadius={"55px 0px"}
            src={photo}
            alt="Моё фото"
          />
        </FlexWrapper>
      </FlexWrapper>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  height: 700px;
`;

const Tittle = styled.h1`
  font-family: Poppins;
  font-size: 45px;
  font-weight: 600;
  line-height: 65px;
  margin-bottom: 0px;
  p {
    margin: 0;
  }
`;
