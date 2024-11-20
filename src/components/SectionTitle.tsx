import styled from "styled-components";

type SectionTitlePropsTyre = {
  title?: string;
  textAlign?: string;
  padding?: string;
  fontSize?: string;
  fontWeight?: string;
};

export const SectionTitle = styled.h2<SectionTitlePropsTyre>`
  text-align: ${(props) => props.title || "undefined"};
  padding: ${(props) => props.padding || "undefined"};
  text-align: ${(props) => props.textAlign || "undefined"};
  font-size: ${(props) => props.fontSize || "2rem"};
  font-weight: ${(props) => props.fontWeight || "500"};
`;
