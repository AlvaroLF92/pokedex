import React from "react";
import './Navbar.css';

const Navbar = () => {
  const LOGO =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  return (
    <nav className="nav">
      <div>
        <img alt="pokeapi-logo" src={LOGO} className="navbar_img" />
      </div>
    </nav>
  );
};

export default Navbar;
