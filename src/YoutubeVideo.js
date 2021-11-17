import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import "./YoutubeVideo.css";
import requests from "./request";
import { BsArrowReturnLeft } from "react-icons/bs";

import axios from "./myAxios";

function YoutubeVideo() {
  const location = useLocation();
  const [concept, setConcept] = useState([]);
  console.log(location.state.id);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        `${requests.fetch_single_content}${location.state.id}`
      );
      setConcept(request.data.data);
      console.log(request.data.data);
      return request;
    }

    fetchData();
  }, []);

  return (
    <div className="watch">
      <i className="backIcon">
        <BsArrowReturnLeft />
      </i>
      <div className="youtube">
        <div className="responsive_youtube">
          <iframe
            src={concept?.concept_video}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default YoutubeVideo;
