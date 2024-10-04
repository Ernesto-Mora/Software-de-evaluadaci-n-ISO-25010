import axios from 'axios';

// Configurar instancia de Axios con la URL base de la API
const api = axios.create({
  baseURL: 'http://localhost:3000/api', // Cambia la URL según tu configuración
});

// Token JWT en el header de Authorization
const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common['Authorization'];
  }
};

// Función para crear una evaluación
export const createEvaluation = (data) => {
  return api.post('/evaluations', data);
};

// Exportar funciones para llamadas a la API
export const login = (data) => api.post('/auth/login', data);
export const register = (data) => api.post('/auth/register', data);
export const getSoftware = () => api.get('/software');
export const createSoftware = (data) => api.post('/software', data);

export default api;
