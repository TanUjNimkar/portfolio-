import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getProfile = () => API.get("/profile");
export const getProjects = () => API.get("/projects");
export const getSkills = () => API.get("/skills");
export const getExperience = () => API.get("/experience");
export const getCertifications = () => API.get("/certifications");

export default API;