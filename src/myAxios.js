import axios from "axios";

// base url request

const instance = axios.create({
  baseURL: "https://us-central1-codewithvetriapi-c56e3.cloudfunctions.net/app/",
});

export default instance;
