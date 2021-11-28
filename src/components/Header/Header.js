import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./Header.scss";
import User from "../../images/user.png";
import {
  fetchAsyncMovies,
  fetchAsyncShow,
} from "./../../features/movies/movieSlice";

function Header() {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (term === "") return alert("Please enter a movie");
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShow(term));
    setTerm("");
  };

  return (
    <div className="header">
      <div className="header__logo">
        <Link to="/">Movie App </Link>
      </div>
      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={term}
            placeholder="Search..."
            onChange={(e) => setTerm(e.target.value)}
          />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>

      <div className="header__user-img">
        <img src={User} alt="" />
      </div>
    </div>
  );
}

export default Header;
