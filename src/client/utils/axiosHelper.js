import axios from 'axios'

const axiosClient = axios.create({
  timeout: 30 * 1000,
})

export default axiosClient
