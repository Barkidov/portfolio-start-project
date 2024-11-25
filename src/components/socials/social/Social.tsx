import { S } from "./Social_Styles";

type SocialPropsType = {
  href?: string;
  children?: React.ReactNode;
};

export const Social: React.FC<SocialPropsType> = ({ href, children }) => {
  return (
    <S.SocialLink href={href} target="_blank">
      {children}
    </S.SocialLink>
  );
};
