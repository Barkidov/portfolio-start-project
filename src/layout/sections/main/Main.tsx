import styled from "styled-components";
import photo from "../../../assets/images/photoOrigin.webp";
import { FlexWrapper } from "../../../components/wrappers/FlexWrapper";
import { TextWrapper } from "../../../components/wrappers/TextWrapper";
import { ImageWrapper } from "../../../components/wrappers/ImageWrapper";
import { Container } from "../../../components/Container";

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper justify={"space-evenly"}>
          <FlexWrapper direction={"column"} padding={"180px 0px 0px 0px"}>
            <TextWrapper fontSize={"2rem"} fontWeight={"500"}>
              <Hand>👋</Hand> Всем привет!
            </TextWrapper>
            <Tittle>
              <p>Меня зовут Анзор</p>
              <p>Я Frontend Developer</p>
            </Tittle>
            <TextWrapper
              fontSize={"1.8rem"}
              fontWeight={"500"}
              maxWidth={"700px"}
            >
              Преобразую идеи в современные и удобные решения!
            </TextWrapper>
          </FlexWrapper>
            <ImageDiv>
              <ImageWrapper
                borderRadius={"55px 0px"}
                src={photo}
                alt="Моё фото"
              />
            </ImageDiv>
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  padding-top: 100px;
  min-height: 810px;
  position: relative;
  p {
    line-height: 2;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    width: 666px;
    height: 666px;
    /* background-color: red; */
    background-image: url('../../../assets/images/drawing.png');
    z-index: -1;
  }
`;

const Tittle = styled.h1`
  font-size: 45px;
  font-weight: 600;
  line-height: 65px;
  margin-bottom: 0px;
`;

const ImageDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 125px 0px 0px 0px;
  width: 386px;
  height: 456px;
  border-radius: 55px 0px;
  background: linear-gradient(to right, #202d7a 66.67%, #3f1d69 100%);
`;

const Hand = styled.div`
  padding-right: 10px;
  display: inline-block;
  animation: moveHand 2s 2;
  transform-origin: bottom;

  @keyframes moveHand {
    0% {
      transform: rotate(0);
    }
    50% {
      transform: rotate(20deg);
    }
    100% {
      transform: rotate(0);
    }
  }
`;
