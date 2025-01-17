import axios from "axios";

const API_URL = "http://localhost:8080"; 

class UserService {

    saveUser(user) {
        return axios.post(API_URL + "/saveUser", user);
    }
    getUserByUsername(username) {
        return axios.get(API_URL + "/" + username);
    }

}

export default new UserService;