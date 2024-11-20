import styled from "styled-components";
import { FlexWrapper } from "../../../components/wrapper/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";
import { theme } from "../../../styles/Theme";
import { Container } from "../../../components/Container";
import { initialState } from "../../../features/initialState";

const skillsData = initialState.skills;

export const Skills = () => {
  return (
    <StyleSkills id="skills">
      <Container>
        <SectionTitle textAlign={"center"} padding={"100px 0px 90px"}>
          Мои скиллы
        </SectionTitle>
        <FlexWrapper justify={"space-around"} wrap={"wrap"}>
          {skillsData.map((skill) => {
            return (
              <Skill
                key={skill.id}
                iconId={skill.iconId}
                title={skill.title}
                text={skill.text}
              />
            );
          })}
        </FlexWrapper>
      </Container>
    </StyleSkills>
  );
};

const StyleSkills = styled.section`
  min-height: 1060px;
  background-color: ${theme.colors.secondaryBg};

  div > div {
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
  }
`;
