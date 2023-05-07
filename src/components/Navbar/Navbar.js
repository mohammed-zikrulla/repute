import { FaSearch, FaFilter } from "react-icons/fa";
import React from "react";
import "./Navbar.css";
import myImage from "./logo.png";
import myProfile from "./profile.png";
import { useDispatch, useSelector } from "react-redux";
import { updateSearch } from "../../Store";

const menuItems = [
  { label: "Home", link: "#" },
  { label: "Movies", link: "#" },
  { label: "TV Shows", link: "#" },
  { label: "Latest", link: "#" },
  { label: "My List", link: "#" },
];

const Navbar = () => {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search);

  const filteredMenuItems = menuItems.filter((menuItem) =>
    menuItem.label.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <nav className="navbar">
      <div className="navbar__left">
        <img src={myImage} alt="zikflix" />
        <ul className="navbar__menu">
          {filteredMenuItems.map((menuItem, index) => (
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
            onChange={(e) => dispatch(updateSearch(e.target.value))}
            placeholder="Search"
          />
          <FaSearch className="navbar__search-icon" />
        </div>
        <div className="navbar__filter">
          <select>
            <option>All Languages</option>
            <option>English</option>
            <option>Hindi</option>
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
  );
};

export default Navbar;
