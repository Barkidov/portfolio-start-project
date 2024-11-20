import styled from "styled-components";

type TextPropsType = {
  fontSize?: string;
  fontWeight?: string;
  paddingTop?: string;
  lineHeight?: string;
  children?: string | React.ReactNode;
  textAlign?: string;
  padding?: string;
  overflowWrap?: string;
  hyphens?: string;
  maxWidth?: string;
};

export const Text = styled.p<TextPropsType>`
  font-size: ${(props) => props.fontSize || "1rem"};
  font-weight: ${(props) => props.fontWeight || "500"};
  padding-top: ${(props) => props.paddingTop || "undefined"};
  line-height: ${(props) => props.lineHeight || "undefined"};
  text-align: ${(props) => props.textAlign || "undefined"};
  padding: ${(props) => props.padding || "undefined"};
  overflow-wrap: ${(props) => props.overflowWrap || "undefined"};
  hyphens: ${(props) => props.hyphens || "undefined"};
  max-width: ${(props) => props.maxWidth || "undefined"};
`;
