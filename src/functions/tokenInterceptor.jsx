import Axios from "axios";
const tokenInterceptor = () => {
  Axios.interceptors.request.use(
    (config) => {
      // Get the token from local storage
      const token = localStorage.getItem("token");

      // If a token exists, add it to the Authorization header
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};
export default tokenInterceptor;
