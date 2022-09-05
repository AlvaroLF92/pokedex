import React from "react";
import './Navbar.css';

const Navbar = () => {
  const LOGOIMG =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  return (
    <nav>
      <div>
        <img alt="pokeapi-logo" src={LOGOIMG} className="navbar_img" />
      </div>
    </nav>
  );
};

export default Navbar;
