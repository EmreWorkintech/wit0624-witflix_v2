import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

const VideoPlayer = styled.video`
  width: 100vw;
  height: 100vh;
  background: black;
`;
function Player() {
  const [movie, setMovie] = useState();
  const { id } = useParams();

  console.log(movie);

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users/" + id)
      .then((response) => {
        console.log(response);
        const veri = response.data.data;
        veri.url = "https://ik.imagekit.io/ikmedia/example_video.mp4";
        setMovie(veri);
      })
      .catch((error) => console.log(error.message));
  }, []); //didMount ([]), didUpdate (dependency array dolu olmalı), willunmount (return fn)

  return <VideoPlayer src={movie?.url} autoPlay controls />;
}

export default Player;
