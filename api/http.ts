import axios, { Axios } from "axios";

const http: Axios = axios.create({
  baseURL: "https://localhost:5001",
  headers: {
    "Content-Type": "application/json",
  },
});

export default http;
