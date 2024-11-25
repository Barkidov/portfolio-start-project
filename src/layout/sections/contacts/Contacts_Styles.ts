import styled from "styled-components";
import { theme } from "../../../styles/Theme";

const Contacts = styled.section`
  min-height: 600px;
  background-color: ${theme.colors.secondaryBg};

  @media screen and (min-width: 576px) {
    .socials {
      display: none;
    }

    @media ${theme.media.mobile} {
      .socials {
        display: flex;
        margin-bottom: 20px;
      }
    }
  }
`;

const Form = styled.form`
  display: flex;
  max-width: 500px;
  width: 100%;
  flex-direction: column;
  gap: 10px;
  justify-content: center;

  textarea {
    resize: none;
    height: 100px;
  }
`;

const Field = styled.input`
  font-family: "Poppins", "sans serif";
  width: 100%;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  background-color: ${theme.colors.primaryBg};
  color: white;
`;

const Button = styled.button`
  border: none;
  font-weight: 700;
  padding: 18px 30px;
  font-size: 1.2rem;
  border-radius: 55px;
  background: ${theme.colors.backgroundButtonsGradientColor};

  &:hover {
    cursor: pointer;
    background: ${theme.colors.backgroundButtonsHoverGradientColor};
  }
`;

export const S = {
  Contacts,
  Form,
  Field,
  Button,
};
