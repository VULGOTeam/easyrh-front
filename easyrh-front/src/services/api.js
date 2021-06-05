import axios from "axios";

const api = axios.create({
  baseURL: "http://staging-easyrh.sa-east-1.elasticbeanstalk.com/",
});

export default api;