import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";
import css from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  const imgBaseUrl = "https://image.tmdb.org/t/p/w300";
  const location = useLocation();

  return (
    <ul className={clsx(css.movie_list_list)}>
      {movies.map((movie) => {
        return (
          <li key={movie.id} className={clsx(css.movie_list_item)}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              <img
                src={imgBaseUrl + movie.poster_path}
                alt={movie.original_title}
              ></img>
              <h2>{movie.title}</h2>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;
