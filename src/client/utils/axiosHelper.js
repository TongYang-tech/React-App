import axios from 'axios'

const axiosClient = axios.create({
  baseURL: "/api",
  timeout: 3000,
  headers: {
    'Content-Type': "application/json"
  }
})

export default axiosClient
