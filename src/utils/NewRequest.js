import axios from "axios";

const NewRequest = axios.create({
  baseURL: "http://localhost:5000/api",
  // baseURL: "https://jobquest-api.onrender.com/api/",
  withCredentials: true,
});

export default NewRequest;
