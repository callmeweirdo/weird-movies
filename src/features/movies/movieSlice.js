import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/MovieApiKey";


export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async () => {
    const movieText = "Alien";

    const response = await movieApi
      .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
    return response.data;
});

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async () => {
    const seriesText = "Weird";

    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${seriesText}&type=series`
    );
    return response.data;
  }
);

export const fetchAsyncMovieOrShow = createAsyncThunk(
  "movies/fetchAsyncMovieOrShow",
  async (id) => {
    // const seriesText = "Weird";

    const response = await movieApi.get(
      `?apiKey=${APIKey}&i=${id}&Plot=full`
    );
    return response.data;
  }
);

const initialState = {
    movies: {} ,
    shows: {},
    selectMovieOrShow: {}
}

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedMovieOrShow: (state) => {
      state.selectMovieOrShow = {}
    }
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("movies success");
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("rejected");
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log("shows success");
      return { ...state, shows: payload };
    },
    [fetchAsyncMovieOrShow.fulfilled]: (state, { payload }) => {
      console.log("shows success");
      return { ...state, selectMovieOrShow: payload };
    },
  },
});

export const { removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) => state.movies.selectMovieOrShow;
export default movieSlice.reducer;