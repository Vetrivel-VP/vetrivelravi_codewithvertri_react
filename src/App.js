import React, { useEffect, useState } from "react";

import "./App.css";
import Row from "./Row";
import requests from "./request";
import Banner from "./Banner";
import MyLoader from "./MyLoader";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <MyLoader loading={loading} />
      ) : (
        <div>
          <Banner />

          <Row
            title="Modern Landing Pages"
            fetchUrl={requests.fetch_concept_landingpage}
          />

          <Row
            title="HTML5 CSS3 Tips &  Tricks"
            fetchUrl={requests.fetch_concept_web}
          />

          <Row
            title="Python Programming"
            fetchUrl={requests.fetch_concept_python}
          />

          <Row
            title="Microsoft Excel"
            fetchUrl={requests.fetch_concept_excel}
          />
        </div>
      )}
    </div>
  );
}

export default App;
