import axios from "axios";

export const api = axios.create({
  baseURL: "https://food-explorer-backend-nrw4.onrender.com",
  //baseURL: "http://localhost:3333",
});
