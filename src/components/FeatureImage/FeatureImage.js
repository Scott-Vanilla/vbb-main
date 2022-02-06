import React from "react";

const FeatureImage = ({featureImageUrl, title}) => (
  <div class=" vbb-main-feature-image">
    <div className="vbb-main-feature-image__img" style={{ backgroundImage: `url(${featureImageUrl})` }}>
    </div>
      <div className="vbb-main-feature-image__content">
        <h1 className="vbb-main-feature-image__content__title"> {title.toUpperCase()} </h1>
        <span className="vbb-main-feature-image__content__subtitle"> SEE MORE... </span>
      </div>
  </div>
);

export default FeatureImage