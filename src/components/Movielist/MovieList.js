import React from "react";
import { useSelector } from "react-redux";
import "./MovieList.scss";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const MovieList = () => {
  const { loading, movies } = useSelector((state) => state.Movies);
  const Shows = useSelector((state) => state.Movies.Shows);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  

  return loading ? (
    <h1 style={{ color: "white" }}>Loading....</h1>
  ) : (
    <div>
      <h1>MOVIES</h1>

      <div className="card-item">
        <Slider {...settings}>
          {movies?.Search &&
            movies?.Search?.map((movie, index) => {
              return (
                <div className="card-items" key={index}>
                  <Link to={`/movie/${movie?.imdbID}`}>
                    <div className="card-inner">
                      <div className="card-top">
                        <img src={movie?.Poster} alt={movie.Title} />
                      </div>
                      <div className="card-bottom">
                        <p>
                          <b>{movie?.Title}</b>
                        </p>
                        <span>{movie?.Year}</span>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
        </Slider>
      </div>

      <h1>SHOWS</h1>
      <div className="card-item">
        <Slider {...settings}>
          {Shows?.Search &&
            Shows?.Search?.map((movie, index) => {
              return (
                <div className="card-items" key={index}>
                  <Link to={`/movie/${movie?.imdbID}`}>
                    <div className="card-inner">
                      <div className="card-top">
                        <img src={movie?.Poster} alt={movie?.Title} />
                      </div>
                      <div className="card-bottom">
                        <p>
                          <b>{movie?.Title}</b>
                        </p>
                        <span>{movie?.Year}</span>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
        </Slider>
      </div>
    </div>
  );
};

export default MovieList;
