import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import "./YoutubeVideo.css";
import requests from "./request";
import { BsArrowReturnLeft, BsGithub } from "react-icons/bs";
import { useNavigate } from "react-router";
import MyLoader from "./MyLoader";

import axios from "./myAxios";

function YoutubeVideo() {
  let navigate = useNavigate();
  const location = useLocation();
  const [concept, setConcept] = useState([]);
  const [loading, setLoading] = useState(false);

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

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {loading ? (
        <MyLoader loading={loading} />
      ) : (
        <div className="watch">
          <div className="youtube_header">
            <i
              className="backIcon"
              onClick={() => {
                navigate("/");
              }}
            >
              <BsArrowReturnLeft />
            </i>

            <div className="download">
              <a href={concept?.github_link} target="_blank">
                <i>
                  <BsGithub />
                </i>
                <h2>Download</h2>
              </a>
            </div>
          </div>
          <div className="youtube">
            <div className="responsive_youtube">
              <iframe
                src={concept?.concept_video}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen=""
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default YoutubeVideo;
