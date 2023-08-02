import axios, { Axios } from "axios";

const http: Axios = axios.create({
  baseURL: "http://127.0.0.1:5001/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default http;
