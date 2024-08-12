/* eslint-disable react/prop-types */
import styled from "styled-components";
import Profiles from "../components/Profiles";

const MainArea = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1c1c1c;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  font-size: 1.3rem;
`;

const ManageProfileButton = styled.a`
  border: 1px solid #787878;
  border-radius: 4px;
  padding: 0.5rem 2rem;
  text-decoration: none;
  color: #787878;
`;

const Title = styled.h1`
  color: #eeeeee;
  text-align: center;
  font-size: 3rem;
`;

function Welcome(props) {
  const { setActiveProfile } = props;

  return (
    <MainArea>
      <Content>
        <Title>Who&apos;s Watching?</Title>
        <Profiles setActiveProfile={setActiveProfile} />
        <ManageProfileButton href="#">Manage Profiles</ManageProfileButton>
      </Content>
    </MainArea>
  );
}

export default Welcome;
