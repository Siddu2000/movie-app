import React, { useEffect } from "react";
import "./MovieDetail.scss";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchMovieOrShows } from "../../StoreSlices/movieSlice";

const MovieDetail = () => {
  const { imdbID } = useParams();
  const movie = useSelector((state) => state.Movies.movieOrShows);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchMovieOrShows(imdbID));
  }, [dispatch]);
  return (
    <div className="movie">
      <h1>MovieDetails</h1>
      <div className="movie-section">
        <div className="left-section">
          <div className="movie-title">
            <h2>{movie?.Title}</h2>
          </div>
          <div className="movie-rating">
            <span>IMDB Rating: ⭐ {movie?.imdbRating}</span>
            <span>IMDB VOTES 👍:{movie?.imdbVotes}</span>
            <span>IMDB Runtime 🎞️: {movie?.Runtime}</span>
            <span>Year 📆: {movie?.Year}</span>
          </div>
          <div className="movie-plot">{movie.Plot}</div>
          <div className="movie-info">
            <div>
              <span>Director:</span>
              <span>{movie?.Director}</span>
            </div>
            <div>
              <span>Actors:</span>
              <span>{movie?.Actors}</span>
            </div>
            <div>
              <span>Writer:</span>
              <span>{movie?.Writer}</span>
            </div>
            <div>
              <span> Genre:</span>
              <span>{movie?.Genre}</span>
            </div>
            <div>
              <span> Language:</span>
              <span>{movie?.Language}</span>
            </div>
            <div>
              <span> Awards:</span>
              <span>{movie?.Awards}</span>
            </div>
          </div>
        </div>
        <div className="right-section">
          <img src={movie?.Poster} alt={movie?.Title} />
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
