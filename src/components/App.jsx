import React, { useState } from "react";
import Header from "./Header";
import Chores from './Chores';
import Temperaments from "./Temperaments";
import Lifestyle from "./Lifestyle";
import Cleanliness from "./Cleanliness";
import Schedule from "./Schedule";
import Work from "./Work";
import Education from "./Education"
import Personality from "./Personality"

function App() {

  return (
    <div>
      <Header />
      <Chores />
      <Temperaments />
      <Lifestyle />
      <Cleanliness />
      <Schedule />
      <Work />
      <Education />
      <Personality />
    </div>
  );
}

export default App;
