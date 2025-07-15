import axios from "axios";

// Cria uma instância do axios com configurações padrão
const api = axios.create({
  baseURL: "http://localhost:8000/api/v1",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
