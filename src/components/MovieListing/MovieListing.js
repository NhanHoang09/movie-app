import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../features/movies/movieSlice";
import MovieCard from "./../MovieCard/MovieCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from "../../common/SettingSlide";
import "./MovieListing.scss";

function MovieListing() {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  console.log(movies);
  console.log(shows);

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          <Slider {...settings}>
            {movies.Response === "True" ? (
              movies.Search.map((movie, index) => (
                <MovieCard key={index} data={movie} />
              ))
            ) : (
              <div className="movie-error">
                <h3>{movies.Error}</h3>
              </div>
            )}
          </Slider>
        </div>
      </div>
      <div className="show-list">
        <h2>Show</h2>
        <div className="movie-container">
          <Slider {...settings}>
            {shows.Response === "True" ? (
              shows.Search.map((show, index) => (
                <MovieCard key={index} data={show} />
              ))
            ) : (
              <div className="movie-error">
                <h3>{shows.Error}</h3>
              </div>
            )}
          </Slider>
        </div>
      </div>
    </div>
  );
}
export default MovieListing;
