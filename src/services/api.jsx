import axios from "axios";

const api = axios.create({
  baseURL: "https://q4-capstone-django.herokuapp.com",
});

export default api;
