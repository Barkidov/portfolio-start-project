import styled from "styled-components";
import photo from "../../../assets/images/photoOrigin.webp";
import { FlexWrapper } from "../../../components/wrapper/FlexWrapper";
import { Container } from "../../../components/Container";
import { Image } from "../../../components/Image";
import { theme } from "../../../styles/Theme";

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper justify={"space-evenly"} wrap={"wrap"}>
          <FlexWrapper direction={"column"} padding={"200px 0px 0px 0px"}>
            <span>
              <Hand>👋</Hand> Всем привет!
            </span>
            <h1>
              <span>Меня зовут Анзор</span>
              <br />
              <span>Я Frontend Developer</span>
            </h1>
            <span>Преобразую идеи в современные и удобные решения!</span>
          </FlexWrapper>
          <ImageWrapper>
            <Image borderRadius={"55px 0px"} src={photo} alt="Моё фото" />
          </ImageWrapper>
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  padding-top: 100px;
  min-height: 810px;
  position: relative;

  h1 > span {
    font-size: 2rem;
  }

  span {
    display: inline-block;
    line-height: 2;
    font-size: 1.2rem;
  }

  @media ${theme.media.notebook} {
    padding-top: 100px;
    display: flex;
    justify-content: center;
    align-items: center;

    div:first-child {
      padding-top: 0px;
      text-align: center;
    }
  }

  @media ${theme.media.tablet} {
    padding-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    div:first-child {
      padding-top: 0px;
      text-align: center;
    } // почему я достучался к этому чайлду как к 1-ому хотя он 3-й
  }
  @media ${theme.media.mobile} {
    padding-top: 140px;
    display: flex;
    justify-content: center;
    align-items: center;

    div:first-child {
      text-align: center;
    }
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 125px 0px 0px 0px;
  width: 386px;
  height: 456px;
  border-radius: 55px 0px;
  background: linear-gradient(to right, #202d7a 66.67%, #3f1d69 100%);

  @media ${theme.media.notebook} {
    margin-top: 20px;
  }

  @media ${theme.media.tablet} {
    width: 306px;
    height: 386px;
  }

  img {
    @media ${theme.media.tablet} {
      width: 302px;
      height: 382px;
    }
  }
`;

const Hand = styled.span`
  padding-right: 10px;
  display: inline-block;
  animation: moveHand 2s 2;
  transform-origin: bottom;
  font-size: calc( (100vw - 360px)/(1440 - 360) * (20 - 16) + 16px);

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
