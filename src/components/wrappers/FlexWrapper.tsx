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
  borderBottomRightRadius?: string;
  borderTopLeftRadius?: string;
  margin?: string
};

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
  display: ${(props) => props.display || "flex"};
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "stretch"};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  gap: ${(props) => props.gap || ""};
  padding: ${(props) => props.padding || "0px"};
  border-bottom-right-radius: ${(props) => props.borderBottomRightRadius || ""};
  border-top-left-radius: ${(props) => props.borderTopLeftRadius || ""};
  margin: ${(props) => props.margin || ""};
  width: ${(props) => props.width || ""};
  height: ${(props) => props.height || ""};
`;
