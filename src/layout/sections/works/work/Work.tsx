import styled from "styled-components";
import { theme } from "../../../../styles/Theme";
import { Text } from "../../../../components/Text";
import { Image } from "../../../../components/Image";

type WorkPropsType = {
  title: string;
  text: string;
  src: string;
  href: string;
};

export const Work = (props: WorkPropsType) => {
  return (
    <StyledWork>
      <Image
        borderRadius={"55px"}
        padding={"25px"}
        width={"100%"}
        height={"280px"}
        src={props.src}
        alt="Первый проект"
      />
      <Title>{props.title}</Title>
      <Text padding={"20px"} fontSize={"20px"}>
        {props.text}
      </Text>
      <Link href={props.href}>Проект</Link>
    </StyledWork>
  );
};

const StyledWork = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 400px;
  border: solid 2px white;
  margin-bottom: 80px;
  border-radius: 55px 0px;
  box-sizing: border-box;
  max-height: 650px;
`;

const Title = styled.h3`
  text-align: center;
  position: relative;
  padding-bottom: 10px;

  &::after {
    content: "";
    display: block;
    width: 60%;
    height: 2px;
    background: ${theme.colors.backgroundButtonsGradientColor};
    margin: 0 auto;
    margin-top: 30px;
  }
`;

const Link = styled.a`
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 4rem;
  text-align: center;
  max-width: 183px;
  margin: 20px;
  border-radius: 55px;
  background: ${theme.colors.backgroundButtonsGradientColor};

  &:hover {
    cursor: pointer;
    background: ${theme.colors.backgroundButtonsHoverGradientColor};
  }
`;