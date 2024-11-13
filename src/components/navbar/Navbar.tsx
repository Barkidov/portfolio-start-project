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
  display: flex;
  gap:70px;
  a {
    text-decoration: none;
    color: white;
    cursor: pointer;
    font-family: Poppins;
    font-size: 20px;
    font-weight: 500;
    line-height: 34px;
    text-align: left;
  }
`;
