import React from "react";
import { Button } from "carbon-components-react";
import vbb_icon from "../../assets/vbb-icon-full.png";
import vbb_text_icon from "../../assets/text-logo.png"

const NavBar = () => (
  <div class="bx--grid vbb-main-nav-bar">
    <div class="bx--row">
      <div class="bx--col-lg-3 vbb-main-nav-bar__button-container">
        <a href="">
        <img
            src={vbb_text_icon}
            width="300px"
            alt="Vanilla BonBon Logo"
          />
          <img
            src={vbb_icon}
            height="100px"
            width="100px"
            alt="Vanilla BonBon Logo"
          />
        </a>
      </div>
      <div class="bx--col-lg-2 vbb-main-nav-bar__button-container">
        <Button className="bx--btn--primary vbb-main-nav-bar__button">
          Home
        </Button>
      </div>
      <div class="bx--col-lg-2 vbb-main-nav-bar__button-container">
        <Button className="bx--btn--primary vbb-main-nav-bar__button">
          About
        </Button>
      </div>
      <div class="bx--col-lg-2 vbb-main-nav-bar__button-container">
        <Button className="bx--btn--primary vbb-main-nav-bar__button">
          Upcoming Shows
        </Button>
      </div>
      <div class="bx--col-lg-2 vbb-main-nav-bar__button-container">
        <Button className="bx--btn--primary vbb-main-nav-bar__button">
          Book Now
        </Button>
      </div>
    </div>
  </div>
);

export default NavBar;
