import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";

const KEY = "98478fc7eb75aa7e8b4a496875cf4e46";

const AuthorizationKey =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ODQ3OGZjN2ViNzVhYTdlOGI0YTQ5Njg3NWNmNGU0NiIsIm5iZiI6MTY5NDgwNzYzNy44ODIsInN1YiI6IjY1MDRiNjU1NTllOGE5MDEwMTFiMmQ3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.49ltLbZnXXsBmBr91B4z7dwwI42taK2ZUTFtgnbmuZk";

export const trendingMovies = async () => {
  try {
    const response = await axios.get("/trending/movie/day", {
      headers: {
        accept: "application/json",
        Authorization: AuthorizationKey,
      },
      params: {
        key: KEY,
      },
    });

    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const movieDetails = async (movie_id) => {
  try {
    const response = await axios.get(`movie/${movie_id}?language=en-US`, {
      headers: {
        accept: "application/json",
        Authorization: AuthorizationKey,
      },
      params: {
        key: KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const movieCredits = async (movie_id) => {
  try {
    const response = await axios.get(
      `/movie/${movie_id}/credits?language=en-US`,
      {
        headers: {
          accept: "application/json",
          Authorization: AuthorizationKey,
        },
        params: {
          key: KEY,
        },
      }
    );
    return response.data.cast;
  } catch (error) {
    console.log(error);
  }
};

export const movieReviews = async (movie_id) => {
  try {
    const response = await axios.get(
      `/movie/${movie_id}/reviews?language=en-US&page=1`,
      {
        headers: {
          accept: "application/json",
          Authorization: AuthorizationKey,
        },
        params: {
          key: KEY,
        },
      }
    );
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const fetchByQuery = async (query) => {
  try {
    const response = await axios.get(
      `search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
      {
        headers: {
          accept: "application/json",
          Authorization: AuthorizationKey,
        },
        params: {
          key: KEY,
        },
      }
    );
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};
