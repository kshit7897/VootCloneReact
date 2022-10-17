import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="main-div">
        <div className="left-navbar">
          <img
            className="voot-img"
            src="https://www.voot.com/images/Voot-Logo.svg"
            alt="#"
          />
          <img
            className="line-img"
            src="https://www.voot.com/images/upgrade-line.svg"
            alt="#"
          />
          <button className="upgrade">Upgrade</button>
        </div>
        <div className="right-navbar">
          <ul>
            <input
              className="input-search"
              type="text"
              placeholder="Search Here"
            />
            <i className="fa-solid fa-magnifying-glass"></i>
            <li>
              <NavLink to="/">My Voot</NavLink>
            </li>
            <li>
              <NavLink to="/Premium">Premium</NavLink>
            </li>
            <li>
              <NavLink to="/Sport">Sport</NavLink>
            </li>
            <li>
              <NavLink to="/Shows">Shows</NavLink>
            </li>
            <li>
              <NavLink to="/Movies">Movies</NavLink>
            </li>
            <li>
              <NavLink to="/Kids">Kids</NavLink>
            </li>
            <li>
              <NavLink to="/Channels">Channels</NavLink>
            </li>
            <i className="fa-regular fa-circle-user"></i>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
