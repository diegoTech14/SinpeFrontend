import axios from "axios";

// Configuración de la instancia de Axios
const api = axios.create({
    baseURL: 'https://7yfystvc80.execute-api.us-east-1.amazonaws.com/contacts', // Reemplaza con la URL base de tu API
    timeout: 30000, // Tiempo de espera opcional de 10 segundos
  });
  
  export default api;