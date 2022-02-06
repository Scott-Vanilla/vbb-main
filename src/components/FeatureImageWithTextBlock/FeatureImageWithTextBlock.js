import React from "react";
import FeatureImage from "../FeatureImage/FeatureImage";

const FeatureImageWithTextBlock = () => (
  <div class="bx--grid vbb-main-feature-image-with-text-block">
    <div class="bx--row">
      <div class="bx--col-lg-6 vbb-main-feature-image-with-text-block__img">
      <FeatureImage featureImageUrl='https://lh3.googleusercontent.com/-2bIoO7MC52Q/YbFSur2jBBI/AAAAAAAAHGY/2eP6ewacXm0jdToQdBd7KTRDmXxOf3IngCNcBGAsYHQ/w1684-h1069-p-k-no-nu/vanilla-feature-image-3.png' title="Latest Show: Memory Box Croydon" />
      </div>
      <div class="bx--col-lg-6">
      <FeatureImage featureImageUrl='https://blogger.googleusercontent.com/img/a/AVvXsEgD7KJUKyj41QHVf-AbC8W3z-u2-51xdCNaHzMunC6Hte2UBzGZ0K8m3mKRPH_VqGZA1Y8t94J6q4Rzg-jDbYS7ibxWB2je3TV2moHTgLtbqckLiJD8qxpyyyXGLPsH2PKXeJo8y_-7-yjFCJRxSaPGcSMddlNmBkxycmPNhWQuARUSA1F8G1JtWJpQwQ=w1684-h1069-p-k-no-nu' title="Crowned Miss Drag Congeniality UK 2021" />
      </div>
    </div>
  </div>
);

export default FeatureImageWithTextBlock;