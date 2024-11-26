import styled from "styled-components";

type ImagePropsType = {
  width?: string;
  height?: string;
  objectFit?: string;
  borderBottomRightRadius?: string;
  borderTopLeftRadius?: string;
  padding?: string;
  borderRadius?: string;
};

export const Image = styled.img<ImagePropsType>`
  width: ${(props) => props.width || "380px"};
  height: ${(props) => props.height || "450px"};
  object-fit: ${(props) => props.objectFit || "cover"};
  border-bottom-right-radius: ${(props) => props.borderBottomRightRadius || "undefined"};
  border-top-left-radius: ${(props) => props.borderTopLeftRadius || "undefined"};
  border-radius: ${(props) => props.borderRadius || "undefined"};
  padding: ${(props) => props.padding || "undefined"};
`;
