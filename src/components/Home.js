import React, { useEffect } from "react";
import MovieApi from "../common/Apis/MovieApi";
import {ApiKey} from "../common/Apis/MovieApiKey";

import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, fetchShows } from "../StoreSlices/movieSlice";
import {
  getMoviesStart,
  getMoviesSuccess,
  getMoviesFail,
} from "../StoreSlices/movieSlice";
import MovieList from "./Movielist/MovieList";
import MovieCarousel from "./Movielist/MovieCarousel";
const Home = () => {
    const movieText="Harry";
    const ShowText = "Friends";
  const dispatch = useDispatch();
  useEffect(() => {
   
    dispatch(fetchMovies(movieText));
    dispatch(fetchShows(ShowText));
  }, []);

  return <div>
   
    <MovieList/>
  </div>;
};

export default Home;
