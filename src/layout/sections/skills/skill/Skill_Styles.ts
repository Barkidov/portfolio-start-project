import styled from "styled-components";

const Skill = styled.div`
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
  font-size: 1.2rem;
  margin: 0 auto;
  padding: 20px 0 20px
`;

export const S = {
    Skill,
    SkillTittle
}