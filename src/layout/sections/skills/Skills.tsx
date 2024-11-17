import styled from "styled-components";
import { FlexWrapper } from "../../../components/wrappers/FlexWrapper";
import { SectionTittle } from "../../../components/SectionTittle";
import { Skill } from "./skill/Skill";
import { theme } from "../../../styles/Theme";
import { Container } from "../../../components/Container";
import { initialState } from "../../../features/initialState";

const skills = initialState.skills;

export const Skills = () => {
  return (
    <StyleSkills id="skills">
      <Container>
        <SectionTittle textAlign={"center"} padding={"100px 0px 0px"}>
          Мои скиллы
        </SectionTittle>
        <FlexWrapper justify={"space-around"} wrap={"wrap"}>
          {skills.map((skill) => {
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
`;
