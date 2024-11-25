import { Text } from "../../../../components/Text";
import { Image } from "../../../../components/Image";
import { S } from "./Work_Styles";

type WorkPropsType = {
  title: string;
  text: string;
  src: string;
  href: string;
};

export const Work: React.FC<WorkPropsType> = (props) => {
  return (
    <S.Work>
      <Image
        borderRadius={"55px"}
        padding={"25px"}
        width={"100%"}
        height={"280px"}
        src={props.src}
        alt="Первый проект"
      />
      <S.Title>{props.title}</S.Title>
      <Text padding={"20px"}>
        {props.text}
      </Text>
      <S.Link href={props.href}>Проект</S.Link>
    </S.Work>
  );
};

