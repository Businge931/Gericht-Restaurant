import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";

const Header = () => {
  return (
    <header className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading title="Chase The New Flavor" />
        <h1 className="app__header-h1">The key to fine dining</h1>
        <p className="p__opensans" style={{ margin: "1.5rem 0 1rem 0" }}>
          Gericht is an authentic, elegant-looking, Website UI for Restaurant
          business owners. This free UI comes with an impressive design that can
          convey the look and style of the restaurant.
        </p>
        <button type="button" className="custom__button">
          Explore Menu
        </button>
      </div>
      <div className="app__wrapper_img">
        <img src={images.welcome} alt="header img" />
      </div>
    </header>
  );
};

export default Header;
