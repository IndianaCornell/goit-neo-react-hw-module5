import { movieDetails } from "../api";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import AdditionalInfo from "../components/AdditionalInfo/AdditionalInfo";
import MovieDesc from "../components/MovieDesc/MovieDesc";

const MovieDetails = () => {
  const [movieDesc, setMovieDesc] = useState([]);
  const [requestDone, setRequestDone] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    const result = async () => {
      try {
        const movie = await movieDetails(movieId);
        setMovieDesc(movie);
        if (movie) {
          setRequestDone(true);
        }
      } catch (error) {
        console.log(error);
      }
    };
    result();
  }, [movieId]);

  return (
    <>
      {requestDone ? <MovieDesc desc={movieDesc} /> : "loading"}
      <AdditionalInfo />
    </>
  );
};

export default MovieDetails;
