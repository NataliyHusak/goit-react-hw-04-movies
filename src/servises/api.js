import Axios from "axios";

require("dotenv").config();

const API_BASE_URL = "https://api.themoviedb.org/3/";

const API_KEY = "6b99ab3893b7ab7cc1f5e941cef2fb78";

export const getMoviesTrending = (mediaType = "all", timeWindow = "day") => {
  return Axios.get(
    `${API_BASE_URL}trending/${mediaType}/${timeWindow}?api_key=${API_KEY}`
  );
};

export const getMoviesId = id => {
  return Axios.get(`${API_BASE_URL}movie/${id}?api_key=${API_KEY}`);
};

export const getMoviesQuery = query => {
  return Axios.get(
    `${API_BASE_URL}search/movie?api_key=${API_KEY}&query=${query}`
  );
};

export const getMoviesCredits = id => {
  return Axios.get(`${API_BASE_URL}movie/${id}/credits?api_key=${API_KEY}`);
};

export const getMoviesReviews = id => {
  return Axios.get(`${API_BASE_URL}movie/${id}/reviews?api_key=${API_KEY}`);
};
