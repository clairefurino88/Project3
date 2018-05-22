import axios from "axios";

export default {

  // API Methods (/api)
  createPost: (post) => { return axios.post("/api/posts/new", post) },
  deletePost: (postId) => { return axios.delete("/api/posts/delete", postId); },
  getAllPosts: () => { return axios.get("/api/posts/all"); },
  getPostsByCat: (category) => { return axios.get("/api/posts/category/" + category); },
  getPostsByUser: () => { return axios.get("/api/posts/user"); },

  // User Authentication Methods (/auth)
  getLoggedOnUser: () => { return axios.get("/auth/getUser"); },
  login: (user) => { return axios.post("/auth/login", user) },
  logout: () => { return axios.get("/auth/logout"); },
  signUp: (newUser) => { return axios.post("/auth/signup", newUser) }
  
}