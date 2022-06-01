import axios from "axios";

export const BASE_URL = "https://rickandmortyapi.com/api/character/";

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
});

export default api;
