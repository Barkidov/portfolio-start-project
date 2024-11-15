import styled from "styled-components";
import { FlexWrapper } from "../../../components/wrappers/FlexWrapper";
import { SectionTittle } from "../../../components/SectionTittle";
import { Skill } from "./skill/Skill";

export const Skills = () => {
  return (
    <StyleSkills>
      <SectionTittle textAlign={"center"} paddingTop={"100px"}>
        Мои скиллы
      </SectionTittle>
      <FlexWrapper justify={"space-between"} wrap={"wrap"}>
        <Skill
          iconId={"html"}
          title={"HTML5"}
          text={
            "Создаю семантически правильную структуру страниц, что улучшает SEO и доступность. Уверенно использую современные теги HTML5 и атрибуты для создания понятного и чистого кода."
          }
        />
        <Skill
          iconId={"css"}
          title={"CSS3"}
          text={
            "Разрабатываю адаптивные и отзывчивые дизайны с помощью Flexbox и Grid Layout. Владею CSS-анимациями и трансформациями для улучшения пользовательского опыта, а также применяю методологию BEM для организации стилей."
          }
        />
        <Skill
          iconId={"react"}
          title={"React"}
          text={
            "Разрабатываю динамичные и интерактивные пользовательские интерфейсы с помощью React, применяя функциональные компоненты, хуки и управление состоянием (useState, useEffect, useContext). Оптимизирую рендеринг для повышения производительности."
          }
        />
        <Skill
          iconId={"js"}
          title={"JavaScript"}
          text={
            "Владею современным JavaScript (ES6+), использую асинхронные запросы (fetch, async/await), работаю с API и умею реализовывать сложную логику на клиенте. Пишу чистый и поддерживаемый код, следуя принципам DRY и KISS."
          }
        />
      </FlexWrapper>
    </StyleSkills>
  );
};

const StyleSkills = styled.section`
  /* height: 1065px; */
  background-color: #161d2a;
  padding-left: 30px;
  padding-right: 30px;
`;
