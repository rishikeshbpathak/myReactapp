import React, { useState } from "react";
import {
  FaHome,
  FaSearch,
  FaTv,
  FaUser,
  FaFilm,
  FaVideo,
  FaPlay,
  FaList,
  FaBars,
  FaTimes
} from "react-icons/fa";
import "./Sidebar.css";

export default function Sidebar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleSidebar = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <>
      {/* Mobile Toggle Button - Only visible on mobile */}
      <button 
        className="sidebar__mobile-toggle"
        onClick={toggleSidebar}
        aria-label="Toggle menu"
      >
        {isMobileOpen ? <FaTimes /> : <FaBars />}
      </button>

      <nav className={`sidebar ${isMobileOpen ? "sidebar--open" : ""}`}>
        {/* Logo Section with adjusted positioning */}
        <div className="sidebar__logo hover:scale-110 duration-300 cursor-pointer">
          <img
            src="https://img.hotstar.com/image/upload/v1737554969/web-assets/prod/images/rebrand/logo.png"
            alt="Hotstar Logo"
          />
        </div>
        
        <div className="sidebar__menu">
          <ul>
            {[
              { icon: <FaHome />, title: "Home", path: "/" },
              { icon: <FaSearch />, title: "Search", path: "/search" },
              { icon: <FaTv />, title: "TV", path: "/tv" },
              { icon: <FaFilm />, title: "Movies", path: "/movies" },
              { icon: <FaPlay />, title: "Sports", path: "/sports" },
              { icon: <FaVideo />, title: "Live", path: "/live" },
              { icon: <FaList />, title: "Categories", path: "/categories" },
              { icon: <FaUser />, title: "Profile", path: "/profile" },
            ].map((item, index) => (
              <li key={index} className="sidebar__menu_list transition transform hover:scale-120 duration-300">
                <a href={item.path} aria-label={item.title}>
                  <span className="sidebar__icon">{item.icon}</span>
                  <span className="sidebar_menu_title">{item.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}