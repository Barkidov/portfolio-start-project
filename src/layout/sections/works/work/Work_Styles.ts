import styled from "styled-components";
import { theme } from "../../../../styles/Theme";

const Work = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 400px;
  border: solid 2px white;
  margin-bottom: 80px;
  border-radius: 55px 0px;
  box-sizing: border-box;
  max-height: 650px;
`;

const Title = styled.h3`
  text-align: center;
  position: relative;
  padding-bottom: 10px;

  &::after {
    content: "";
    display: block;
    width: 60%;
    height: 2px;
    background: ${theme.colors.backgroundButtonsGradientColor};
    margin: 0 auto;
    margin-top: 30px;
  }
`;

const Link = styled.a`
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 4rem;
  text-align: center;
  max-width: 183px;
  margin: 20px;
  border-radius: 55px;
  background: ${theme.colors.backgroundButtonsGradientColor};

  &:hover {
    cursor: pointer;
    background: ${theme.colors.backgroundButtonsHoverGradientColor};
  }
`;


export const S = {
    Work,
    Title,
    Link
}