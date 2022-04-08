import React, { useEffect, useState } from "react";
import MovieListing from "../MovieListing/MovieListing";


import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {   fetchAsyncMovies, fetchAsyncShows } from "../../features/movies/movieSlice";

const Home = () => {
  // const [title, setTitle] = useState("Alien");

  const dispatch = useDispatch();

useEffect(() => {
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncShows());
},[dispatch]);

  return (
    <div>
      <div className="banner-image"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
