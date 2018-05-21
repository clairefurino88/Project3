import axios from "axios";

export default {

  // API Routes (/api)
  createPost: (post) => { return axios.post("/api/posts/new") },
  deletePost: (postId) => { return axios.delete("/api/posts/delete")},
  getAllPosts: () => { return axios.get("/api/posts/all", posts); },
  getPostsByCat: (category) => { return axios.get("/api/posts/category", posts); },
  getPostsByUser: (userId) => { return axios.get("/api/posts/user", posts)},

  // User Routes (/auth)
  getLoggedOnUser: () => { return axios.get("/auth/getUser"); },
  login: (user) => { return axios.post("/auth/login", user) },
  logout: () => { return axios.get("/auth/logout"); },
  signUp: (newUser) => { return axios.post("/auth/signup", newUser) }
  
}