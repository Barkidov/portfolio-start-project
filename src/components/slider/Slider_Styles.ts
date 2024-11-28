import styled from "styled-components";
import { theme } from "../../styles/Theme";

const Slider = styled.div`
  padding-top: 50px;
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media ${theme.media.mobile} {
    max-width: 300px;
  }

  p {
    @media ${theme.media.mobile} {
      max-width: 300px;
    }
  }

  span {
    display: inline-block;
    text-align: center;
    width: 100%;
    padding-top: 20px;
  }

  ul:first-child > li {
    max-width: 500px;
    width: 100%;
    user-select: none;

    @media ${theme.media.mobile} {
      max-width: 300px;
    }

    &:hover {
      cursor: grab;
    }

    &:active {
      cursor: grabbing;
    }
  }
`;

export const S = {
  Slider,
};
