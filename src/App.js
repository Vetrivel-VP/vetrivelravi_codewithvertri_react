import "./App.css";
import Row from "./Row";
import requests from "./request";

function App() {
  return (
    <div className="App">
      <h1>testing</h1>
      <Row
        title="Web Development"
        course_name="Web"
        fetchUrl={requests.fetch_concepts}
      />
      {/* <Row title="Python Programming" /> */}
      {/* <Row title="Microsoft Excel" /> */}
    </div>
  );
}

export default App;
