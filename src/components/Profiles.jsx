/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Profile from "./Profile";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  display: flex;
  gap: 2.5rem;
`;

function Profiles(props) {
  const { setActiveProfile } = props;
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users")
      .then((response) => {
        setProfiles(response.data.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

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
