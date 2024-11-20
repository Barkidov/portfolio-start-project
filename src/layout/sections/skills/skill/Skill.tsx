import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";
import { Text } from "../../../../components/Text";

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
        width={"200"}
        height={"200"}
        iconId={props.iconId}
      />
      <SkillTittle>{props.title}</SkillTittle>
      <Text
        textAlign={"center"}
        lineHeight={"1.5"}
      >
        {props.text}
      </Text>
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
  max-width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;

  & svg {
    display: block;
    margin: 0 auto;
  }
`;

const SkillTittle = styled.h3`
  font-size: 1.5rem;
  margin: 0 auto;
  padding: 20px 0 20px
`;

