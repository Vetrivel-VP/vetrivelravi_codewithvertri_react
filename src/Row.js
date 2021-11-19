import React, { useState, useEffect } from "react";
import axios from "./myAxios";
import requests from "./request";
import "./Row.css";
import { FaPlay } from "react-icons/fa";
import { BiCloudDownload } from "react-icons/bi";
import { useNavigate } from "react-router";
import moment from "moment";

function Row({ title, fetchUrl, trainerUrl }) {
  const [concepts, setConcepts] = useState([]);
  const [trainers, setTrainers] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    async function fetchConceptData() {
      const request = await axios.get(fetchUrl);
      const trainer = await axios.get(trainerUrl);

      request.data.data.sort(
        (a, b) =>
          parseInt(b.concept_added_date) - parseInt(a.concept_added_date)
      );

      setConcepts(request.data.data);
      setTrainers(trainer.data.data);

      return request, trainers;
    }

    fetchConceptData();
    const scrollContainer = document.querySelectorAll(".row_conepts");

    scrollContainer.forEach((container) => {
      container.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        container.scrollLeft += evt.deltaY;
      });
    });
  }, [fetchUrl]);

  return (
    <div className="row">
      <h1 className="row_title">{title}</h1>

      <div className="row_conepts">
        {concepts &&
          concepts.map((concept, index) => (
            <div className="row_concept" key={concept?.concept_id}>
              <div className="video_count">{index + 1}</div>
              <div className="front">
                <img src={concept?.concept_img} />
              </div>
              <div className="back">
                <div className="video_info">
                  <p className="video_title">{concept?.concept_name}</p>

                  <div className="video_buttons">
                    <a
                      onClick={() => {
                        navigate("/video", {
                          state: { id: concept?.concept_id },
                        });
                      }}
                    >
                      <i>
                        <FaPlay />
                      </i>
                    </a>
                    <a href={concept?.github_link}>
                      <i>
                        <BiCloudDownload />
                      </i>
                    </a>
                  </div>

                  <div className="trainers">
                    {trainers &&
                      trainers.map((trainer) => (
                        <div className="trainerProfile" key={trainer?.id}>
                          <div className="profileImage">
                            <img src={trainer?.trainer_img} />
                          </div>
                          <p> {trainer?.trainer_name}</p>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
              <div className="backGround"></div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Row;
