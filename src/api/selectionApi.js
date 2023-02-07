import axios from "axios";

const selectionApi = axios.create({
  baseURL: "http://localhost:8000",
  timeout: 3000,
});

export default selectionApi;
