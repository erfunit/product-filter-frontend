import axios, { Axios } from "axios";

const http: Axios = axios.create({
  baseURL: "http://localhost:3000/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default http;
