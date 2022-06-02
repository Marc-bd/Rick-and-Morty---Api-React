import axios from "axios";

export const BASE_URL = "https://rickandmortyapi.com/api";

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
});

export default api;

export function clearBaseUrl(url) {
  const newUrl = url.replace(BASE_URL, "");
  return newUrl;
}
