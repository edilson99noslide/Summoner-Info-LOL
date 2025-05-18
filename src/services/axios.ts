import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://<REGIÃO>.api.riotgames.com',
  headers: {
    'X-Riot-Token': import.meta.env.VITE_LOL_API_KEY,
  },
})

// Interceptor de erros globais
instance.interceptors.response.use(
  response => response,
  error => {
    // Erros de limite
    if (error.response?.status === 429) {
      console.warn('Tempo limite excedido')
    }
    return Promise.reject(error)
  }
)

export default instance
