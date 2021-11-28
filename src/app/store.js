import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../features/movies/movieSlice";

export default configureStore({
  reducer: {
    movies: moviesReducer,
  },
});
