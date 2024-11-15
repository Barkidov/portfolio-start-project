import styled from "styled-components";

type TextWrapperPropsType = {
  fontSize?: string;
  fontWeight?: string;
  paddingTop?: string;
  lineHeight?: string;
  children?: string;
  textAlign?: string;
  padding?: string;
  overflowWrap?: string;
  hyphens?: string;
  maxWidth?: string;
};

export const TextWrapper = styled.p<TextWrapperPropsType>`
  font-size: ${(props) => props.fontSize || "1rem"};
  font-weight: ${(props) => props.fontWeight || "500"};
  padding-top: ${(props) => props.paddingTop || ""};
  line-height: ${(props) => props.lineHeight || ""};
  text-align: ${(props) => props.textAlign || ""};
  padding: ${(props) => props.padding || ""};
  overflow-wrap: ${(props) => props.overflowWrap || ""};
  hyphens: ${(props) => props.hyphens || ""};
  max-width: ${(props) => props.maxWidth || ""};
`;
