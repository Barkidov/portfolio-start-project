import styled from "styled-components";

type SocialPropsType = {
  href?: string;
  children?: React.ReactNode;
};

export const Social = ({ href, children }: SocialPropsType) => {
  return (
    <SocialLink href={href} target="_blank">
      {children}
    </SocialLink>
  );
};

const SocialLink = styled.a`
  display: inline-block;
  & + a {
    padding-left: 20px;
  }
  &:hover {
    transform: scale(1.5);
    transition: 0.1s;
  }
`;
