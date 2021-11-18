import React, { useState, useEffect } from "react";
import axios from "./myAxios";
import requests from "./request";
import "./Row.css";
import { BsPlayCircleFill, BsFillCloudDownloadFill } from "react-icons/bs";
import { useNavigate } from "react-router";
import moment from "moment";

function Row({ title, fetchUrl }) {
  const [concepts, setConcepts] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    async function fetchConceptData() {
      const request = await axios.get(fetchUrl);

      request.data.data.sort(
        (a, b) =>
          parseInt(b.concept_added_date) - parseInt(a.concept_added_date)
      );

      setConcepts(request.data.data);
      return request;
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
            <div className="row_concept" key={concept.concept_id}>
              <div className="divCount">{index + 1}</div>
              <img
                className="thumbnail"
                key={concept?.concept_id}
                src={concept?.concept_img}
                alt={concept?.concept_name}
                style={{ minWidth: "250px", minHeight: "150px" }}
              />

              <div className="divBack">
                <p>{concept?.concept_name}</p>

                <div className="icon">
                  <a
                    onClick={() => {
                      navigate("/video", {
                        state: { id: concept?.concept_id },
                      });
                    }}
                  >
                    <i>
                      <BsPlayCircleFill />
                    </i>
                  </a>
                  <a href={concept?.github_link}>
                    <i>
                      <BsFillCloudDownloadFill />
                    </i>
                  </a>
                </div>

                <p className="added_date">{`${moment(
                  new Date(parseInt(concept?.concept_added_date))
                ).fromNow()}`}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Row;
