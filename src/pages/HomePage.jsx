import { useState, useEffect } from "react";
import clsx from "clsx";

import { trendingMovies } from "../api";
import MovieList from "../components/MovieList/MovieList";

import css from "./HomePage.module.css";

const HomePage = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const result = async () => {
      try {
        const movies = await trendingMovies();
        if (movies.length) {
          setMovieList(movies);
        }
      } catch (error) {
        console.log(error);
      }
    };
    result();
  }, []);

  return (
    <div className={clsx(css.home_page_box)}>
      <h1 className={clsx(css.home_page_title)}>Trending movies</h1>
      <MovieList movies={movieList} />
    </div>
  );
};

export default HomePage;
