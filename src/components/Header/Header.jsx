import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { fetchAsyncMovies, fetchAsyncShows } from "../../features/movies/movieSlice";
import user from "../../images/alienlogo.jpeg";
import "./Header.scss";

const Header = () => {
  // const navigate = useNavigate();
  const [search, setSearch] = useState("");

  

  const dispatch = useDispatch();

  const submitHandler = (e) => {

    if(!search){
      alert("cant not be empty");
      return;
    }

    e.preventDefault();
    dispatch(fetchAsyncMovies(search));
    dispatch(fetchAsyncShows(search));
    setSearch("");
  }



  return (
    <div className="header">
      <div className="logo">
        <Link to="/"> Weird Movies </Link>
      </div>

      <div className="search-bar">
        <form action="" onSubmit={submitHandler}>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for Awesome Moies"
          />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>

      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  );
};

export default Header;
