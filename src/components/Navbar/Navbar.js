import { FaFilter } from "react-icons/fa";
import React, { useState } from "react";
import "./Navbar.css";
import myImage from "./logo.png";
import myProfile from "./profile.png";
import { useDispatch, useSelector } from "react-redux";
import { updateFilterArray, setFocus, updateSearch } from "../../Store";
import Suggestions from "../Suggestions/Suggestions";

const menuItems = [
  { label: "Home", link: "#" },
  { label: "Movies", link: "#" },
  { label: "TV Shows", link: "#" },
  { label: "Latest", link: "#" },
  { label: "My List", link: "#" },
];

const Navbar = ({ array }) => {
  const array1 = useSelector((state) => state.data1);
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search);
  const [language, setLanguage] = useState("");
  const focus = useSelector((state) => state.focus);

  const uniqueLanguages = [
    ...new Set(array.map((lang) => lang.original_language)),
  ];

  const handleFocus = () => {
    dispatch(setFocus(true));
  };

  const handleLanguageChange = (e) => {
    const value = e.target.value;
    setLanguage(value);
    console.log(value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (search === "" && language === "all") {
      const filteredMovies = array;
      dispatch(updateFilterArray(filteredMovies));
      console.log(filteredMovies);
    } else if (search === "" && language !== "all") {
      const filteredMovies = array.filter((element) => {
        return element.original_language === language;
      });
      dispatch(updateFilterArray(filteredMovies));
      console.log(filteredMovies);
    } else {
      const filteredMovies = array.filter((element) => {
        return (
          element.original_title.toLowerCase().includes(search.toLowerCase()) &&
          element.original_language === language
        );
      });
      dispatch(updateFilterArray(filteredMovies));
      console.log(filteredMovies);
    }
  };

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="navbar__left">
          <img src={myImage} alt="zikflix" />
          <ul className="navbar__menu">
            {menuItems.map((menuItem, index) => (
              <li key={index} className="navbar__menu-item">
                {menuItem.label}
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar__right">
          <div className="form">
            <form>
              <div className="form-row">
                <div className="form-group navbar__search">
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => dispatch(updateSearch(e.target.value))}
                    onFocus={handleFocus}
                    placeholder="Search"
                  />
                  {focus && <Suggestions />}
                </div>
                <div className="form-group navbar__filter">
                  <select value={language} onChange={handleLanguageChange}>
                    <option value="all">All Languages</option>
                    {uniqueLanguages.map((lang) => (
                      <option key={lang} value={lang}>
                        {lang}
                      </option>
                    ))}
                  </select>
                  <FaFilter />
                </div>
                <div className="form-group">
                  <button className="buttonsubmit" onClick={handleSearch}>
                    {" "}
                    search{" "}
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className="navbar__dropdown">
            <img src={myProfile} alt="Profile" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
