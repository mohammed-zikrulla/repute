import { FaSearch, FaFilter } from "react-icons/fa";
import React, { useState } from "react";
import "./Navbar.css";
import myImage from "./logo.png";
import myProfile from "./profile.png";
import { useDispatch, useSelector } from "react-redux";
import { updateFilterArray } from "../../Store";
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
  const Search = useSelector((state) => state.search);
  const [search, setSearch] = useState("");
  const [focus, setFocus] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  // const handleSearch = () => {
  //   const filterArray = array1.filter((menuItem) =>
  //     menuItem.original_title.toLowerCase().includes(search.toLowerCase())
  //   );
  //   dispatch(updateFilterArray(filterArray));
  // // };
  // const handleFocus = () => {
  //   setIsFocused(true);
  // };

  // const handleBlur = () => {
  //   setIsFocused(false);
  // };

  const newfunn = (e) => {
    setSearch(e.target.value);
    if (e.target.value.length > 0) {
      setFocus(true);
    } else {
      setFocus(false);
    }
    const filterArray = array.filter((menuItem) =>
      menuItem.original_title.toLowerCase().includes(search.toLowerCase())
    );
    dispatch(updateFilterArray(filterArray));
    // console.log(filterArray);
  };
  const arr = useSelector((state) => state.filterArray);
  // console.log(arr);

  const dropdownfunn = (e) => {
    const filterArray = arr.filter((menuItem) =>
      menuItem.original_language
        .toLowerCase()
        .includes(e.target.value.toLowerCase())
    );
    dispatch(updateFilterArray(filterArray));
    console.log(filterArray);
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
          <div className="navbar__search">
            <input
              type="text"
              value={search}
              onChange={(e) => newfunn(e)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder="Search"
            />
            <FaSearch className="navbar__search-icon" />
            {isFocused && <Suggestions />};{/* <Suggestions /> */}
          </div>
          <div className="navbar__filter">
            <select onChange={dropdownfunn}>
              <option>All Languages</option>
              <option value="en">English</option>
              <option value="hi">Hindi</option>
            </select>
            <FaFilter />
          </div>
          <div className="navbar__dropdown">
            <img src={myProfile} alt="Profile" />
            <div className="navbar__dropdown-content">
              <ul>
                <li>Account</li>
                <li>Sign out</li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
