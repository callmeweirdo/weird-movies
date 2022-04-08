import React, { useEffect, useState } from "react";
import MovieListing from "../MovieListing/MovieListing";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/MovieApiKey";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addMovies } from "../../features/movies/movieSlice";
import { getAllMovies } from "../../features/movies/movieSlice";

const Home = () => {
  const [title, setTitle] = useState("Alien");

  const movieText = "Alien";
  const dispatch = useDispatch();


  const fetchMovies = async () => {
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${movieText}&type=movie`
    ).catch((err) => {
        console.log("Err :", err);
    })
    dispatch(addMovies(response.data))
    
  };

useEffect(() => {
    fetchMovies();
},[]);

  return (
    <div>
      <div className="banner-image"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
