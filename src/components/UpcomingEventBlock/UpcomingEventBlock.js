import React from "react";
import { Tile } from "carbon-components-react";

//import imgLink from "";

const UpcomingEventBlock = ({
  eventName,
  venueName,
  date,
  imgUrl,
  imgAlt,
  moreInfoLink,
}) => (
  <div class="bx--grid vbb-main-upcoming-event-block">
    <div class="bx--row ">
      <div class="bx--col-lg-10 bx--offset-lg-1 vbb-main-upcoming-event-block">
        <Tile>
          <div class="bx--grid vbb-main-upcoming-event-block__content">
            <div class="bx--row ">
              <div class="bx--col-lg-4 vbb-main-upcoming-event-block__content__img">
                <img height="250px" width="250px" src={imgUrl} alt={imgAlt} />
              </div>
              <div class="bx--col-lg-8 vbb-main-upcoming-event-block__content__info">
                <h2>{eventName}</h2>
                <h4>
                  {venueName} || {date}
                </h4>
                <a className="vbb-main-upcoming-event-block__content__info__link" href={moreInfoLink}>
                  <h4>Read More...</h4>
                </a>
              </div>
            </div>
          </div>
        </Tile>
      </div>
    </div>
  </div>
);

export default UpcomingEventBlock;
