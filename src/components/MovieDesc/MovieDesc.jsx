import { useLocation, Link } from "react-router-dom";
import clsx from "clsx";

import css from "./MovieDesc.module.css";

const MovieDesc = ({ desc }) => {
  const imgBaseUrl = "https://image.tmdb.org/t/p/w300";
  const { poster_path, original_title, vote_average, overview, genres, id } =
    desc;

  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";

  return (
    <div>
      <Link to={backLinkHref} className={clsx(css.movie_desc_back)}>
        Go Back
      </Link>
      <div className={clsx(css.movie_desc_box)}>
        <img
          src={imgBaseUrl + poster_path}
          alt={original_title}
          className={clsx(css.movie_desc_img)}
        ></img>
        <div className={clsx(css.movie_desc_desc)}>
          <h2 className={clsx(css.movie_desc_name)}>{original_title}</h2>
          <p className={clsx(css.movie_desc_p)}>
            User score: {vote_average.toFixed(0)}%
          </p>
          <h3 className={clsx(css.movie_desc_header)}>Overview</h3>
          <p className={clsx(css.movie_desc_p)}>{overview}</p>
          <h3 className={clsx(css.movie_desc_header)}>Genres:</h3>
          <div>
            {genres.map((genre) => {
              return (
                <p className={clsx(css.movie_desc_p)} key={genre.id}>
                  {genre.name}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDesc;
