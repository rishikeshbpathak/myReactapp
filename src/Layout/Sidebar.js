import React from "react";
import {
  FaHome,
  FaSearch,
  FaTv,
  FaUser,
  FaFilm,
  FaVideo,
  FaPlay,
  FaList,
} from "react-icons/fa";
import "./Sidebar.css"; // Import the CSS file for styling

export default function Sidebar() {
  return (
    <div className="sidebar bg-dark">
      {/* Logo Section */}
      <div className="sidebar__logo">
        <img
          src="https://img.hotstar.com/image/upload/v1737554969/web-assets/prod/images/rebrand/logo.png"
          alt="JioHostar Logo"
        />
      </div>
      <div className="sidebar__menu">
        <ul className="list-none space-y-4">
          <li>
            <a href="/home" aria-label="Home">
              <span className="sidebar__icon">
                <FaHome />
              </span>
              <span className="sidebar_menu_title"> Home </span>
            </a>
          </li>
          <li>
            <a href="/search" aria-label="Search">
              <span className="sidebar__icon">
                <FaSearch />
              </span>
              <span className="sidebar_menu_title"> Search </span>
            </a>
          </li>
          <li>
            <a href="/tv" aria-label="TV">
              <span className="sidebar__icon">
                <FaTv />
              </span>
              <span className="sidebar_menu_title"> TV </span>
            </a>
          </li>
          <li>
            <a href="/movies" aria-label="Movies">
              <span className="sidebar__icon">
                <FaFilm />
              </span>
              <span className="sidebar_menu_title"> Movies </span>
            </a>
          </li>
          <li>
            <a href="/sports" aria-label="Sports">
              <span className="sidebar__icon">
                <FaPlay />
              </span>
              <span className="sidebar_menu_title"> Sports </span>
            </a>
          </li>
          <li>
            <a href="/live" aria-label="Live">
              <span className="sidebar__icon">
                <FaVideo />
              </span>
              <span className="sidebar_menu_title"> Live </span>
            </a>
          </li>
          <li>
            <a href="/categories" aria-label="Categories">
              <span className="sidebar__icon">
                <FaList />
              </span>
              <span className="sidebar_menu_title"> Categories </span>
            </a>
          </li>
          <li>
            <a href="/profile" aria-label="Profile">
              <span className="sidebar__icon">
                <FaUser />
              </span>
              <span className="sidebar_menu_title"> Profile </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
