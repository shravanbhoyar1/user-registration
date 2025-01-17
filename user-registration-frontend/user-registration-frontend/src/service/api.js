import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
  getUserByUsername(username){
    return axios.get(this.baseURL+"/"+username);
  }
});

export default instance;
