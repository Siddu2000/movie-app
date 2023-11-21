import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MovieCarousel = () => {
  // Dummy movie images
  const movieImages = [
    'https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/2971/1622971-t-5688f621ffcb',
    'https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/7399/1617399-v-d83d3678828d',
    'https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/1092/1611092-v-479ce3b302eb',
    'https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/3060/1623060-i-ce7affe08083',
    'https://via.placeholder.com/300x450/FF00FF/FFFFFF?text=Movie+5',
  ];

  // Settings for the carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      <h2>Movie Carousel</h2>
      <Slider {...settings}>
        {movieImages.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Movie ${index + 1}`} style={{ width: '100%', height: '600px,', }} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MovieCarousel;
