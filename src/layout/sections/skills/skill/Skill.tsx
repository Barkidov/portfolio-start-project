import { Icon } from "../../../../components/icon/Icon";
import { Text } from "../../../../components/Text";
import { S } from "./Skill_Styles";

type SkillPropsType = {
  key: string;
  iconId: string;
  title: string;
  text: string;
};

export const Skill: React.FC<SkillPropsType> = (props) => {
  return (
    <S.Skill>
      <Icon width={"200"} height={"200"} iconId={props.iconId} />
      <S.SkillTittle>{props.title}</S.SkillTittle>
      <Text fontWeight={'300'} textAlign={"center"} lineHeight={"1.5"}>
        {props.text}
      </Text>
    </S.Skill>
  );
};
