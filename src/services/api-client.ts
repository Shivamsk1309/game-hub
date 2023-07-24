import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "8e668cee92c94e6d9c522285a15939ce", //this key will be included in query string of every http request to backend
  },
});