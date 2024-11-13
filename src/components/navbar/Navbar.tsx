import styled from "styled-components";

export const Navbar = () => {
  return (
    <StyledNav>
      <a href="#">Мои скиллы</a>
      <a href="#">Мои проекты</a>
      <a href="#">Контакты</a>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  width: 412px;
  height: 25px;
  display: flex;
  justify-content: space-between;
  padding-top: 37px;
  a {
    text-decoration: none !important;
    color: white;
    cursor: pointer;
    font-family: Poppins;
    font-size: 20px;
    font-weight: 500;
    line-height: 24px;
    text-align: left;
  }
`;
