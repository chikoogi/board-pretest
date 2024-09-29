import axios from "axios";

export const REPO_OWNER = "chikoogi";
export const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

export const axiosInstance = axios.create({
  baseURL: `https://api.github.com`,
  headers: { Authorization: `token ${GITHUB_TOKEN}` },
});

export const axiosInstanceFree = axios.create({
  baseURL: `https://api.github.com/repos/${REPO_OWNER}/freeboard`,
  headers: { Authorization: `token ${GITHUB_TOKEN}` },
});

export const axiosInstanceQuestion = axios.create({
  baseURL: `https://api.github.com/repos/${REPO_OWNER}/questionboard`,
  headers: { Authorization: `token ${GITHUB_TOKEN}` },
});

export const axiosInstanceGraphGL = axios.create({
  baseURL: `https://api.github.com/graphql`,
  headers: { Authorization: `token ${GITHUB_TOKEN}` },
});
