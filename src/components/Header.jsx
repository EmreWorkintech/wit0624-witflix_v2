import styled from "styled-components";

const HeaderContainer = styled.header`
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  align-items: center;
  margin-bottom: 2rem;
`;

const Logo = styled.h1`
  color: red;
  font-weight: bold;
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo>WitFlix</Logo>
      <span>Sign In</span>
    </HeaderContainer>
  );
}

export default Header;
