import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import MovieListing from "./../MovieListing/MovieListing";

import {
  fetchAsyncMovies,
  fetchAsyncShow,
} from "../../features/movies/movieSlice";

function Home() {
  const dispatch = useDispatch();
  const seriesText = "Friends";
  const movieText = "Harry";
  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShow(seriesText));
  }, [dispatch]);

  return (
    <div>
      <div className="banner_img"></div>
      <MovieListing />
    </div>
  );
}

export default Home;
