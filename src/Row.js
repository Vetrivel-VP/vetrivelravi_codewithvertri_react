import React, { useState, useEffect } from "react";
import axios from "./myAxios";

function Row({ title, course_name, fetchUrl }) {
  const [cources, setCourses] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}

export default Row;
