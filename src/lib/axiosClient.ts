import axios, { AxiosError } from "axios";

const axiosInstance = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response) {
      // that falls out of the range of 2xx
      console.error(
        `Error Response: ${error.response.status} - ${JSON.stringify(
          error.response.data
        )}`,
        `Request URL: ${error.config?.url}`
      );
    } else if (error.request) {
      // The request was made but no response was received
      console.error(
        "Error Request:",
        error.request,
        `Request URL: ${error.config?.url}`
      );
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error(
        "Error Message:",
        error.message,
        `Request URL: ${error.config?.url}`
      );
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
