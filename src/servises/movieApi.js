import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '84bfc56af25e689bdf95e218c09c46c3';

export const fetchPopularMovies = async signal => {
  try {
    const params = { api_key: API_KEY };
    const pathname = `/trending/movie/week`;
    const response = await axios.get(pathname, { params, signal });

    return response.data.results;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchQueryMovies = async (query, signal) => {
  try {
    const params = { api_key: API_KEY, query, language: 'en-US' };
    const pathname = `/search/movie`;
    const response = await axios.get(pathname, { params, signal });

    return response.data.results;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchMovieDetails = async (movieId, signal) => {
  try {
    const params = { api_key: API_KEY };
    const pathname = `/movie/${movieId}`;
    const response = await axios.get(pathname, { params, signal });

    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchMovieCredits = async (movieId, signal) => {
  try {
    const params = { api_key: API_KEY };
    const pathname = `/movie/${movieId}/credits`;
    const response = await axios.get(pathname, { params, signal });

    return response.data;
  } catch (error) {
    throw new Error(error.messade);
  }
};

export const fetchMovieReviews = async (movieId, signal) => {
  try {
    const params = { api_key: API_KEY };
    const pathname = `/movie/${movieId}/reviews`;
    const response = await axios.get(pathname, { params, signal });

    return response.data;
  } catch (error) {
    throw new Error(error.messade);
  }
};
