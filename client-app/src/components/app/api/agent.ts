import axios, { AxiosResponse } from "axios";
import { request } from "http";
import { IActivity } from "../models/activity";

axios.defaults.baseURL = "http://localhost:5000/api";

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string) => axios.get(url).then(responseBody),
  getActivity: (url: string) => axios.get(url).then(responseBody),
  post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
  put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
  delete: (url: string) => axios.delete(url).then(responseBody),
};

const Activities = {
  list: () => requests.get("/activities"),
  activity: (id: string) => requests.getActivity(`/activities/${id}`),
  create: (body: {}) => requests.post(`/activities`, body),
  edit: (id: string, body: {}) => requests.put(`/activities/${id}`, body),
  delete: (id: string) => requests.delete(`/activities/${id}`),
};

const agent = {
  Activities,
};

export default agent;
