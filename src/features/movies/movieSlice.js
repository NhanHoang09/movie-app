import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/api/movieApi";
import { APIKey } from "../../common/api/movieKeyApi";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (term) => {
    const response = await movieApi.get(
      `?apikey=${APIKey}&s=${term}&type=movie`
    );
    return response.data;
  }
);

export const fetchAsyncShow = createAsyncThunk(
  "movies/fetchAsyncShow",
  async (term) => {
    const response = await movieApi.get(
      `?apikey=${APIKey}&s=${term}&type=series`
    );
    return response.data;
  }
);

export const fetchAsyncDetail = createAsyncThunk(
  "movies/fetchAsyncDetail",
  async (id) => {
    const response = await movieApi.get(`?apikey=${APIKey}&i=${id}&Plot=full`);
    return response.data;
  }
);

const initialState = {
  movies: {},
  show: {},
  SelectDetail: {},
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, action) => {
      state.movies = action.payload;
    },
    removeSelectMovie: (state) => {
      state.SelectDetail = {};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, action) => {
      console.log("fetch successful");
      return { ...state, movies: action.payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("Rejected");
    },
    [fetchAsyncShow.fulfilled]: (state, action) => {
      console.log("fetch successful");
      return { ...state, show: action.payload };
    },
    [fetchAsyncDetail.fulfilled]: (state, action) => {
      console.log("fetch successful");
      return { ...state, SelectDetail: action.payload };
    },
  },
});

export const { removeSelectMovie } = moviesSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.show;
export const getSelectDetail = (state) => state.movies.SelectDetail;
export default moviesSlice.reducer;
