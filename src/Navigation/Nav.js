import { RiHeart3Line  } from "react-icons/ri";
import { RiHeartAdd2Line } from "react-icons/ri";

import { TbShoppingCart } from "react-icons/tb";
import { TbShoppingCartCheck } from "react-icons/tb";
import { GoPerson, GoPersonAdd  } from "react-icons/go";

import { useState } from "react";

import "./Nav.css";

function Nav({ query, handleputChange }) {

  const [isHearted, setIsHearted] = useState(false); // 초기 상태는 false로 설정
  const [isCart, setIsCart] = useState(false); 
  const [isPerson, setIsPerson] = useState(false); 

  const handleClick = () => {
    setIsHearted(!isHearted); // 상태를 반전시킴
  };
  const handleClick2 = () => {
    setIsCart(!isCart);
  };
  const handleClick3 = () => {
    setIsPerson(!isPerson); 
  };

  return (
    <nav>
      <div className="nav-container">
        <input
          query={query}
          onChange={handleputChange}
          className="search-input" type="text" placeholder="Enter your search shoes." />
      </div>
      <div className="profile-container">
        <a href="#" onClick={handleClick}>
          {isHearted ? <RiHeartAdd2Line className="nav-icons" /> : <RiHeart3Line  className="nav-icons" />}
        </a>
        <a href="#" onClick={handleClick2}>
          {isCart ? <TbShoppingCartCheck className="nav-icons" /> : <TbShoppingCart className="nav-icons" />}
        </a>
        <a href="#" onClick={handleClick3}>
          {isPerson ? <GoPersonAdd className="nav-icons"/> : <GoPerson className="nav-icons" /> }
        </a>
      </div>
    </nav>
  )
}

export default Nav;
