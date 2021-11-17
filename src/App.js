import React from "react";

import "./App.css";
import Row from "./Row";
import requests from "./request";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    // <Routes>
    <div className="App">
      {/* Banner */}
      <Banner />

      {/* Landing Pages */}
      <Row
        title="Modern Landing Pages"
        fetchUrl={requests.fetch_concept_landingpage}
      />

      {/* Html and css  */}

      <Row
        title="HTML5 CSS3 Tips &  Tricks"
        fetchUrl={requests.fetch_concept_web}
      />

      {/* <Row title="Python Programming" /> */}

      <Row
        title="Python Programming"
        fetchUrl={requests.fetch_concept_python}
      />
      {/* <Row title="Microsoft Excel" /> */}

      <Row title="Microsoft Excel" fetchUrl={requests.fetch_concept_excel} />
    </div>

    // <Route path="/video" element={<YoutubeVideo />} />
    // </Routes>
  );
}

export default App;
