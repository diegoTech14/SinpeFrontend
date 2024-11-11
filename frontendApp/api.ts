import axios from "axios";

const api = axios.create({
    baseURL: 'https://7yfystvc80.execute-api.us-east-1.amazonaws.com/contacts',
    timeout: 30000,
  });
  
  export default api;