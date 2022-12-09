import axios from "axios";

const API_URL = "https://localhost:5001/api/account/";

class AuthService {
  async login(username: string, password: string) {
    return await axios
      .post(API_URL + "login", {
        username,
        password
      })
      .then(response => {
        console.log("REsponse: ", response)
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
          console.log("response.data")
        }

        return response.data
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username: string, email: string, password: string) {
    return axios.post(API_URL + "register", {
      username,
      email,
      password
    });
  }

  getCurrentUser() {
    const userStr = localStorage.getItem("user");
    console.log("GET CURRENT USER:", userStr)
    if (userStr) return JSON.parse(userStr);

    return null;
  }
}

export default new AuthService();