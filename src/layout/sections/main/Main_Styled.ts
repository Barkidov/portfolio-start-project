import styled from "styled-components";
import { theme } from "../../../styles/Theme";

const Main = styled.section`
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
    /* display: flex;
    justify-content: center;
    align-items: center;

    div:first-child {
      padding-top: 0px;
      text-align: center;
    } */
  }

  @media screen and (max-width: 380px) {
    padding-top: 80px;
  }

  /* @media ${theme.media.mobile} {
    padding-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    div:first-child {
      text-align: center;
    }
  } */
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
  font-size: calc((100vw - 360px) / (1440 - 360) * (20 - 16) + 16px);

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

export const S = {
    Main,
    ImageWrapper,
    Hand
}