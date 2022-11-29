import React from "react";
import { images } from "../../constants";
import { SubHeading } from "../../components";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app_wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h4 className="headtext__cormorant">What We Believe In</h4>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="chef quote" />
          <p className="p__opensans">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>
        <p className="p__opensans">
          Adipisci pariatur omnis labore perferendis itaque earum ab qui ut nisi
          ad architecto.vel error maxime, voluptates magnam aut veritatis
          deleniti.
        </p>
      </div>

      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="shef signature" />
      </div>
    </div>
  </div>
);

export default Chef;
