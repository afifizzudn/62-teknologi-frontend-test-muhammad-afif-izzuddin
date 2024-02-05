import axios from "axios";
// to avoid CORS issues, i add https://cors-anywhere.herokuapp.com/ to bypass CORS before base api url
const BYPASS_CORS = "https://cors-anywhere.herokuapp.com/";
const BASE_URL = "https://api.yelp.com/v3";
const API_KEY = "Ubf1-f0uqsJUnssqPMGo-tiFeZTT85oFmKfznlPmjDtX8s83jYMoAb-ApuD63wgq6LDZNsUXG6gurZIVYaj2jzxJmmLdCdXbDqIHU_b6KiCEVi8v-YB0OSsW6MWaY3Yx";

export const api = axios.create({
  baseURL: BYPASS_CORS + BASE_URL,
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${API_KEY}`
  },
});
