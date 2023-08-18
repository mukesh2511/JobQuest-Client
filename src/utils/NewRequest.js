import axios from "axios";

const NewRequest = axios.create({
  baseURL: "https://jobquest-api.onrender.com/api/",
  withCredentials: true,
});

export default NewRequest;
