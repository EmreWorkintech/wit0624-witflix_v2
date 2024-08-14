/* eslint-disable react/prop-types */
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

const Avatar = styled.img`
  width: 160px;
  border-radius: 0.25rem;
`;

const Title = styled.p`
  color: #787878;
  text-align: center;
`;

const Card = styled.div`
  cursor: pointer;
  &:hover p {
    color: white;
  }
`;

function Profile(props) {
  const { profile, setActiveProfile } = props;
  const history = useHistory();

  const handleClick = () => {
    setActiveProfile(profile);
    history.push("/player/5");
  };
  return (
    <Card onClick={handleClick}>
      <Avatar src={profile.avatar} />
      <Title>{profile.title}</Title>
    </Card>
  );
}

export default Profile;
