import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";
import { TextWrapper } from "../../../../components/wrappers/TextWrapper";

type SkillPropsType = {
  key: string;
  iconId: string;
  title: string;
  text: string;
};

export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkill>
      <Icon
        max-width={"360"}
        height={"400"}
        iconId={props.iconId}
        viewBox={"-25-50 150 220"}
        preserveAspectRatio={"xMidYMid meet"}
      />
      <SkillTittle>{props.title}</SkillTittle>
      <TextWrapper
        lang="ru"
        fontSize={"1.2rem"}
        padding={"30px"}
        textAlign={"justify"}
        lineHeight={"1.2"}
        overflowWrap={"break-word"}
        hyphens={"auto"}
      >
        {props.text}
      </TextWrapper>
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
  max-width: 300px;
`;

const SkillTittle = styled.h3`
  text-align: center;
  font-size: 1.5rem;
  margin: 0;
`;
