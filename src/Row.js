import React, { useState, useEffect } from "react";
import axios from "./myAxios";
import "./Row.css";

function Row({ title, fetchUrl }) {
  const [concepts, setConcepts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setConcepts(request.data.data);
      return request;
    }

    fetchData();

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
          concepts.map((concept) => (
            <img
              className="row_concept"
              key={concept.concept_id}
              src={concept.concept_img}
              alt={concept.concept_name}
            />
          ))}
      </div>
    </div>
  );
}

export default Row;
