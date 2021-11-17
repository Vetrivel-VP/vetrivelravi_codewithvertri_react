import React, { useState, useEffect } from "react";
import "./Banner.css";
import axios from "./myAxios";
import requests from "./request";
import { useNavigate } from "react-router";

import {
  BsFillPlayFill,
  BsYoutube,
  BsFillCloudDownloadFill,
} from "react-icons/bs";

function Banner() {
  let navigate = useNavigate();
  const [concept, setConcept] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetch_concepts);
      setConcept(
        request.data.data[
          Math.floor(Math.random() * request.data.data.length - 1)
        ]
      );
      return request;
    }

    fetchData();
  }, []);

  return (
    <header
      className="banner"
      style={{
        // backgroundSize: "cover",
        // backgroundImage: `url(${concept?.concept_img})`,
        "--my-image-background": `url(${concept?.concept_img})`,
        // backgroundPosition: "center",
        // backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner_content">
        <h1 className="banner_title">{concept?.concept_name}</h1>
        <div className="banner_buttons">
          <button
            className="banner_button"
            onClick={() => {
              navigate("/video", { state: { id: concept?.concept_id } });
            }}
          >
            <BsFillPlayFill className="banner_button_icon" /> <p>Play</p>
          </button>
          <button className="banner_button">
            <BsFillCloudDownloadFill className="banner_button_icon" />{" "}
            <p>Download</p>
          </button>

          <button className="banner_button">
            <BsYoutube className="banner_button_icon" /> <p>Subscribe</p>
          </button>
        </div>

        <div className="banner_description">
          <p>
            Take your knowledge and passion for a subject beyond the classroom,
            boardroom, or your drawing board
          </p>
        </div>
      </div>

      <div className="banner_bottom"></div>
    </header>
  );
}

export default Banner;
