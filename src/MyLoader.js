import React from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import "./Myloader.css";

function MyLoader({ loading }) {
  return (
    <div className="myLoader">
      <ClimbingBoxLoader color={"#E50914"} loading={loading} size={30} />
    </div>
  );
}

export default MyLoader;
