import { GoHeart } from "react-icons/go";
import { LuShoppingCart } from "react-icons/lu";
import { FiUserPlus } from "react-icons/fi";
import { useState } from "react";

import "./Nav.css";

function Nav() {

  return (
    <nav>
      <div className="nav-container">
        <input className="search-input" type="text" placeholder="Enter your search shoes." />
      </div>
      <div className="profile-container">
        <a href="#">
          <GoHeart  className="nav-icons" />
        </a>
        <a href="#">
          <LuShoppingCart className="nav-icons"/>
        </a>
        <a href="#">
          <FiUserPlus  className="nav-icons"/>
        </a>
      </div>


    </nav>
  )
}

export default Nav;
