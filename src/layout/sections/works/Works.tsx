import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/wrapper/FlexWrapper";
import { Work } from "./work/Work";
import { Container } from "../../../components/Container";
import { initialState } from "../../../features/initialState";
import { S } from "./Works_Styles";

const worksData = initialState.works;

export const Works: React.FC = () => {
  return (
    <S.Works id="works">
      <Container>
        <SectionTitle textAlign={"center"} padding={"100px 0px 100px"}>
          Мои проекты
        </SectionTitle>
        <FlexWrapper justify={"space-around"} wrap={"wrap"} margin={'0 0 10px'}>
          {worksData.map((work) => {
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
