import axios from "axios";

const client = axios.create({
  baseURL: "https://your-api-base-url.com/api", // Replace with your API base URL
  timeout: 10000, // Request timeout
  headers: {
    "Content-Type": "application/json",
    // You can add default headers here
  },
});

// Add request interceptor
client.interceptors.request.use(
  (config) => {
    // You can modify the request config here (e.g., add auth token)
    // const token = await getAuthToken(); // Example for getting token
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor
client.interceptors.response.use(
  (response) => response.data, // Return only the data from the response
  (error) => {
    // Handle errors globally
    if (error.response) {
      // The request was made and the server responded with a status code
      console.error(
        "Response error:",
        error.response.status,
        error.response.data
      );
    } else if (error.request) {
      // The request was made but no response was received
      console.error("Request error:", error.request);
    } else {
      // Something happened in setting up the request
      console.error("Error:", error.message);
    }

    return Promise.reject(error);
  }
);

export default client;
