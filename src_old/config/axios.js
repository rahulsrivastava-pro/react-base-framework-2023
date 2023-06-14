import axios from 'axios'

const axiosClient = axios.create({
  baseURL: 'http://localhost:7000/'
})

export default axiosClient
