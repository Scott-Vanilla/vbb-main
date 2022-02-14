import React from "react";
import { Button } from "carbon-components-react";
import vbb_icon from "../../assets/vbb-icon-full.png";

import SocialIcons from "../SocialIcons/SocialIcons";

const NavBar = () => (
  <div class="bx--grid vbb-main-nav-bar">
    <div class="bx--row vbb-main-nav-bar__logo-row">
      <div class="bx--col-lg-2 vbb-main-nav-bar__button-container" />
      <div class="bx--col-lg-8 vbb-main-nav-bar__button-container">
        <a href="/">
          <img
            src={vbb_icon}
            height="200px"
            width="200px"
            alt="Vanilla BonBon Logo"
            className="vbb-main-nav-bar__vbb-icon"
          />
        </a>
      </div>
      <div class="bx--col-lg-2 vbb-main-nav-bar__button-container">
        <SocialIcons isInstagramVisable={true} isFacebookVisable={true} />
      </div>
    </div>
    <div class="bx--row vbb-main-nav-bar__links">
      <div class="bx--col-lg-2 vbb-main-nav-bar__button-container" />
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
      <div class="bx--col-lg-2 vbb-main-nav-bar__button-container" />
    </div>
  </div>
);

export default NavBar;
