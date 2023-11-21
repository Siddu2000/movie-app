import { createSlice } from "@reduxjs/toolkit";
import MovieApi from "../common/Apis/MovieApi";
import { ApiKey } from "../common/Apis/MovieApiKey";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movies: {},
    Shows: {},
    movieOrShows: [],
    loading: false,
    error: null,
  },
  reducers: {
    getMoviesStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    getMoviesSuccess: (state, action) => {
      state.movies = action.payload;
      state.loading = false;
    },
    getMoviesFail: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    getShowsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    getShowsSuccess: (state, action) => {
      state.Shows = action.payload;
      state.loading = false;
    },
    getShowsFail: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    getMovieOrShowsSuccess: (state, action) => {
      state.movieOrShows = action.payload;
    },
  },
});
export const {
  getMoviesStart,
  getMoviesSuccess,
  getMoviesFail,
  getShowsStart,
  getShowsSuccess,
  getShowsFail,
  getMovieOrShowsSuccess,
} = movieSlice.actions;
export default movieSlice.reducer;

export const fetchMovies = (term) => {

  return async function fetchMoviesThunk(dispatch, getstate) {
    dispatch(getMoviesStart(true));
    try {
      const response = await MovieApi.get(
        `?apikey=${ApiKey}&s=${term}&type=movie`
      );

      dispatch(getMoviesSuccess(response.data));
    } catch (error) {
      dispatch(getMoviesFail(error));
    }
  };
};

export const fetchShows = (term) => {

  return async function fetchShowsThunk(dispatch, getstate) {
    dispatch(getShowsStart(true));
    try {
      const response = await MovieApi.get(
        `?apikey=${ApiKey}&s=${term}&type=series`
      );
      dispatch(getShowsSuccess(response.data));
    } catch (error) {
      dispatch(getShowsFail(error));
    }
  };
};
export const fetchMovieOrShows = (id) => {
  return async function fetchMovieOrShowsThunk(dispatch, getstate) {
    dispatch(getShowsStart(true));
    try {
      const response = await MovieApi.get(
        `?apikey=${ApiKey}&i=${id}&Plot=full`
      );
      dispatch(getMovieOrShowsSuccess(response.data));
    } catch (error) {
      dispatch(getShowsFail(error));
    }
  };
};
