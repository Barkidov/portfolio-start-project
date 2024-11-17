import styled from "styled-components";

type SectionTittlePropsTyre = {
  title?: string;
  textAlign?: string;
  padding?: string;
  fontSize?: string;
  fontWeight?: string;
};

export const SectionTittle = styled.h2<SectionTittlePropsTyre>`
  text-align: ${(props) => props.title || ""};
  padding: ${(props) => props.padding || ""};
  text-align: ${(props) => props.textAlign || ""};
  font-size: ${(props) => props.fontSize || "2rem"};
  font-weight: ${(props) => props.fontWeight || "500"};
`;
