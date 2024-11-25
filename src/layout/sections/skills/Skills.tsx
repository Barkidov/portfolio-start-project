import { FlexWrapper } from "../../../components/wrapper/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";
import { Container } from "../../../components/Container";
import { initialState } from "../../../features/initialState";
import { S } from "./Skills_Styles";

const skillsData = initialState.skills;

export const Skills: React.FC = () => {
  return (
    <S.Skills id="skills">
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
    </S.Skills>
  );
};

