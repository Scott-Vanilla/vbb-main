import React from "react";
import FadeIn from "react-fade-in";

import NavBar from "./components/NavBar/NavBar";
import FeatureImageWithTextBlock from "./components/FeatureImageWithTextBlock/FeatureImageWithTextBlock";
import UpcomingEventBlock from "./components/UpcomingEventBlock/UpcomingEventBlock";
import Events from "./data/test/UpcomingEvents.json";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <FadeIn delay={400} transitionDuration={800}>
        <NavBar />
        <FeatureImageWithTextBlock />
        <h2>Upcoming Events</h2>
        {Events.events.map((item, i) => {
          return (
            <UpcomingEventBlock
              key={i}
              eventName={item.eventName}
              venueName={item.venueName}
              date={item.date}
              imgUrl={item.imgUrl}
              imgAlt={item.imgAlt}
              moreInfoLink={item.moreInfoLink}
            />
          );
        })}
      </FadeIn>
    </div>
  );
}

export default App;
