import React from "react";

import NavBar from "./components/NavBar/NavBar";
import FeatureImageWithTextBlock from "./components/FeatureImageWithTextBlock/FeatureImageWithTextBlock";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <NavBar />
      <FeatureImageWithTextBlock/>
    </div>
  );
}

export default App;
