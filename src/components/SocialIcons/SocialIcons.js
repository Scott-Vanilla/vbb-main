import React from "react";
import fbicon from "../../assets/fb-icon.jpeg";
import igicon from "../../assets/ig-icon.png";

const SocialIcons = ({ isFacebookVisable, isInstagramVisable }) => (
  <div class="bx--grid vbb-main-social-icons">
    <div class="bx--row">
      <div class="bx--col-lg-2" />
      {isFacebookVisable && (
        <div class="bx--col-lg-4">
          <a href="https://www.facebook.com/vanillabonbondrag">
            <div class="bx--grid vbb-main-social-icons__fb">
              <img
                src={fbicon}
                height="40px"
                width="40px"
                alt="Facebook Logo"
              />
            </div>
          </a>
        </div>
      )}
      {isInstagramVisable && (
        <div class="bx--col-lg-4">
          <a href="https://www.instagram.com/vanillabonbondrag/">
            <div class="bx--grid vbb-main-social-icons__ig">
              <img
                src={igicon}
                height="40px"
                width="40px"
                alt="Instagram Logo"
              />
            </div>
          </a>
        </div>
      )}
    </div>
    <div class="bx--col-lg-2" />
  </div>
);

export default SocialIcons;
