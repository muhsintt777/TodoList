import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:3500",
});

export default api;
