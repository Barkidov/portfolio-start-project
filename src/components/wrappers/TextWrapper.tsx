import styled from "styled-components";

type TextWrapperPropsType = {
  fontSize?: string;
  fontWeight?: string;
  fontFamily?: string;
  paddingTop?: string;
  lineHeight?: string;
  children?: string
  textAlign?: string,
  padding?: string,
};

export const TextWrapper = styled.p<TextWrapperPropsType>`
  font-size: ${(props) => props.fontSize || "1rem"};
  font-weight: ${(props) => props.fontWeight || "500"};
  font-family: ${(props) => props.fontFamily || "Poppins"};
  padding-top: ${(props) => props.paddingTop || "15px"};
  line-height: ${(props) => props.lineHeight || ''};
  text-align: ${(props) => props.textAlign || ''};
  padding: ${(props) => props.padding || ""};
`;

