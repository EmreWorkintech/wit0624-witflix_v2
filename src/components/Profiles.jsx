/* eslint-disable react/prop-types */
import Profile from "./Profile";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 2.5rem;
`;

function Profiles(props) {
  const { setActiveProfile } = props;

  const profiles = [
    {
      title: "Emre",
      avatar:
        "https://as1.ftcdn.net/v2/jpg/05/90/59/88/1000_F_590598870_TOcGd4cUZzPoEMlxSc7XYwcupHOE0vLM.jpg",
    },
    {
      title: "Gözde",
      avatar:
        "https://as1.ftcdn.net/v2/jpg/05/90/59/88/1000_F_590598870_TOcGd4cUZzPoEMlxSc7XYwcupHOE0vLM.jpg",
    },
    {
      title: "Duru",
      avatar:
        "https://as1.ftcdn.net/v2/jpg/05/90/59/88/1000_F_590598870_TOcGd4cUZzPoEMlxSc7XYwcupHOE0vLM.jpg",
    },
    {
      title: "Türkan",
      avatar:
        "https://as1.ftcdn.net/v2/jpg/05/90/59/88/1000_F_590598870_TOcGd4cUZzPoEMlxSc7XYwcupHOE0vLM.jpg",
    },
  ];
  return (
    <Container>
      {profiles.map((item, index) => (
        <Profile
          profile={item}
          key={index}
          setActiveProfile={setActiveProfile}
        />
      ))}
    </Container>
  );
}

export default Profiles;
