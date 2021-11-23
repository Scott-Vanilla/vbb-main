import React from "react";

const FeatureImage = ({featureImage}) => (
  <div class="bx--grid vbb-main-nav-bar">
    <div class="bx--row">
    <div class="bx--col-lg-16">
        <img className="vbb-main-feature-image__img" src={featureImage}/>
    </div>
    </div>
  </div>
);

export default FeatureImage