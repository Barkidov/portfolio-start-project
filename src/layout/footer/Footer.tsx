import { S } from "./Footer_Styles";


export const Footer: React.FC = () => {
  return (
    <S.Footer>
      <S.PhoneEmail>
        <S.ContactNumber href="tel:+79282691400">
          Tel: 8 (928) 269-14-00
        </S.ContactNumber>
        <S.Email href="mailto:zpliskin@inbox.ru">Email: zpliskin@inbox.ru</S.Email>
      </S.PhoneEmail>
      <S.Copiright>© 2024 Anzor Nasipov, All Rights Reserved.</S.Copiright>
    </S.Footer>
  );
};


