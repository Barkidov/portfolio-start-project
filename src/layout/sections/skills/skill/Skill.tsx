import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";
import { TextWrapper } from "../../../../components/wrappers/TextWrapper";

type SkillPropsType = {
  iconId: string;
  title: string;
  text: string;
};

export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkill>
      <Icon
        width={"360"}
        height={'400'}
        iconId={props.iconId}
        viewBox={"-13 -100 150 250"}
        preserveAspectRatio={"xMidYMid meet"}
      />
      <SkillTittle>{props.title}</SkillTittle>
      <TextWrapper fontSize={'1.2rem'} fontFamily={'Poppins'} padding={'30px'} textAlign={"center"}>{props.text}</TextWrapper>
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
  width: 25%;
`;

const SkillTittle = styled.h3`
  text-align: center;
  font-size: 1.5rem;
  margin: 0;
  font-family: Poppins;
`;
