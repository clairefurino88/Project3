import axios from "axios";

export default {

  getLoggedOnUser: () => { return axios.get("/auth/getUser"); },
  login: (user) => { return axios.post("/auth/login", user) },
  logout: () => { return axios.get("/auth/logout"); },
  signUp: (newUser) => { return axios.post("/auth/signup", newUser) }
  
}