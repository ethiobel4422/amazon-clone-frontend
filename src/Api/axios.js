import axios from "axios";
const axiosInstance = axios.create({
  // baseURL: "http://127.0.0.1:5001/demo-no-project/us-central1/api",
  baseURL: "https://amazon-api-deploy-ffqq.onrender.com"

});
export { axiosInstance };
