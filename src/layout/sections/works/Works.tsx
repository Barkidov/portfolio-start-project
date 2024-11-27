import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/wrapper/FlexWrapper";
import { Work } from "./work/Work";
import { Container } from "../../../components/Container";
import { initialState } from "../../../features/initialState";
import { S } from "./Works_Styles";
import { useState } from "react";
import { TabsSelectMenu } from "../../../components/tabsSelectMenu/TabsSelectMenu";

const worksData = initialState.works;
const tabsItemsData = initialState.tabsItems;

export const Works: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>("all");

  const filteredWorks =
    selectedType === "all"
      ? worksData
      : worksData.filter((work) => work.type === selectedType);

  return (
    <S.Works id="works">
      <Container>
        <SectionTitle textAlign={"center"} padding={"100px 0px 100px"}>
          Мои проекты
        </SectionTitle>
        <FlexWrapper justify={"center"} padding={"0 0 40px"} gap={"50px"}>
          {tabsItemsData.map((tabItem) => {
            return (
              <TabsSelectMenu
                key={tabItem.id}
                onClick={() => setSelectedType(tabItem.type)}
                active={selectedType === tabItem.type}
              >
                {tabItem.title}
              </TabsSelectMenu>
            );
          })}
        </FlexWrapper>
        <FlexWrapper justify={"space-around"} wrap={"wrap"} margin={"0 0 10px"}>
          {filteredWorks.map((work) => {
            return (
              <Work
                key={work.id}
                title={work.title}
                src={work.src}
                text={work.text}
                href={work.href}
              />
            );
          })}
        </FlexWrapper>
      </Container>
    </S.Works>
  );
};
