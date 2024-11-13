import styled from "styled-components";

type ImageWrapperPropsType = {
  width?: string;
  height?: string;
  objectFit?: string;
  borderBottomRightRadius?: string;
  borderTopLeftRadius?: string;
  padding?: string;
  borderRadius?: string;
};

export const ImageWrapper = styled.img<ImageWrapperPropsType>`
  width: ${(props) => props.width || "380px"};
  height: ${(props) => props.height || "450px"};
  object-fit: ${(props) => props.objectFit || "cover"};
  border-bottom-right-radius: ${(props) => props.borderBottomRightRadius || ""};
  border-top-left-radius: ${(props) => props.borderTopLeftRadius || ""};
  border-radius: ${(props) => props.borderRadius || ""};
  padding: ${(props) => props.padding || ""};
`;
