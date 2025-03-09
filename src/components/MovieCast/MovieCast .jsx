import clsx from "clsx";

import { movieCredits } from "../../api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import css from "./MovieCast.module.css";

const Cast = () => {
  const [credits, setCredits] = useState([]);

  const { movieId } = useParams();

  const imgBaseUrl = "https://image.tmdb.org/t/p/w300";

  useEffect(() => {
    const result = async () => {
      try {
        const cast = await movieCredits(movieId);
        setCredits(cast);
      } catch (error) {
        console.log(error);
      }
    };
    result();
  }, [movieId]);

  return (
    <>
      {credits.length ? (
        <ul className={clsx(css.movie_cast_list)}>
          {credits.slice(0, 10).map((actor) => {
            return (
              <li key={actor.id} className={clsx(css.movie_cast_item)}>
                <img
                  src={imgBaseUrl + actor.profile_path}
                  alt={actor.original_name}
                  className={clsx(css.movie_cast_img)}
                ></img>
                <h4 className={clsx(css.movie_cast_title)}>
                  {actor.original_name}
                </h4>
              </li>
            );
          })}
        </ul>
      ) : (
        <></>
      )}
    </>
  );
};

export default Cast;
