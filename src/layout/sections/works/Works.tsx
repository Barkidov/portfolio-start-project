import styled from "styled-components";
import { SectionTittle } from "../../../components/SectionTittle";
import { FlexWrapper } from "../../../components/wrappers/FlexWrapper";
import { Work } from "./work/Work";
import projFirst from "../../../assets/images/proj-1.webp";
import projSecond from "../../../assets/images/proj-2.webp";

export const Works = () => {
  return (
    <StyledWorks>
      <SectionTittle textAlign={"center"} paddingTop={"100px"}>
        Мои проекты
      </SectionTittle>
      <FlexWrapper
        margin={"80px 0px 0px 0px"}
        justify={"space-around"}
        wrap={"wrap"}
      >
        <Work
          title={"Мой проект 1"}
          src={projFirst}
          text={
            "CSS-градиенты представлены типом данных , специальным типом , состоящим из последовательного перехода между двумя и более цветами."
          }
          href={"#"}
        />
        <Work
          title={"Мой проект 2"}
          src={projSecond}
          text={
            "CSS-функция создаёт конический градиент — фоновое изображение из цветовых переходов, повёрнутых вокруг центральной точки. . "
          }
          href={"#"}
        />
        <Work
          title={"Мой проект 3"}
          src={projSecond}
          text={
            "Стилевая функция linear-gradient() добавляет линейный градиент к фону элемента. Она выступает значением свойства background-image или background."
          }
          href={"#"}
        />
        <Work
          title={"Мой проект 4"}
          src={projFirst}
          text={
            "Градиент CSS​​ Для того, чтобы задать градиент используется свойство background-image или сокращенный вариант background-image."
          }
          href={"#"}
        />
      </FlexWrapper>
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
