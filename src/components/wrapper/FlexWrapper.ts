import styled from "styled-components";

type FlexWrapperPropsType = {
  display?: string,
  direction?: string;
  justify?: string;
  align?: string;
  wrap?: string;
  gap?: string;
  padding?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  margin?: string
};

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
  display: ${(props) => props.display || "flex"};
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "stretch"};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  gap: ${(props) => props.gap || "undefined"};
  padding: ${(props) => props.padding || "0"};
  border-radius: ${(props) => props.borderRadius || "undefined"};
  margin: ${(props) => props.margin || "undefined"};
  width: ${(props) => props.width || "undefined"};
  height: ${(props) => props.height || "undefined"};

`;
