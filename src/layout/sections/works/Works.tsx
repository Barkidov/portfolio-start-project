import styled from "styled-components";
import { SectionTittle } from "../../../components/SectionTittle";
import { FlexWrapper } from "../../../components/wrappers/FlexWrapper";
import { Work } from "./work/Work";
import { Container } from "../../../components/Container";
import { initialState } from "../../../features/initialState";

const works = initialState.works;

export const Works = () => {
  return (
    <StyledWorks id="works">
      <Container>
        <SectionTittle textAlign={"center"} padding={"100px 0px 100px"}>
          Мои проекты
        </SectionTittle>
        <FlexWrapper justify={"space-around"} wrap={"wrap"} margin={'0 0 10px'}>
          {works.map((work) => {
            return (
              <Work
                key={work.id}
                title={work.title}
                src={work.src}
                text={work.text}
                href={work.href}
              />
            );
          })}
        </FlexWrapper>
      </Container>
    </StyledWorks>
  );
};

const StyledWorks = styled.section`
  min-height: 1400px;
  max-width: 1440px;
  top: 800px;
  gap: 0px;
  border: 1px 0px 0px 0px;
`;
