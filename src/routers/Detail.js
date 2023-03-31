
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [movies, setMovies] = useState([])
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setMovies(json.data.movie);
  };
 
  useEffect(() => {
    getMovie();
    // eslint-disable-next-line
  }, []);
  return <h1> {movies.description_intro} </h1>
}

export default Detail;